class CartController < ApplicationController
  def add
	fetch_home_data
	
	@pid = (params[:non].to_i/100).to_i
	@pno = params[:non].to_i%100
    @product = Product.find(@pid)
  end
  
  def shop
	fetch_home_data
	cparm
	
	if cookies[:shop_cart].blank?
		@arr = nil
	else
		@arr = JSON.parse(cookies[:shop_cart])
	end
	
	if(params[:non]!=nil)
		@arr.each do |item|
			if (item/100).to_i.to_s==params[:non]
				@arr.delete item
			end
		end
		cookies[:shop_cart]=@arr.to_json
	end
	
	unless @arr.blank?
		@product = Array.new
		@arr.sort!
		@arr.each do |item|
			pid = (item/100).to_i
			pno = item%100
			tenp = Temp.new(pno,Product.find(pid))
			@product.push tenp
		end
	end
	
  end

end
