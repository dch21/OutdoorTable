# json.extract! @reviews, :review_body, :private_note, :overall_rating, :food_rating, :service_rating, :ambience_rating, :noise_level, :restaurant_id, :reviewer_id


json.reviews do 
    @reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :review_body, :private_note, :overall_rating, :food_rating, :service_rating, :ambience_rating, :noise_level, :restaurant_id, :reviewer_id, :created_at
        end
    end
end

json.reviewers do
    @reviews.each do |review|
        reviewer = review.reviewer
        json.set! reviewer.id do
            json.extract! reviewer, :id, :email, :first_name, :last_name, :location
        end
    end
end