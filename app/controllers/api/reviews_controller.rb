class Api::ReviewsController < ApplicationController

    def index
        rest_id = params[:restaurant_id].to_i
        
        @reviews = Review.includes(:reviewer).where('restaurant_id = ?', "#{rest_id}")

       render "api/reviews/show"

    end

    def create
        
        @review = Review.new(review_params)
        if @review.save
            render json: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def leftreview
        rest_num = params[:info]["restaurant_id"].to_i
        reviewer_id = params[:info]["reviewer_id"].to_i
        @reviews = Review.where('restaurant_id = ? AND reviewer_id = ?', "#{rest_num}", "#{reviewer_id}")
        @review = @reviews.where('created_at > ?', 30.days.ago).count
        # 
        @count = @review == 1 ? rest_num : 0
        # 
        render json: @count
    end

    def review_params
        params
        .require(:review)
        .permit(:review_body, :private_note, :overall_rating, :food_rating, :service_rating, :ambience_rating, :noise_level, :restaurant_id, :reviewer_id)
    end

end

