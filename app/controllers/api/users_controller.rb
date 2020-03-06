class Api::UsersController < ApplicationController
    
    # be able to retrieve a particular user
    # allows any profile
    def show
        # find them by username (not ids)
        @user = User.find_by(id: params[:id])
        render :show 
    end

    def index
        if params.has_key?(:question_id)
            question = Question.find_by(id: params[:question_id])
            @users = question.people_who_answered
        else
            @users = User.all
        end
        render :index 
    end


    # making a new account
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :index
        else  
            render json: @user.errors.full_messages, status: 422
        end 
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
