class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.string :first_name
      t.string :last_name
      t.references :organization, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
