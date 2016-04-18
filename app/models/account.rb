class Account
  include ActiveModel::Model 
  
  attr_accessor :organization_name, 
  :first_name,
  :last_name,
  :email, 
  :password,
  :user
  
  validates :organization_name, :presence => true
  validate :valid_user
  
  def initialize params={}
    if params.count > 0 
      params.each do |attr, value|
        #current instance {get; set;} for all the stuff up above 
        self.public_send("#{attr}=", value)
      end
    end
    
    setup_user
  end
  
  def valid_user
    unless @user.valid? 
      @user.errors.each do |key, value|
        errors.add key, value
      end
    end
  end

  
  private
  def setup_user
    @user = User.new(first_name: @first_name, last_name: @last_name, email: @email, password: @password)
  end
end