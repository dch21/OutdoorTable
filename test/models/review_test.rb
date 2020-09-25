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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
