class Api::HoursController < ApplicationController

    def index
        
        rest_id = params["query"][0].to_i
        party = params["query"][1].to_i
        day = Date.parse(params["query"][2], '%Y-%m-%d').strftime('%A')
        time = params["query"][3].to_time.seconds_since_midnight.floor

            

    #    Parameters {"query"=>["3", "2", "2020-12-31", "7:00PM"]
    # window.searchHours([4, 2, "2020-12-31", "7:00PM"])

        @hour = Hour.where('day = ? AND opening <= ? AND closing > ? AND restaurant_id = ?', "#{day}", "#{time}", "#{time}", "#{rest_id}")

        debugger
        render json: @hour

    end

    # def create
    #     @hour = Hour.new(hour_params)
    #     if @reservation.save!
    #         render "api/hours/show"
    #     else
    #         render json: @reservation.errors.full_messages, status: 422
    #     end
    # end

     def hour_params
        params
        .require(:hour)
        .permit(:opening, :closing, :day, :restaurant_id)
    end


end
