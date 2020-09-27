class Api::ReviewsController < ApplicationController

    def index

        rest_id = params[:restaurant_id].to_i
        
        @reviews = Review.where('restaurant_id = ?', "#{rest_id}")
                   
        render json: @reviews

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

