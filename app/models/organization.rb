class Organization < ActiveRecord::Base
  include Invitational::AcceptsInvitationAs
  accepts_invitation_as :admin
  validates :name, presence: true
  
  has_many :members
end
