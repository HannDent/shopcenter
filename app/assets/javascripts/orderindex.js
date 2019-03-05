$.noConflict();
jQuery(document).ready(function(){
	jQuery("td.color").each(function(){
		var sub = Number(jQuery(this).text());
		if (sub == 1){
			jQuery(this).parent().addClass("danger"); 
		}else if(sub == 2){
			jQuery(this).parent().addClass("warning"); 
		}else if(sub == 3){
			jQuery(this).parent().addClass("success"); 
		}else if(sub == 4){
			jQuery(this).parent().addClass("active"); 
		}else if(sub == 5){
			jQuery(this).parent().addClass("achieve"); 
		}
	});
});