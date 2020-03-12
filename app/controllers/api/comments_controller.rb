class Api::CommentsController < ApplicationController
    before_action :require_login, except:[:index, :show]

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render :show 
        else  
            render json: @comment.errors.full_message, status: 422
        end
    end 

    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
    end 

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show 
        else  
            render json: @comment.errors.full_message, status: 422
        end
    end 

    def index
        question = Question.find_by(id: params[:question_id])
        @comments = question.comments
        if @comments
            render :index
        else  
            render json: @comment.errors.full_message, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:text, :answer_id)
    end

end
