class Favorite < ApplicationRecord

    validates :restaurant_id, :user_id, presence: true
    validates :name, uniqueness: { scope: :garden_owner_id}

   
    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    
end
