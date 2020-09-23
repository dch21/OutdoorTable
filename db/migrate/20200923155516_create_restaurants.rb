class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :address, null: false
      t.integer :capacity, null: false
      t.string :gmaps_place_id, null: false
      t.string :neighborhood
      t.string :phone_num, null: false
      t.string :cuisine
      t.string :price_range
      t.string :payment
      t.string :dining_style
      t.string :dress_code
      t.string :public_transit
      t.string :parking_details

      t.timestamps
    end

    add_index :restaurants, :name, unique: true
    add_index :restaurants, :phone_num
  end
end

