class Api::QuestionAnswersController < ApplicationController

    # show all answers to a question
    def index
        question = Question.find_by(id: params[:id])
        @answers = question.answers
        render :index 
    end

end
