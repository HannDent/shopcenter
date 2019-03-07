class OrdersController < ApplicationController
	
	http_basic_authenticate_with name: "denghan", password: "linshigong", except: [:create, :show]
	protect_from_forgery :only => [:create]
	
	def index
		@orders = Order.all
	end
	
	def new
		cparm
		@order = Order.new
	end
	
	def create
		fetch_home_data
	
#		render plain: params[:order].inspect#
		
		@order = Order.new(order_params)
		
		@order.id = (@order.id+1)*1000 + Order.count + 1
		
		if @order.save
			redirect_to @order
		else
			render 'new'
		end
	end
	
	def edit
		cparm
		@order = Order.find(params[:id])
	end
	
	def show
		fetch_home_data
		cparm
		@order = Order.find(params[:id])
		@stage = @all_ad[@order.stage-1][0]
		
		@item = @all_st[@order.secke-1][0]
		@time = '20'+String(@order.id)[0]+String(@order.id)[1]+"年"+String(@order.id)[2]+
		String(@order.id)[3]+"月"+String(@order.id)[4]+String(@order.id)[5]+"日"
		
		@product = Array.new
		@amount = Array.new
		@order.list.split(pattern=',').each{|x|
			pid = (x.to_i/100).to_i
			pno = (x.to_i%100).to_i
			
			@product.push(Product.find(pid))
			@amount.push(pno)
		}
	end
	
	def update
		@order = Order.find(params[:id])
		if @order.update(order_params)
			redirect_to @order
		else
			render 'edit'
		end
	end
	
	def destroy
		@order = Order.find(params[:id])
		@order.destroy
		
		redirect_to orders_path
	end
	
	private
		def order_params
			params.require(:order).permit(:id,:time,:secke,:stage,:list)
		end
end
