Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do # for the backend controllers
    resource :session, only:[:create, :destroy] # for the session (sign up, log in, log out)
    resources :users
      # resources :questions do
      #     resources :answers
      # end
      # resources :answers do
      #     resources :comments
      # end
      # resources :topics do
      #     resources :questions
      # end
  end

  root to: 'static_pages#root' # allows react to render from the backend
end
