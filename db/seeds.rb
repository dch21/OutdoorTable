# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# change rest_id for reviews when dropped db

Review.destroy_all  #destroy in opposite order that you create
Restaurant.destroy_all #

u1 = User.create!(
  email: "demo@test.com",
  password: "testing",
  first_name: "Demo First Name",
  last_name: "Demo Last Name",
  location: "Manhattan",
  phone_num: "555-555-1234"
)

u2 = User.create!(
  email: "mc@test.com",
  password: "testingmc",
  first_name: "Mitch",
  last_name: "Ferrell",
  location: "Brooklyn",
  phone_num: "555-555-2345"
)

u3 = User.create!(
  email: "jc@test.com",
  password: "testingjc",
  first_name: "Jose",
  last_name: "Morales",
  location: "Bronx",
  phone_num: "555-555-3456"
)

u4 = User.create!(
  email: "eb@test.com",
  password: "testingeb",
  first_name: "Erica",
  last_name: "Brown",
  location: "Staten Island",
  phone_num: "555-555-4567"
)

u5 = User.create!(
  email: "mh@test.com",
  password: "testingmh",
  first_name: "Mildred",
  last_name: "Hubbel",
  location: "Queens",
  phone_num: "555-555-5678"
)

u6 = User.create!(
  email: "dw@test.com",
  password: "testingdw",
  first_name: "Danielle",
  last_name: "Wallace",
  location: "Manhattan",
  phone_num: "555-555-6789"
)

u7 = User.create!(
  email: "mw@test.com",
  password: "testingmw",
  first_name: "Marie",
  last_name: "Wazerk",
  location: "Brooklyn",
  phone_num: "555-555-7890"
)

u8 = User.create!(
  email: "pg@test.com",
  password: "testingpg",
  first_name: "Paul",
  last_name: "Grits",
  location: "Bronx",
  phone_num: "555-555-8901"
)

u9 = User.create!(
  email: "bc@test.com",
  password: "testingbc",
  first_name: "Xiao",
  last_name: "Mao",
  location: "Staten Island",
  phone_num: "555-555-9012"
)

u10 = User.create!(
  email: "sa@test.com",
  password: "testingsa",
  first_name: "Stan",
  last_name: "Ahmed",
  location: "Queens",
  phone_num: "555-555-1011"
)

u11 = User.create!(
  email: "nw@test.com",
  password: "testingnw",
  first_name: "Neddie",
  last_name: "Win",
  location: "Manhattan",
  phone_num: "555-555-1112"
)

u12 = User.create!(
  email: "as@test.com",
  password: "testingas",
  first_name: "Amira",
  last_name: "Shah",
  location: "Bronx",
  phone_num: "555-555-1213"
)

u13 = User.create!(
  email: "mn@test.com",
  password: "testingmn",
  first_name: "Mai",
  last_name: "Nguyen",
  location: "Queens",
  phone_num: "555-555-1314"
)

u14 = User.create!(
  email: "cj@test.com",
  password: "testingcj",
  first_name: "Chris",
  last_name: "Jones",
  location: "Staten Island",
  phone_num: "555-555-1415"
)

u15 = User.create!(
  email: "js@test.com",
  password: "testingjs",
  first_name: "Juliet",
  last_name: "Santos",
  location: "Brooklyn",
  phone_num: "555-555-1516"
)

u16 = User.create!(
  email: "bb@test.com",
  password: "testingbb",
  first_name: "Buckie",
  last_name: "Beeves",
  location: "Manhattan",
  phone_num: "555-555-1617"
)

################################################################################

r1 = Restaurant.create!(
    name: "Hometown Bar-B-Que",
    description: "Texas style smokehouse serving BBQ brisket, ribs, sausages, pulled pork and other meats in a rusting dining hall.",
    address: "454 Van Brunt St, Brooklyn, NY 11231",
    capacity: 35,
    lat: 40.675070,
    lng: -74.016116,
    neighborhood: "Red Hook",
    boro: "Brooklyn",
    phone_num: "347-294-4644",
    cuisine: "BBQ",
    price_range: "$25-$50",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "B61",
    parking_details: "Street"
)

r2 = Restaurant.create!(
    name: "Super Taste",
    description: "No frills shop selling one of the best and cheapest hand pulled noodles in the city in a variety of soups. Also available are dumplings (fried or boiled) as well as succulent pork buns.",
    address: "26 Eldridge St, New York, NY 10002, USA",
    capacity: 10,
    lat: 40.715085,
    lng: -73.993378,   
    neighborhood: "Manhattan Chinatown",
    boro: "Manhattan",
    phone_num: "646-283-0999",
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
    description: "Cheap dumplings (fried or boiled) with different meat and vegetable fillings in a counter service, quick eats setting.",
    address: "42 Mulberry St, New York, NY 10013, USA",
    capacity: 6,
    lat: 40.714928,
    lng: -73.999561,
    neighborhood: "Manhattan Chinatown",
    boro: "Manhattan",
    phone_num: "212-349-0070",
    cuisine: "Chinese",
    price_range: "Under $10",
    payment: "Cash, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "NR",
    parking_details: "Street"
)

r4 = Restaurant.create!(
    name: "Ugly Baby",
    description: "Spicy Thai food focusing on regional specialities, flavors, and dishes outside of the typical Thai place.",
    address: "407 Smith St, Brooklyn, NY 11231",
    capacity: 12,
    lat: 40.677950,
    lng: -73.996078,
    neighborhood: "Carroll Gardens",
    boro: "Brooklyn",
    phone_num: "347-689-3075",
    cuisine: "Thai",
    price_range: "$25-$50",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "FG, R",
    parking_details: "Street"
)

r5 = Restaurant.create!(
    name: "La Morada",
    description: "Restaurant specializing in Oaxacan cuisine serving one of the widest selection of mole in the city.",
    address: "308 Willis Ave, The Bronx, NY 10454",
    capacity: 8,
    lat: 40.48379,
    lng: -73.55169,
    neighborhood: "Mott Haven",
    boro: "Bronx",
    phone_num: "718-292-0235",
    cuisine: "Mexican",
    price_range: "$10-$25",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "456",
    parking_details: "Street"
)

r6 = Restaurant.create!(
    name: "Rincon Criollo",
    description: "Family run restaurant serving classic Cuban fare in a homely and cozy setting.",
    address: "40-09 Junction Blvd, Corona, NY 11368",
    capacity: 10,
    lat: 40.748874,
    lng: -73.868988,
    neighborhood: "Corona",
    boro: "Queens",
    phone_num: "718-639-8158",
    cuisine: "Cuban",
    price_range: "$10-$25",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "7",
    parking_details: "Street"
)

################################################################################


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

rv4 = Review.create!(
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

rv5 = Review.create!(
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

rv6 = Review.create!(
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

res1 = Reservation.create!(
    date: "2020-09-29",
    time: "6:30PM",
    notes: "None",
    party_size: 10, 
    restaurant_id: 14,
    user_id: 4
)