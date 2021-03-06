# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_28_144625) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id", "user_id"], name: "index_favorites_on_restaurant_id_and_user_id", unique: true
    t.index ["restaurant_id"], name: "index_favorites_on_restaurant_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.text "notes"
    t.integer "party_size", null: false
    t.integer "restaurant_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "time", null: false
    t.string "date", null: false
    t.string "phone_number", null: false
    t.string "email", null: false
    t.string "occasion"
    t.index ["restaurant_id"], name: "index_reservations_on_restaurant_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.text "address", null: false
    t.integer "capacity", null: false
    t.string "neighborhood"
    t.string "phone_num", null: false
    t.string "cuisine"
    t.string "price_range"
    t.string "payment"
    t.string "dining_style"
    t.string "dress_code"
    t.string "public_transit"
    t.string "parking_details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "boro", null: false
    t.string "website"
    t.string "hours", null: false
    t.index ["name"], name: "index_restaurants_on_name", unique: true
    t.index ["phone_num"], name: "index_restaurants_on_phone_num"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "review_body", null: false
    t.text "private_note"
    t.integer "overall_rating", null: false
    t.integer "food_rating", null: false
    t.integer "service_rating", null: false
    t.integer "ambience_rating", null: false
    t.integer "noise_level", null: false
    t.integer "restaurant_id", null: false
    t.integer "reviewer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "location", null: false
    t.string "phone_num"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["password_digest"], name: "index_users_on_password_digest"
    t.index ["phone_num"], name: "index_users_on_phone_num"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
