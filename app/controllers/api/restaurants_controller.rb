class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render "api/restaurants/show"
    end

    def create
        @restaurant = Restaurant.new(restaurant_params)
        if @restaurant.save
            render "api/restaurants/show"
        else
            render json: @restaurant.errors.full_messages, status: 422
        end
    end

    #move to index and change routes?
    def search
        searchTerms = params[:searchTerms]

        @restaurants = Restaurant.all
        if params["searchTerms"] == ""
            render json: @restaurants
            return
        end

        @restaurants = Restaurant.where('name ILIKE ? OR description ILIKE ? OR neighborhood ILIKE ? OR cuisine ILIKE ?', "%#{searchTerms}%", "%#{searchTerms}%", "%#{searchTerms}%", "%#{searchTerms}%" )

        render json: @restaurants
        
    end

    def restaurant_params
        params
        .require(:restaurant)
        .permit(:name, :description, :address, :capacity, :gmaps_place_id, :neighborhood, :phone_num, :cuisine, :price_range, :payment, :dining_style, :dress_code, :public_transit, :parking_details)
    end

end

