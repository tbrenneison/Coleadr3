class ApplicationController < ActionController::Base
  
  before_filter :authenticate_user!
  
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  
  #fix this later
  #cross site scripting protection (SCRF) - Ruby thinks Angular is mucking with its data maliciously when this is enabled
  #protect_from_forgery with: :exception
  
  def after_sign_in_path_for(user)
    organization_path(user.organizations.first)
  end
  
  
end
