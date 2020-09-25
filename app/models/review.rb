# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  review_body     :text             not null
#  private_note    :text
#  overall_rating  :integer          not null
#  food_rating     :integer          not null
#  service_rating  :integer          not null
#  ambience_rating :integer          not null
#  noise_level     :integer          not null
#  restaurant_id   :integer          not null
#  reviewer_id     :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Review < ApplicationRecord

    validates :review_body, :overall_rating, :food_rating, :service_rating, :ambience_rating, :noise_level, :restaurant_id, :reviewer_id, presence: true

    belongs_to :reviewer,
    foreign_key: :reviewer_id,
    class_name: :User

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

end
