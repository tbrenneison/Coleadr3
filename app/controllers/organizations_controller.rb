class OrganizationsController < ApplicationController 
  
  def index 
    organizations = Organization.all.order(:name)
    render json: organizations
  end
  
  def show
    organization = Organization.find params[:id]
    render json: organization
  end 
  
end