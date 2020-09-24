class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.datetime :res_date_time
      t.text :notes
      t.integer :party_size
      t.integer :restaurant_id
      t.integer :user_id


      t.timestamps
    end

    add_index :reservations, :restaurant_id
    add_index :reservations, :user_id
  end
end


