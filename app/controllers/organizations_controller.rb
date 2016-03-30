class OrganizationsController < ApplicationController 
  
  def index 
    organizations = Organization.all.order(:name)
    render json: organizations
  end
  
  def show
    organization = Organization.find params[:id]
    render json: organization
  end 
  
  def new 
    #GET
    #generates model object that will be passed to the view and posted to create action
    @organization = Organization.new 
  end
  
    #POST
    #controller gets nested hash params[:organization] with the attributes set in the form
    def create
      organization = Organization.new(organization_request_params)
      if organization.save
        render json: organization
      else
        #return http 422 unprocessable entity
        render json: {errors: organization.errors.full_messages}, status: 422
      end
    end

  
  private 
    def organization_request_params
      #security measure - these are the only parameters that will be accepted 
      #hands back a filtered hash of values to be handed back in to the action 
        params.require(:organization).permit(
          :name
        )
      end 
  
end