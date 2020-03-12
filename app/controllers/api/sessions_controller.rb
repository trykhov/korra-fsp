class Api::SessionsController < ApplicationController

    # allow the user to sign in and sign out
    # login or sign in page

    # sign in
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'; # will call the partial and give us the username and id
        else  
            @errors = { errors: 'Invalid email or password' }
            render 'api/errors/error'
        end 
    end 

    # sign out
    def destroy
        logout
        render json: { message: 'Logout successful.' }
    end 
end
