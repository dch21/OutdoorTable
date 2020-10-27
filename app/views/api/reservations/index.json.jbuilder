@reservations.each do |reservation|
    json.set! reservation.id do 
        restaurant = reservation.restaurant
        json.extract! restaurant, :name, :boro
        json.extract! reservation, :id, :date, :time, :notes, :party_size, :party_size, :phone_number, :email, :occasion
    end
end



