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
#
class Reservation < ApplicationRecord

    validates :time, :date, :party_size, :restaurant_id, :user_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant
    

end
