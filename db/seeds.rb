# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# change rest_id for reviews when dropped db
# remove hours table

#use ber db:reset to reset everything
Review.destroy_all  #destroy in opposite order that you create
Restaurant.destroy_all #
User.destroy_all

u1 = User.create!(
  email: "demo@test.com",
  password: "testing",
  first_name: "Demo",
  last_name: "User",
  location: "Manhattan",
  phone_num: "555-555-1234"
)

u2 = User.create!(
  email: "mc@test.com",
  password: "testingmc",
  first_name: "Mitch",
  last_name: "Cummings",
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
    price_range: "$10-$25",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "B61",
    parking_details: "Street",
    website: "https://hometownbbq.com/",
    hours: "Mon: Closed, Tue: 12:00 pm - 8:00 pm, Wed: 12:00 pm - 8:00 pm, Thu: 12:00 pm - 8:00 pm, Fri: 12:00 pm - 8:00 pm, Sat: 12:00 pm - 8:00 pm, Sun: 12:00 pm - 8:00 pm"
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
    parking_details: "Street",
    website: "http://www.supertasteny.com/",
    hours: "Mon: 10:00pm - 11:00 pm, Tue: 10:00pm - 11:00 pm, Wed: 10:00pm - 11:00 pm, Thu: 10:00pm - 11:00 pm, Fri: 10:00pm - 11:00 pm, Sat: 10:00pm - 11:00 pm, Sun: 10:00pm - 11:00 pm"

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
    parking_details: "Street",
    website: "https://www.yelp.com/biz/tasty-dumpling-new-york",
    hours: "Mon: 9:00 am - 8:30 pm, Tue: 9:00 am - 8:30 pm, Wed: 9:00 am - 8:30 pm, Thu: 9:00 am - 8:30 pm, Fri: 9:00 am - 8:30 pm, Sat: 9:00 am - 8:30 pm, Sun: 9:00 am - 8:30 pm"
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
    price_range: "$10-$25",
    payment: "Cash, AMEX, VISA, MASTERCARD",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "FG, R",
    parking_details: "Street",
    website: "https://www.instagram.com/uglybabynyc/",
    hours: "Mon: Closed, Tue: Closed, Wed: Closed, Thu: 5:00 pm - 10:30 pm, Fri: 5:00 pm - 10:30 pm, Sat: 12:00 pm - 3:00 pm, 5:00 pm - 10:30 pm, Sun: 12:00 pm - 3:00 pm, 5:00 pm - 10:30 pm"
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
    parking_details: "Street",
    website: "https://lamoradanyc.com/",
    hours: "Mon: Closed, Tue: Closed, Wed: Closed, Thu: 11:00 am - 6:30 pm, Fri: 11:00 am - 6:30 pm, Sat: 11:00 am - 6:30 pm, Sun: Closed"
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
    parking_details: "Street",
    website: "https://rincon-criollo.com/",
    hours: "Mon: 12:00 pm - 10:00 pm, Tue: 12:00 pm - 10:00 pm, Wed: 12:00 pm - 10:00 pm, Thu: 12:00 pm - 10:00 pm, Fri: 12:00 pm - 10:00 pm, Sat: 12:00 pm - 10:00 pm, Sun: 12:00 pm - 10:00 pm"
)
   
r7 = Restaurant.create!(
    name: "Joe and Pats",
    description: "Local institution serving its famous thin crust pizzas.",
    address: "1758 Victory Blvd, Staten Island, NY 10314",
    capacity: 10,
    lat: 40.612940,
    lng: -74.122108,
    neighborhood: "Meiers Corners",
    boro: "Staten Island",
    phone_num: "718-981-0887",
    cuisine: "Italian",
    price_range: "$10-$25",
    payment: "Cash",
    dining_style: "Casual",
    dress_code: "Casual",
    public_transit: "S93, Staten Island Ferry",
    parking_details: "Street",
    website: "https://www.joeandpatsny.com/",
    hours: "Mon: 11:00 am - 10:00 pm, Tue: 11:00 am - 10:00 pm, Wed: 11:00 am - 10:00 pm, Thu: 11:00 am - 10:00 pm, Fri: 11:00 am - 11:00 pm, Sat: 11:00 am - 11:00 pm, Sun: 11:00 am - 10:00 pm"
)

################################################################################


rv1 = Review.create!(
    review_body: "The street smells like Texas. I peeked inside and wow, it made me nostalgic for home. Beef rib is top notch and the dish to get here. Brisket could be a bit more moist, but that's always an issue up here.",
    private_note: "Good food",
    overall_rating: 5,
    food_rating: 4,
    service_rating: 3,
    ambience_rating: 5, 
    noise_level: 3,
    restaurant_id: r1.id,
    reviewer_id: u5.id
)

rv2 = Review.create!(
    review_body: "I was on road trip through the state and everyone has been saying this is must-stop. Did not disappoint with a wide selection of meats though I wish they more game meat like beaver. Great bathrooms too! ",
    private_note: "",
    overall_rating: 4,
    food_rating: 5,
    service_rating: 4,
    ambience_rating: 3, 
    noise_level: 2,
    restaurant_id: r1.id,
    reviewer_id: u16.id
)

rv3 = Review.create!(
    review_body: "No Arby's doesn't have the meats. Hometown BBQ has the meats! You know it's good when you don't need the sauce. Perfect for a post-workout meal to jump start my gains.",
    private_note: "",
    overall_rating: 4,
    food_rating: 5,
    service_rating: 2,
    ambience_rating: 2, 
    noise_level: 2,
    restaurant_id: r1.id,
    reviewer_id: u2.id
)

