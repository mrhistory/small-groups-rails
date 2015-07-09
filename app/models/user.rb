class User < ActiveRecord::Base
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
		:recoverable, :rememberable, :trackable, :validatable
  has_many :group_memberships
  has_many :groups, through: :group_memberships
  has_many :group_leaderships
  has_many :groups, through: :group_leaderships
end
