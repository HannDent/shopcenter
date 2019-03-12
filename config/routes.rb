Rails.application.routes.draw do
 
	root 'home#index'

	get '/home/:id', to: 'home#item'

	get 'wel/admin'
	get 'wel/announcement1'
	get 'wel/announcement2'
	get 'wel/announcement3'
	
	get 'cart/add'
	get 'cart/shop'
	
	resources :products
	resources :orders
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end