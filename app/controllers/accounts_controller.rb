class AccountsController < ApplicationController 
  skip_before_filter :authenticate_user!
  
  def new 
    @account = Account.new
  end
  
  def create
    @account = Account.new(account_request_params)
    if @account.valid? 
      @account.user.save
      sign_in(@account.user)
      @organization = Organization.new(name: @account.organization_name)
      @organization.save
      @organization.invite current_user, :admin
      #redirect
      redirect_to organization_path(@organization)
    else 
      #view
      render :new 
    end
  end
  
  private
  def account_request_params
    params.require(:account).permit(
    :organization_name, 
    :first_name,
    :last_name,
    :email,
    :password)
  end
  
end