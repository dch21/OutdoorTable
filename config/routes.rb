Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: "json" } do 
    resources :users, only: [:new, :create, :destroy, :update] do
      resources :reservations, only: [:index]
      resources :favorites, only: [:index] 
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show] do 
      get :search, on: :collection
      get :aggregates, on: :member
      resources :reviews, only: [:index]
    end

    resources :reservations, only: [:index, :show, :create, :destroy, :update]

    resources :reviews, only: [:create, :destroy, :update] do
      get :leftreview, on: :collection
    end

    resources :favorites, only: [:create, :destroy] 

    resources :hours, only: [:index, :create]

  end

end
