class Group < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_many :group_leaders
  has_many :users, through: :group_leaders

  validates :name, presence: true
  validates :max_members, numericality: { only_integer: true }
end
