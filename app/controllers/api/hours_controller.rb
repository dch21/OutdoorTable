class Api::HoursController < ApplicationController

    def index
        
        rest_id = params["query"][0].to_i
        party = params["query"][1].to_i
        day = Date.parse(params["query"][2], '%Y-%m-%d').strftime('%A')
        time = params["query"][3].to_time.seconds_since_midnight.floor


        # now = DateTime.now
        # start = DateTime.new(2018, 6, 28, 13, 00, 00)
        # stop =  DateTime.new(2018, 6, 28, 14, 00, 00)
        # p (start..stop).cover? now


# Parameters: {"reservation"=>{"date"=>"2020-10-05", "time"=>"7:00PM", "notes"=>"Make a note or accommodations request here.", "party_size"=>"2", "restaurant_id"=>"1", "user_id"=>"1"}}


    #    Parameters {"query"=>["3", "2", "2020-12-31", "7:00PM"]
    # window.searchHours([4, 2, "2020-12-31", "5:00PM"])
        
        hour_ahead = time.to_i + 3600
        hour_behind = time.to_i - 3600

        @hour = Hour.where('day = ? AND opening <= ? AND closing > ? AND restaurant_id = ?', "#{day}", "#{time}", "#{time}", "#{rest_id}")
        @ahead = Hour.where('day = ? AND opening <= ? AND closing > ? AND restaurant_id = ?', "#{day}", "#{hour_ahead}", "#{hour_ahead}", "#{rest_id}")
        @behind = Hour.where('day = ? AND opening <= ? AND closing > ? AND restaurant_id = ?', "#{day}", "#{hour_behind}", "#{hour_behind}", "#{rest_id}")

        # debugger

        h = @hour === [] ? "closed" : "open"
        a = @ahead === [] ? "closed" : "open"
        b = @behind === [] ? "closed" : "open"

        render json: [h, a, b]

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
