class Api::ReviewsController < ApplicationController

    def index

        rest_id = params[:restaurant_id].to_i
        
        @reviews = Review.where('restaurant_id = ?', "#{rest_id}")
        
        # @reviews = Review.find_by(restaurant_id: params[:restaurant_id])
           
        render json: @reviews
        # @restaurants = Restaurant.where('name ILIKE ? OR description ILIKE ? OR neighborhood ILIKE ? OR cuisine ILIKE ?', "%#{searchTerms}%", "%#{searchTerms}%", "%#{searchTerms}%", "%#{searchTerms}%" )

    end

    def create
        @review = Review.new(reservation_params)
        if @review.save!
            render "api/reservations/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
    end

    def destroy
    end

    def review_params
        params
        .require(:review)
        .permit(:review_body, :private_note, :overall_rating, :food_rating, :service_rating, :ambience_rating, :noise_level, :restaurant_id, :reviewer_id)
    end

end

