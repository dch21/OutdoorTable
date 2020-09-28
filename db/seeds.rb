# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# change rest_id for reviews when dropped db

Review.destroy_all  #destroy in oppoiste order that you create
Restaurant.destroy_all#

r1 = Restaurant.create!(
    name: "Union Square Market",
    description: "Green Market",
    address: "Union Square W &, E 17th St, New York, NY 10003, USA",
    capacity: 300,
    lat: 40.736731,
    lng: -73.989955,
    neighborhood: "Union Square",
    boro: "Manhattan",
    phone_num: "555",
    cuisine: "Halal Cart",
    price_range: "Under $10",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "NQR, 456, L",
    parking_details: "Street"
)

r2 = Restaurant.create!(
    name: "Super Taste",
    description: "No frills shop selling one of the best and cheapest hand pulled noodles in the city. Also available are dumplings (fried or boiled) as well as succulent pork buns.",
    address: "26 Eldridge St, New York, NY 10002, USA",
    capacity: 10,
    lat: 40.715085,
    lng: -73.993378,   
    neighborhood: "Manhattan Chinatown",
    boro: "Manhattan",
    phone_num: "555-555-5558",
    cuisine: "Chinese",
    price_range: "Under $10",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "DFM",
    parking_details: "Street"
)

r3 = Restaurant.create!(
    name: "Tasty Dumpling",
    description: "Cheap dumplings (fried or boiled) that get the job done.",
    address: "42 Mulberry St, New York, NY 10013, USA",
    capacity: 15,
    lat: 40.714928,
    lng: -73.999561,
    neighborhood: "Manhattan Chinatown",
    boro: "Manhattan",
    phone_num: "555-555-5559",
    cuisine: "Chinese",
    price_range: "Under $10",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "NR",
    parking_details: "Street"
)


rv1 = Review.create!(
    review_body: "Good Food.",
    private_note: "Good food",
    overall_rating: 5,
    food_rating: 5,
    service_rating: 3,
    ambience_rating: 2, 
    noise_level: 2,
    restaurant_id: 14,
    reviewer_id: 1
)

rv2 = Review.create!(
    review_body: "Good Dumplings.",
    private_note: "",
    overall_rating: 5,
    food_rating: 3,
    service_rating: 4,
    ambience_rating: 3, 
    noise_level: 2,
    restaurant_id: 14,
    reviewer_id: 2
)

rv3 = Review.create!(
    review_body: "Great value. Pork buns are fatty and juicy.",
    private_note: "",
    overall_rating: 4,
    food_rating: 5,
    service_rating: 2,
    ambience_rating: 2, 
    noise_level: 2,
    restaurant_id: 14,
    reviewer_id: 3
)

r4 = Review.create!(
    review_body: "Nothing fancy here, but gets the job done",
    private_note: "",
    overall_rating: 3,
    food_rating: 4,
    service_rating: 3,
    ambience_rating: 1, 
    noise_level: 2,
    restaurant_id: 14,
    reviewer_id: 4
)

r5 = Review.create!(
    review_body: "Food too spicy, but I don't like spicy food. Wrong match for me.",
    private_note: "",
    overall_rating: 3,
    food_rating: 2,
    service_rating: 4,
    ambience_rating: 3, 
    noise_level: 1,
    restaurant_id: 14,
    reviewer_id: 5
)

r6 = Review.create!(
    review_body: "Lives up to its name.",
    private_note: "",
    overall_rating: 5,
    food_rating: 5,
    service_rating: 2,
    ambience_rating: 4, 
    noise_level: 1,
    restaurant_id: 14,
    reviewer_id: 6
)

