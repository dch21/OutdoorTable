Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: "json" } do 
    resources :users, only: [:new, :create, :destroy, :update] do
      resources :reservations, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show] do 
      get :search, on: :collection
      get :aggregates, on: :member
      # get :bookings, on: :member
      resources :reviews, only: [:index]
    end

    resources :reservations, only: [:index, :show, :create, :destroy, :update]

    resources :reviews, only: [:create, :destroy, :update]

    resources :hours, only: [:index, :create]

  end

end
