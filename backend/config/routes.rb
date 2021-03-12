Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :styles, only: [:index, :show]
  resources :cigars, only: [:index, :show, :create]
end
