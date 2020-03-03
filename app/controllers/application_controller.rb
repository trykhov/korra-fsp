class ApplicationController < ActionController::Base
    # handles logic of user login and logout
    helper_method :current_user, :is_logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user)
        session[:session_token] = user.session_token
    end

    def is_logged_in?
        !current_user.nil?
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def require_login
        redirect_to new_session_url unless is_logged_in?
    end

    def require_logout
        redirect_to user_url(current_user) if is_logged_in?
    end

end
