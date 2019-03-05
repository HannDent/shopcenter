$.noConflict();
jQuery(document).ready(function(){
	
	jQuery("tr.body").each(function(){
		var sub = Number(jQuery(this).find("span.price").text());
		var amount = Number(jQuery(this).find("span.amount").text());
		jQuery(this).find("span.subtotle").text(String((sub*amount).toFixed(2)));
	});
	
	var totle = 0;
	jQuery("span.subtotle").each(function(){
		totle = totle + Number(jQuery(this).text());
	});
	totle = totle.toFixed(2);
	if( Number(jQuery("span.totle").text()) - totle > 0.01 ){
		alert("商品价格有变动，以当前价格为准。");
		jQuery("span.totle").text(String(totle));
	}	
	jQuery("span.bigtotle").text(String(numToCny(totle)));
	
	jQuery("button#print").click(function(){
		bdhtml=window.document.body.innerHTML;//获取当前页的html代码
		sprnstr="<!--startprint-->";//设置打印开始区域
		eprnstr="<!--endprint-->";//设置打印结束区域
		prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+17); //从开始代码向后取html

		prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//从结束代码向前取html
		window.document.body.innerHTML="<body>"+prnhtml+"</body>";
		window.print();
		window.document.body.innerHTML=bdhtml; 
	})
});

function numToCny(n){
	var fraction = ['角', '分'];
	var digit = [
		'零', '壹', '贰', '叁', '肆',
		'伍', '陆', '柒', '捌', '玖'
		];
	var unit = [
		['元', '万', '亿'],
		['', '拾', '佰', '仟']
		];
	var head = n < 0 ? '欠' : '';
	n = Math.abs(n);
	var s = '';
	for (var i = 0; i < fraction.length; i++) {  
		s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
	}
	s = s || '整';
	n = Math.floor(n);
	for (var i = 0; i < unit[0].length && n > 0; i++) {
		var p = '';
		for (var j = 0; j < unit[1].length && n > 0; j++) {
			p = digit[n % 10] + unit[1][j] + p;
			n = Math.floor(n / 10);
		}
		s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
	}  
	return head + s.replace(/(零.)*零元/, '元')
		.replace(/(零.)+/g, '零')
		.replace(/^整$/, '零元整');
};

