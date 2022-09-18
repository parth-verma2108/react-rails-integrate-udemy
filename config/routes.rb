Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :sessions
      resources :courses
      resources :users, only: [:create, :show, :index]
      get 'courses/index'
      post 'courses/create'
      delete 'courses/:id', to: 'courses#destroy'
      post '/users',         to: 'users#create'
      get '/users/:user_id', to: 'users#show'
      get '/users',          to: 'users#index'
      post '/login',    to: 'sessions#create'
      post '/logout',   to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#is_logged_in?'
    end
  end
end
