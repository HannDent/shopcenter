$.noConflict();
jQuery(document).ready(function(){
	jQuery("button.bleft").click(function(){
		var emlInput = Number(jQuery(this).parent().find(".amount").val());
		emlInput = emlInput-1;
		if ( emlInput < 1 ) {
			emlInput = 1;
		} else { }
		jQuery(this).parent().find(".amount").val(emlInput);
	});
	jQuery("button.bright").click(function(){
		var emlInput = Number(jQuery(this).parent().find(".amount").val());
		emlInput = emlInput+1;
		if ( emlInput > 10 ) {
			emlInput = 10;
		} else { }
		jQuery(this).parent().find(".amount").val(emlInput);
	});
	jQuery("button#addcart").click(function(){
		var emlInput = Number(jQuery("span#pid").text())*100+Number(jQuery(this).parent().find(".amount").val());
		location.href = "/cart/add?non="+String(emlInput);
	});
});