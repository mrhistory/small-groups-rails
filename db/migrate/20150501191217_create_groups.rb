class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :summary
      t.integer :max_members
      t.timestamps null: false
    end

    create_table :groups_users do |t|
      t.belongs_to :group, index: true
      t.belongs_to :user, index: true
    end
  end
end
