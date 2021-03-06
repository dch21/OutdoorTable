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

    def search
        @searchTerms = params[:searchTerms]["searchTerm"]
        @time = params[:searchTerms]["time"]
        @date = params[:searchTerms]["date"]
        @party_size = params[:searchTerms]["party_size"]
        
        @restaurants = Restaurant.includes(:reviews).all
        if params["searchTerms"] == ""
            render "api/restaurants/search"
            return
        end

        @restaurants = Restaurant.includes(:reviews).includes(:reservations).where('name ILIKE ? OR description ILIKE ? OR neighborhood ILIKE ? OR cuisine ILIKE ? OR boro ILIKE?', "%#{@searchTerms}%", "%#{@searchTerms}%", "%#{@searchTerms}%", "%#{@searchTerms}%", "%#{@searchTerms}%" )
    
        render "api/restaurants/search"
        
    end

    def aggregates
        @aggregates = review_aggregates(params[:id])
        render json: @aggregates
    end


    def restaurant_params
        params
        .require(:restaurant)
        .permit(:name, :description, :lat, :lng, :address, :capacity, :neighborhood, :phone_num, :cuisine, :price_range, :payment, :dining_style, :dress_code, :public_transit, :parking_details, :hours, :boro, :website)
    end

end

