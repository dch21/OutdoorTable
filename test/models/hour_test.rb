# == Schema Information
#
# Table name: hours
#
#  id            :bigint           not null, primary key
#  day           :string           not null
#  opening       :integer          not null
#  closing       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class HourTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
