Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do # for the backend controllers
    resource :session, only:[:create, :destroy] # for the session (sign up, log in, log out)
 
  
    resources :users do 
      resources :answers, only:[:index, :show] # get all answers from specific user
      resources :questions, only:[:index] # get all questions asked by the user
    end 

    
    resources :questions do 
      resources :users, only:[:index] do 
        resources :answers, only:[:show]
      end
      resources :answers, only:[:index]
      resources :comments, only:[:index]
    end 
    
    resources :answers do 
      resources :users, only:[:index]
    end 

    resources :comments, only:[:destroy, :update, :create]
    resources :topics
  end

  root to: 'static_pages#root' # allows react to render from the backend
end
