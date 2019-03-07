class ProductsController < ApplicationController

	http_basic_authenticate_with name: "denghan", password: "linshigong", except: [:show]
	
	def index
		@products = Product.all
	end
	
	def new
		cparm
		@product = Product.new
	end
	
	def create
#		render plain: params[:product].inspect#
		@product = Product.new(product_params)
		if @product.save
			redirect_to @product
		else
			render 'new'
		end
	end
	
	def edit
		cparm
		@product = Product.find(params[:id])
	end
	
	def show
		fetch_home_data
		order_notice
		cparm
		
		@product = Product.find(params[:id])
		@title = @all_item[@product.item-1][0]
	end
	
	def update
		@product = Product.find(params[:id])
		if @product.update(product_params)
			redirect_to @product
		else
			render 'edit'
		end
	end
	
	def destroy
		@product = Product.find(params[:id])
		@product.destroy
		
		redirect_to products_path
	end
	
	private
		def product_params
			params.require(:product).permit(:id,:title,:item,:price,:remark)
		end
end