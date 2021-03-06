

@restaurants.each do |restaurant|
    
    json.set! restaurant.id do 
        json.extract! restaurant, :id, :name, :description, :address, :capacity, :lat, :lng, :neighborhood, :phone_num, :cuisine, :price_range, :payment, :dining_style, :dress_code, :public_transit, :parking_details, :website, :boro
        json.recent_review restaurant.reviews.last
        json.reservation_time @time
        json.reservation_date @date
        json.party_size @party_size
        json.searchTerm @searchTerms
        json.rating restaurant.reviews.average(:overall_rating).round(1)
        json.number_reviews restaurant.reviews.count
        json.total_bookings restaurant.reservations.where('date = ?',"#{Date.today.to_s}").count
    end
end


