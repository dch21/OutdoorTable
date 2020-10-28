class Api::FavoritesController < ApplicationController

    def index
        user_id = params[:user_id].to_i
        
        @favorites = User.find(user_id).favorited_restaurants
        
        render "api/favorites/index"

    end

    def create
        
        @favorite = Favorite.new(favorite_params)
        if @favorite.save!
            render json: @favorite
        else
            render json: @favorite.full_messages, status: 422
        end
    end

 

    def favorite_params
        params
        .require(:favorite)
        .permit(:restaurant_id, :user_id)
    end

end

