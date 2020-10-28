class Api::ReservationsController < ApplicationController

    def index
        @id = params[:user_id].to_i
        @reservations = Reservation.includes(:restaurant).where('user_id = ?', "#{@id}")
        render "api/reservations/index"
    end

    # def show
    #     @reservation = Reservation.find(params[:id])
    #     render "api/reservations/show"
    # end

    def create
    
        # time = params[:reservation][:time]
        # date = params[:reservation][:date]
        # restaurant_id = params[:reservation][:restaurant_id]

        # Reservation.check_availability(time, date, restaurant_id)
        # debugger

        @reservation = Reservation.new(reservation_params)
        if @reservation.save!
            render "api/reservations/show"
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])

        @reservation.destroy
        render "api/reservations/show"

    end

    def reservation_params
        params
        .require(:reservation)
        .permit(:date, :time, :notes, :party_size, :restaurant_id, :user_id, :phone_number, :email, :occasion)
    end



end