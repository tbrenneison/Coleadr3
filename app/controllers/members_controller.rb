class MembersController < ApplicationController 
  
  def index 
    if params[:organization_id].to_i == @organization.id
      render json: @organization.members
    else 
      raise ActiveRecord::RecordNotFound
    end
  end
  
  def show
    member = @organization.members.find(params[:id])
    render json: member
  end 
  
  
  
end