# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  notes         :text
#  party_size    :integer          not null
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  time          :string           not null
#  date          :string           not null
#  phone_number  :string           not null
#  email         :string           not null
#  occasion      :string
#
class Reservation < ApplicationRecord

    validates :time, :date, :party_size, :restaurant_id, :user_id, :phone_number, :email, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant
    

    def self.subtract_last_thirty(time)

        return "12:30PM" if time == "1:00PM"
        return "11:30AM" if time == "12:00PM"

        split_time = time[0..-3].split(":")
        hours = split_time[0]
        minutes = split_time[1]
        am_pm = time[-2..-1]

        if minutes == "00"
            hours = (hours.to_i - 1).to_s
            minutes = "30"
            return hours + ":" + minutes + am_pm
        else
            return hours + ":" + "00" + am_pm
        end

    end

    def self.subtract_last_hour(time)

        return "11:00AM" if time == "12:00PM"
        return "11:30AM" if time == "12:30PM"
        return "12:00PM" if time == "1:00PM"
        return "12:30PM" if time == "1:30PM"

        split_time = time[0..-3].split(":")
        hours = split_time[0]
        minutes = split_time[1]
        am_pm = time[-2..-1]

        hours = (hours.to_i - 1).to_s

        return hours + ":" + minutes + am_pm

    end

    def self.check_availability(time, date, restaurant_id, party_size)
        
        #times from 30 minutes to hour
        time_30_minutes_ago = subtract_last_thirty(time)
        time_hour_ago = subtract_last_hour(time)
        
        #last 1.5 hours to two hours
        time_one_hr_half_ago = subtract_last_thirty(time_hour_ago)
        time_two_hours_ago = subtract_last_hour(time_hour_ago)
        
        filled_seats_at_current_reservation_time = Reservation.where(time: "#{time}").where(restaurant_id: "#{restaurant_id}").pluck(:party_size).sum
        filled_seats_last_30_min = Reservation.where(time: "#{time_30_minutes_ago}").where(restaurant_id: "#{restaurant_id}").pluck(:party_size).sum
        filled_seats_last_hour = Reservation.where(time: "#{time_hour_ago}").where(restaurant_id: "#{restaurant_id}").pluck(:party_size).sum
        
        filled_seats_last_one_hr_half = Reservation.where(time: "#{time_one_hr_half_ago}").where(restaurant_id: "#{restaurant_id}").pluck(:party_size).sum
        filled_seats_last_two_hours = Reservation.where(time: "#{time_two_hours_ago}").where(restaurant_id: "#{restaurant_id}").pluck(:party_size).sum
        
        capacity = Restaurant.find(restaurant_id).capacity

        #get back half the seats filled in the last 1.5- two hours
        empty_seats = (filled_seats_last_one_hr_half + filled_seats_last_two_hours) / 2 

        filled_seats = filled_seats_last_30_min + filled_seats_last_hour + filled_seats_at_current_reservation_time

        if (capacity - filled_seats + empty_seats) < party_size
            return false
        else
            return true
        end

    end



end

# test
# Reservation.check_availability("7:00PM", "2020-09-28", 14)
