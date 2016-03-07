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
  
  def create
    member = Member.new(member_request_params)
    member.organization = @organization
    if member.save
      render json: member
    else
      render json: {errors: member.errors.full_messages}, status: 422
    end
  end
  

private 
  def member_request_params
      params.require(:member).permit(
        :first_name, 
        :last_name
      )
    end
  
  
end