class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # :validatable
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable
         
  validates :first_name, :last_name, :email, :password, :presence => true
  
end
