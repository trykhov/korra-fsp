class Api::QuestionsController < ApplicationController
    before_action :require_login, except:[:index, :show]

    def create
        @question = Question.new(question_params)
        @question.user_id = current_user.id
        if @question.save
            render :show
        else 
            render json: @question.errors.full_messages, status: 422
        end
    end 

    def index
        if params.has_key?(:user_id)
            user = User.find_by(id: params[:user_id])
            @questions = user.questions
        else 
            @questions = Question.all
        end
        render :index
    end 

    def show
        @question = Question.find_by(id: params[:id])
        render :show
    end 

    def update
    end 

    def destroy
    end 

    private
    def question_params
        params.require(:question).permit(:title)
    end
end
