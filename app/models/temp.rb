class  Temp < Object
	def initialize(amount,product)
		@amount = amount
		@id = product.id
		@title = product.title
		@item = product.item
		@price = product.price
		@remark = product.remark
	end
	
	def amount
		return @amount
	end
	def id
		return @id
	end
	def title
		return @title
	end
	def item
		return @item
	end
	def price
		return @price
	end
	def remark
		return @remark
	end
end
