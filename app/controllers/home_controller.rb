class HomeController < ApplicationController 
  skip_before_filter :authenticate_user!
  
  def show
  end
    
  def json
    @organization = current_user.organizations.first
    json = { :organization => @organization, :members => @organization.members.all }
    render json: json
  end

end