Rails.application.routes.draw do
  root to: 'pages#home'

  namespace :api, default: { format: :json } do
    namespace :v1 do
      resources :cats, only: [ :index, :create, :show, :destroy, :update ]
    end
  end
end
