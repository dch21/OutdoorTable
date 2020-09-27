class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        
        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ['Invalid email or password.'], status: 401
            #MUST HAVE STATUS 401 HERE OR ELSE IT DOESN"T KNOW it's an error
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
        end
        render json: ['Logged Out']
    end

end
