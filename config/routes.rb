Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  
  resources :accounts, only: [:new, :create]
  
  resources :organizations, except: [:edit], shallow: true do
    get 'json', :on => :collection
    #resources is Rails being dumb and trying to help by writing your routes for you
    #resources :modelName, except: [:fortheseones]
    resources :members, except: [:new,:edit]
  end
  
  PagesController.action_methods.each do |action|
    get "/#{action}", to: "pages##{action}", as: "#{action}_page"
  end
  
end
