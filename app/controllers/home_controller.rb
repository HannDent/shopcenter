class HomeController < ApplicationController
  def index
	fetch_home_data
	order_notice
  end
  
  def item
	fetch_home_data
	order_notice
	cparm
	
	@item = params[:id]
	@title = @all_item[@item.to_i-1][0]
	
	@products = Product.where("item = '#{params[:id]}'")
  end
  

end
