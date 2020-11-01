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
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
