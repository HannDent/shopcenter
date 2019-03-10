module ApplicationHelper

  def show_add_to_cart product, options = {}
    html_class = "btn btn-danger add-to-cart-btn"
    html_class += " #{options[:html_class]}" unless options[:html_class].blank?
#
    link_to "<i class='fa fa-spinner'></i> 加入购物车".html_safe, cart_add_path(:non=>product), class: html_class
  end

  def current_cart
	if cookies[:shop_cart].blank?
		return nil
	else
		return JSON.parse(cookies[:shop_cart])
	end
  end
  
  def clear_cart
	cookies[:shop_cart] = nil
  end
  
  def add_to_cart(id)
	pid = (id/100).to_i
	pno = id%100
	if current_cart.blank?
		arr = Array.new
		arr.push id
	else
		arr = current_cart
		if arr.find{|item| (item/100).to_i==pid}.blank?
			item = id
			arr.push item
		else
			arr.collect!{|item|
				if (item/100).to_i==pid
					item = item+pno
					if item%100>=10
						item = pid*100+10
					end
				end
				item
			}
		end
	end
	cookies[:shop_cart]=arr.to_json
  end
end