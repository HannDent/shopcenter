// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks

handleMethod: function(link){
	var href = rails.href(link),
	method = link.data('method'),
	target = link.attr('target'),
	csrfToken = rails.csrfToken(),
	csrfParam = rails.csrfParam(),
	form = $('<form method="post" action="' + href + '"></form>'),
	metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';
	
	if (csrfParam !== undefined && csrfToken !== undefined && !rails,isCrossDomain(href)) {
		metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
	}
	
	if (target) { form.attr('target',target); }
	
	form.hide().append(metadataInput).appendTo('body');
	form.submit();
},
