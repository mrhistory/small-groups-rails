class Group < ActiveRecord::Base
  has_many :group_memberships
  has_many :users, through: :group_memberships
  has_many :group_leaderships
  has_many :users, through: :group_leaderships

  validates :name, presence: true
  validates :max_members, numericality: { only_integer: true }

  def current_members
    group_memberships.size
  end

  def members
    group_memberships
  end

  def leaders
    group_leaderships
  end
end
