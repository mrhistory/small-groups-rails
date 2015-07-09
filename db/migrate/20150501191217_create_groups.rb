class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :summary
      t.integer :max_members
      t.timestamps null: false
    end
  end
end
