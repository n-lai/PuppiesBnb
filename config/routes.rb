Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :puppies, except: [:edit, :new]
    resources :bookings, only: [:create, :destroy]
    get 'bookings-renter' => 'bookings#renter_index'
    resources :reviews, only: [:create, :destroy]
  end
end
