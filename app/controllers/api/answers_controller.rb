class Api::AnswersController < ApplicationController
    before_action :require_login, except:[:index, :show]

    # allows user to answer a question
    def create
        @answer = Answer.new(answer_params)
        @answer.user_id = current_user.id
        if @answer.save
            render :show
        else  
            render json: @answer.errors.full_messages, status: 422
        end 
    end 

    def index 
        if params.has_key?(:question_id)
            # gets all the answers to a question
            question = Question.find_by(id: params[:question_id])
            @answers = question.answers 
        elsif params.has_key?(:user_id)
            # gets all the answers that a user has posted
            user = User.find_by(id: params[:user_id])
            @answers = user.answers 
        else  
            # show all answers (for feed)
            @answers = Answer.all 
        end
        render :index
    end

    # for answer page
    def show
        # get specific answer to a question from a specific user
        if params.has_key?(:question_id) and params.has_key?(:user_id)
            question = Question.find_by(id: params[:question_id])
            @answer = question.answers.find_by(user_id: params[:user_id])
        elsif params.has_key?(:user_id)
            # get a specific answer from a specific user
            user = User.find_by(id: params[:user_id])
            @answer = user.answers.find_by(id: params[:id])
        else  
            @answer = Answer.find_by(id: params[:id])
        end
        render :show
    end

    def update
        @answer = Answer.find_by(id: params[:id])
        if @answer.update(answer_params)
            render :show
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def destroy
        @answer = Answer.find_by(id: params[:id])
        if @answer
            @answer.destroy
            render :show
        else 
            render json: @answer.errors.full_messages, status: 422
        end
    end

    private
    def answer_params
        params.require(:answer).permit(:text, :question_id)
    end
end
