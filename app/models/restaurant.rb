# == Schema Information
#
# Table name: restaurants
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  description     :text             not null
#  address         :text             not null
#  capacity        :integer          not null
#  neighborhood    :string
#  phone_num       :string           not null
#  cuisine         :string
#  price_range     :string
#  payment         :string
#  dining_style    :string
#  dress_code      :string
#  public_transit  :string
#  parking_details :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  lat             :float            not null
#  lng             :float            not null
#  boro            :string           not null
#  website         :string
#  hours           :string           not null
#
class Restaurant < ApplicationRecord

    validates :name, uniqueness: true
    validates :name, :description, :address, :capacity, :lat, :lng, :phone_num, :boro, presence: true
    
    has_many :reservations,
    foreign_key: :restaurant_id,
    class_name: :Reservation

    has_many :reviews,
    foreign_key: :restaurant_id,
    class_name: :Review

    has_many :hours,
    foreign_key: :restaurant_id,
    class_name: :Hour

    has_many :guests,
    through: :reservations,
    source: :user

    has_many :favorites,
    foreign_key: :user_id,
    class_name: :Favorite

end

   def review_aggregates(rest_id)
        aggregates = []
        query = Review.where('restaurant_id = ?', "#{rest_id}")
        aggregates << query.count.round(1)
        aggregates << query.average(:overall_rating).round(1)
        aggregates << query.average(:food_rating).round(1)
        aggregates << query.average(:service_rating).round(1)
        aggregates << query.average(:ambience_rating).round(1)
        aggregates << query.average(:noise_level).round(1)
        aggregates << Review.where('overall_rating = 5 AND restaurant_id = ?', "#{rest_id}").count
        aggregates << Review.where('overall_rating = 4 AND restaurant_id = ?', "#{rest_id}").count
        aggregates << Review.where('overall_rating = 3 AND restaurant_id = ?', "#{rest_id}").count
        aggregates << Review.where('overall_rating = 2 AND restaurant_id = ?', "#{rest_id}").count
        aggregates << Review.where('overall_rating = 1 AND restaurant_id = ?', "#{rest_id}").count

        today = Date.today.to_s
        @total_bookings_for_day = Restaurant.find(rest_id).reservations.where('date = ?',"#{today}").count

        aggregates << @total_bookings_for_day
        aggregates
    end

