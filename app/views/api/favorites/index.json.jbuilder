@favorites.each do |favorite|
    json.set! favorite.id do 
        json.favoriteId favorite.id
        json.extract! favorite.restaurant, :id, :name, :description, :address, :capacity, :lat, :lng, :neighborhood, :phone_num, :cuisine, :price_range, :payment, :dining_style, :dress_code, :public_transit, :parking_details, :website
    end
end
