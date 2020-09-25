class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|

      t.text :review_body, null: false
      t.text :private_note
      t.integer :overall_rating, null: false
      t.integer :food_rating, null: false
      t.integer :service_rating, null: false
      t.integer :ambience_rating, null: false
      t.integer :noise_level, null: false
      t.integer :restaurant_id, null: false
      t.integer :reviewer_id, null: false

      t.timestamps
    end

    add_index :reviews, :restaurant_id
    add_index :reviews, :reviewer_id
  end
end

