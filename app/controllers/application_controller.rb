class ApplicationController < ActionController::Base
  
  before_filter :authenticate_user!
  before_filter :set_context
  before_filter :check_permissions!
  
  #keeps permissions check from becoing unhandled
  rescue_from CanCan::AccessDenied, with: :access_denied 
  def access_denied
    #render 403 inside layout
    render :forbidden, text: "NO BAD NONE FOR YOU", layout: true
  end
  
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  
  #fix this later
  #cross site scripting protection (SCRF) - Ruby thinks Angular is mucking with its data maliciously when this is enabled
  #protect_from_forgery with: :exception
  
  def after_sign_in_path_for(user)
    organization_path(user.organizations.first)
  end
  
  private
  
  def set_context
  end
  
  def check_permissions!
  end
  
end
