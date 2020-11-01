# # == Schema Information
# #
# # Table name: hours
# #
# #  id            :bigint           not null, primary key
# #  day           :string           not null
# #  opening       :integer          not null
# #  closing       :integer          not null
# #  restaurant_id :integer          not null
# #  created_at    :datetime         not null
# #  updated_at    :datetime         not null
# #
# class Hour < ApplicationRecord

#     belongs_to :restaurant,
#     foreign_key: :restaurant_id,
#     class_name: :Restaurant
    
# end
