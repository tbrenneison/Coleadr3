class PagesController < ApplicationController
  skip_before_filter :authenticate_user!
  
  def about
    render
  end
  
end