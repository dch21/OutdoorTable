# == Schema Information
#
# Table name: restaurants
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  description     :text             not null
#  address         :text             not null
#  capacity        :integer          not null
#  gmaps_place_id  :string           not null
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
#
class Restaurant < ApplicationRecord

    validates :name, uniqueness: true
    validates :name, :description, :address, :capacity, :lat, :lng, :phone_num, presence: true
    
    has_many :reservations,
    foreign_key: :user_id,
    class_name: :Reservation

    has_many :guests,
    through: :reservations,
    source: :user

end
