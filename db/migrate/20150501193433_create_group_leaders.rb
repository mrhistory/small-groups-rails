class CreateGroupLeaders < ActiveRecord::Migration
  def change
    create_table :group_leaders do |t|

      t.timestamps null: false
    end
  end
end
