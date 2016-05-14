class HomeController < ApplicationController 
  skip_before_filter :authenticate_user!
  
  def show
      render template: "home/#{params[:page]}"
    end
    
end