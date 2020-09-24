Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: "json" } do 
    resources :users, only: [:new, :create, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show] do 
      get :search, on: :collection
    end
  end

end
