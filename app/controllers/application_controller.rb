class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  
  #fix this later
  #cross site scripting protection (SCRF) - Ruby thinks Angular is mucking with its data maliciously when this is enabled
  #protect_from_forgery with: :exception
  
  before_filter :set_organization
  
  def set_organization
    @organization = Organization.find(1)
    #@organization = current_user.organization
  end
  
end
