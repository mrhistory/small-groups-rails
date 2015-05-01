class Group < ActiveRecord::Base
  has_many :users
  has_many :group_leaders
  has_many :users, through: :group_leaders
end
