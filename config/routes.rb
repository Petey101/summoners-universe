Rails.application.routes.draw do
  devise_for :users
  get '/games/check_answer', to: 'games#check_answer', as: 'check_answer'
  get '/games/failed_game', to: 'games#failed_game', as: 'failed_game'

  root 'welcome#index'
  resources :users, only: [:show]
  resources :games, only: [:create, :show]
  resources :battles, only: [:show]
end
