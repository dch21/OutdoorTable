class Api::RestaurantsController < ApplicationController

    def index
        @poems = Poem.all
        render :index
    end

    def new
        @poem = Poem.new
        render :new
    end

    def create
        @poem = Poem.new(poem_params)
        @poem.author_id = current_user.id

        if @poem.save
            redirect_to poems_url
        else
            flash.now[:errors] = @poem.errors.full_messages
            render :new
        end
    end

    def edit
        @poem = Poem.find(params[:id])
        render :edit
    end

    def update
        @poem = Poem.find(params[:id])
        if current_user.id != @poem.author_id
            flash.now[:errors] = ['Something went wrong!']
            return
        end

        if @poem.update(poem_params)
            redirect_to poems_url
        else
            flash.now[:errors] = ['Something went wrong!']
            render :edit
        end
    end

    def poem_params
        params
        .require(:poem)
        .permit(:title, :stanzas, :complete)
    end

end
