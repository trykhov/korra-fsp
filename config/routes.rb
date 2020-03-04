Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do # for the backend controllers
    resource :session, only:[:create, :destroy] # for the session (sign up, log in, log out)
    # must have an account to add, remove or edit
    # resources :users do 
    #   resources :questions, only:[:create, :destroy, :update]
    #   resources :answers, only:[:create, :destroy, :update]
    #   resources :comments, only:[:create, :destroy, :update]
    # end
    # can access and read the questions, comments, topic and answers without an account
    resources :users
    resources :questions
    resources :answers
    resources :comments
    resources :topics
  end

  root to: 'static_pages#root' # allows react to render from the backend
end
