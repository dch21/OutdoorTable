# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  location        :string           not null
#  phone_num       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Api::UsersController < ApplicationController

    # def new
    #     @user = User.new
    #     render :new
    # end

    #need update and destroy

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params
        .require(:user)
        .permit(:email, :password, :first_name, :last_name, :location, :phone_num)
    end


end
