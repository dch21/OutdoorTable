class Api::FavoritesController < ApplicationController

    def index
        @user_id = params[:user_id].to_i
        
        @favorites = Favorite.includes(:restaurant).where('user_id = ?', "#{@user_id}")
        
        render "api/favorites/index"

    end

    def create        
        @favorite = Favorite.new(favorite_params)
        if @favorite.save!
            render "api/favorites/show"
        else
            render json: @favorite.full_messages, status: 422
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])

        @favorite.destroy
        render json: @favorite
    end

    def favorite_params
        params
        .require(:favorite)
        .permit(:restaurant_id, :user_id)
    end

end

