Rails.application.routes.draw do
  namespace :api do
    devise_for :users, :controllers => {
      sessions: 'sessions',
      registrations: 'registrations'
    }

    resources :groups, only: [:index, :show]
    resources :profile, only: [:index]
  end
  root 'application#index'

  get '/b/' => 'application#index'
  get '*path' => redirect('/b/#/%{path}')

end
