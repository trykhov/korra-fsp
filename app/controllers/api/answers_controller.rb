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

    # show all answers (for feed)
    def index 
        @answers = Answer.all
        render :index
    end

    # for answer page
    def show
        @answer = Answer.find_by(id: params[:id])
        render :show
    end




    private
    def answer_params
        params.require(:answer).permit(:answer, :question_id)
    end
end