rv4 = Review.create!(
    review_body: "As a graduate student and aspiring writer, this is awesome value for a meal. A bowl of Mount Qi noodles is a perfect balance of spicy and sour for under $10.",
    private_note: "",
    overall_rating: 3,
    food_rating: 4,
    service_rating: 3,
    ambience_rating: 1, 
    noise_level: 2,
    restaurant_id: r2.id,
    reviewer_id: u6.id
)

rv5 = Review.create!(
    review_body: "I know people rave about the noodles, but honestly the most underrated items here are the pork buns. Fatty, thick slices of pork in a soft mantou bun with peanuts and cilantro. It melts in your mouth.",
    private_note: "",
    overall_rating: 3,
    food_rating: 2,
    service_rating: 4,
    ambience_rating: 3, 
    noise_level: 1,
    restaurant_id: r2.id,
    reviewer_id: u9.id
)

rv6 = Review.create!(
    review_body: "Woah! Bang! A lot spicier that I though it would be! No Pad Thai here...just dishes with flavors you won't find anywhere else.",
    private_note: "",
    overall_rating: 5,
    food_rating: 5,
    service_rating: 4,
    ambience_rating: 2, 
    noise_level: 4,
    restaurant_id: r4.id,
    reviewer_id: u3.id
)


rv6 = Review.create!(
    review_body: "With Uncle Boons(RIP) gone, Ugly Baby hits the spot for funky, creative Thai food. They got their mainstay dishes, but make sure to try the weekly specials to spice things up.",
    private_note: "",
    overall_rating: 4,
    food_rating: 4,
    service_rating: 5,
    ambience_rating: 4, 
    noise_level: 1,
    restaurant_id: r4.id,
    reviewer_id: u5.id
)

rv7 = Review.create!(
    review_body: "Simple, counter service that gets the job done. Great for walking through and having a snack.",
    private_note: "",
    overall_rating: 4,
    food_rating: 4,
    service_rating: 2,
    ambience_rating: 2, 
    noise_level: 1,
    restaurant_id: r3.id,
    reviewer_id: u1.id
)

rv8 = Review.create!(
    review_body: "I was walking my dog Frank around and stumbled onto this cozy restaurant. They even got a poetry library in the back! I'm glad they expanded outdoors. One of the few places you can get Oaxacan food in NYC. I get the mole every time.",
    private_note: "",
    overall_rating: 4,
    food_rating: 4,
    service_rating: 5,
    ambience_rating: 3, 
    noise_level: 1,
    restaurant_id: r5.id,
    reviewer_id: u4.id
)

rv9 = Review.create!(
    review_body: "They kept up their festive atmopshere even though it's outside. Generous portions, home-cooked style...no wonder they have been around for over 30 years.",
    private_note: "",
    overall_rating: 4,
    food_rating: 4,
    service_rating: 2,
    ambience_rating: 2, 
    noise_level: 1,
    restaurant_id: r6.id,
    reviewer_id: u10.id
)

rv10 = Review.create!(
    review_body: "Name lives up to its food! I doubt you need a reservation here because it's a quick and satisfying bite , but I'm glad they're offering outdoor seating to get people to dine in. The park across the street is great too if the seats are full. Support your local businesses!",
    private_note: "",
    overall_rating: 4,
    food_rating: 4,
    service_rating: 2,
    ambience_rating: 1, 
    noise_level: 1,
    restaurant_id: r3.id,
    reviewer_id: u12.id
)

rv11 = Review.create!(
    review_body: "I've been coming here the last few years ever since I've moved to Queens. Love the plantains with the rice and beans. Their pork dishes are great. My friend let it slip that it was my birthday and the staff came out and sang to me on the sidewalk!",
    private_note: "",
    overall_rating: 4,
    food_rating: 4,
    service_rating: 5,
    ambience_rating: 5, 
    noise_level: 1,
    restaurant_id: r6.id,
    reviewer_id: u13.id
)

rv12 = Review.create!(
    review_body: "Got the tlayuda and the horchata and was not disappointed! The staff is welcoming and very active in bettering their community. There are also vegan options for those who are interested!",
    private_note: "",
    overall_rating: 4,
    food_rating: 5,
    service_rating: 5,
    ambience_rating: 3, 
    noise_level: 2,
    restaurant_id: r5.id,
    reviewer_id: u14.id
)

rv14 = Review.create!(
    review_body: "What is the best pizza spot in NYC? The correct answer to that question is the one you went to while growing up as a kid in the city. Luckily for me, Joe & Pat’s has always been around the corner!",
    private_note: "",
    overall_rating: 5,
    food_rating: 5,
    service_rating: 4,
    ambience_rating: 2, 
    noise_level: 2,
    restaurant_id: r7.id,
    reviewer_id: u9.id
)

rv15 = Review.create!(
    review_body: "Nothing beats a cruise on the ferry on the way to one of the best thin slices in the city. Yeah, I'm a bit lactose intolerant, but the pizza is so good it's worth the consequences. They've expanded outdoor seating options.",
    private_note: "",
    overall_rating: 4,
    food_rating: 4,
    service_rating: 3,
    ambience_rating: 3, 
    noise_level: 3,
    restaurant_id: r7.id,
    reviewer_id: u1.id
)

# res1 = Reservation.create!(
#     date: "2020-09-29",
#     time: "6:30PM",
#     notes: "None",
#     party_size: 10, 
#     restaurant_id: 14,
#     user_id: 4
# )