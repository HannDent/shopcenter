class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
  
	protected
	def fetch_home_data
		if cookies[:shop_cart].blank?
			@shopping_cart_count = 0
		else
			@shopping_cart_count = JSON.parse(cookies[:shop_cart]).size
		end
	end
  
	def cparm
		@all_st = [["XA科",1], ["XB科", 2], ["XC科",3], ["XD科",4], ["XE科",5],
				["XF科",6], ["XG站",7], ["XH科",8], ["XI科",9], ["XJ科",10], 
				["XK科",11], ["XL科",12], ["XM科",13], ["XN科",14], ["XO科",15], 
				["XP科",16], ["XQ科",17]]
		@all_ad = [["已废弃",0],["未确认",1], ["已确认", 2], ["已下单",3], ["已收货",4], ["完成",5]]
		@all_item = [["硒鼓墨盒",1], ["电脑配件", 2], ["办公纸笔",3], ["办公文具",4], ["财务用品",5], ["其他",6]]
	end
	
	def order_notice
		@lists = ["没有新的订单信息1", "没有新的订单信息2", "没有新的订单信息3", "没有新的订单信息4",
				"没有新的订单信息5", "没有新的订单信息6", "没有新的订单信息7", "没有新的订单信息8"]
		@num = 0
	end
	
end
