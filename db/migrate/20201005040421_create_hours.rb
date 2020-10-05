class CreateHours < ActiveRecord::Migration[5.2]
  def change
    create_table :hours do |t|

      t.string :day, null: false
      t.integer :opening, null: false
      t.integer :closing, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index :hours, :restaurant_id
  end
end
