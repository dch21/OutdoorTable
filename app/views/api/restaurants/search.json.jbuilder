

# json.searchResults do
    @restaurants.each do |restaurant|
        json.set! restaurant.id do 
            json.extract! restaurant, :id, :name, :description, :address, :capacity, :lat, :lng, :neighborhood, :phone_num, :cuisine, :price_range, :payment, :dining_style, :dress_code, :public_transit, :parking_details
            json.recent_review restaurant.reviews.last
        end
    end
# end

