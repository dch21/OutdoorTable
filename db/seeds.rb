# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.destroy_all

    t.string "name", null: false
    t.text "description", null: false
    t.text "address", null: false
    t.integer "capacity", null: false
    t.string "gmaps_place_id", null: false
    t.string "neighborhood"
    t.string "phone_num", null: false
    t.string "cuisine"
    t.string "price_range"
    t.string "payment"
    t.string "dining_style"
    t.string "dress_code"
    t.string "public_transit"
    t.string "parking_details"

r1 = Restaurant.create!(
    name: "Union Square Market",
    description: "Green Market",
    address: "Union Square W &, E 17th St, New York, NY 10003, USA",
    capacity: 300,
    gmaps_place_id: "ChIJ9wsQc59ZwokRou28v68fSR4",
    neighborhood: "Union Square",
    phone_num: "555",
    cuisine: "Halal Cart",
    price_range: "Under $10",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "NQR, 456, L",
    parking_details: "Street"
)