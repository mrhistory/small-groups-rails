class Group < ActiveRecord::Base
  has_many :group_memberships
  has_many :users, through: :group_memberships
  has_many :group_leaderships
  has_many :users, through: :group_leaderships

  validates :name, presence: true
  validates :max_members, numericality: { only_integer: true }
end
