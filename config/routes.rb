Rails.application.routes.draw do
  root to: "home#index"
  
  resources :organizations, shallow: true do
    #resources is Rails being dumb and trying to help by writing your routes for you
    #resources :modelName, except: [:fortheseones]
    resources :members, except: [:new,:edit]
  end
  
end
