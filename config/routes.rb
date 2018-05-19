Rails.application.routes.draw do
  get 'home/index'

  root 'home#index'

  resources :dirtrees do
    resources :nodes
  end

  resources :nodes do
    resources :nodes
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
