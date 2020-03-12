class Api::UsersController < ApplicationController
    
    # be able to retrieve a particular user
    # allows any profile
    def show
        @user = User.find_by(id: params[:id])
        render :show 
    end

    def index
        if params.has_key?(:question_id)
            question = Question.find_by(id: params[:question_id])
            @users = question.people_who_answered
        elsif params.has_key?(:answer_id)
            answer = Answer.find_by(id: params[:answer_id])
            @users = answer.people_who_commented
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
            @errors = {errors: @user.errors.full_messages}
            render 'api/errors/error'
        end 
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
