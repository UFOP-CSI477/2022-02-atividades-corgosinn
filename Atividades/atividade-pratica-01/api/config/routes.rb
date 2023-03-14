Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :pessoas
      resources :tipo_sanguinios
      resources :distribuicaos
      resources :produtos
      resources :doacaos
      resources :local_coleta
      resources :unidades
      resources :cidades
      resources :estados
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
