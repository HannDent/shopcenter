$.noConflict();

jQuery(document).ready(function(){
	
	foo(); 
	fou();
	
	jQuery('.amount').bind('input propertychange', function() {
		var emlInput = Number(jQuery(this).parent().find(".amount").val());
		var sub = Number(jQuery(this).parent().find("span.price").text());
		jQuery(this).parent().find("strong.subtotle").text(String((sub*emlInput).toFixed(2)));
		fou();
	});

	jQuery("button.bleft").click(function(){
		var emlInput = Number(jQuery(this).parent().find(".amount").val());
		emlInput = emlInput-1;
		if ( emlInput < 1 ) {
			emlInput = 1;
		} else { }
		jQuery(this).parent().find(".amount").val(emlInput);
		
		var sub = Number(jQuery(this).parent().find("span.price").text());
		jQuery(this).parent().find("strong.subtotle").text(String((sub*emlInput).toFixed(2)));
		fou();
	});
	jQuery("button.bright").click(function(){
		var emlInput = Number(jQuery(this).parent().find(".amount").val());
		emlInput = emlInput+1;
		if ( emlInput > 10 ) {
			emlInput = 10;
		} else { }
		jQuery(this).parent().find(".amount").val(emlInput);
		
		var sub = Number(jQuery(this).parent().find("span.price").text());
		jQuery(this).parent().find("strong.subtotle").text(String((sub*emlInput).toFixed(2)));
		fou();
	});

	jQuery("button#cartorder").click(function(){
		var a = new Date();
		var time =a.getFullYear().toString()[2] + a.getFullYear().toString()[3] + format(a.getMonth().toString()); 
		
		var list = new Array();
		jQuery("div.media-body").each(function(){
			var pid = Number(jQuery(this).find("span.pid").text());
			var amount = Number(jQuery(this).find(".amount").val());
			list.push(String(pid*100+amount));
		});
		var liststr = list.toString();
	
		params = {"utf8":"✓", "order[id]":time, "order[time]":jQuery("span.totle").text(), "order[secke]":jQuery(".form-control").val(), "order[stage]":"1", "order[list]":liststr, "commit":"Create Order" };
		var form = document.createElement("form");
		var temp = document.createElement("form");
		form.setAttribute("method", "post");
		form.setAttribute("action", "/orders");
		
		for(var key in params) {
			if(params.hasOwnProperty(key)) {
				var hiddenField = document.createElement("input");
				hiddenField.setAttribute("type", "hidden");
				hiddenField.setAttribute("name", key);
				hiddenField.setAttribute("value", params[key]);
	
				form.appendChild(hiddenField);
			}
		}
	
		document.body.appendChild(form);
		form.submit();
		document.body.removeChild(form);
    });
});

function foo() {  
	jQuery("div.media-body").each(function(){
		var sub = Number(jQuery(this).find("span.price").text());
		var amount = Number(jQuery(this).find(".amount").val());
		jQuery(this).find("strong.subtotle").text(String((sub*amount).toFixed(2)));
	});
}
function fou() {
	var totle = 0;
	jQuery("strong.subtotle").each(function(){
		totle = totle + Number(jQuery(this).text());
	});
	totle = totle.toFixed(2);
	jQuery("span.totle").text(String(totle));
}
function format(str) {  
	if (str.length == 1){
		str = "0" + str;
	}
	return str;
}