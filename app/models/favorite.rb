class Favorite < ApplicationRecord

    validates :restaurant_id, :user_id, presence: true
    validates :restaurant_id, uniqueness: { scope: :user_id}

   
    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    
end
