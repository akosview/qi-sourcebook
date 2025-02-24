jQuery(document).ready(function() {
	jQuery('.header-search-block a').click(function(event) {
		event.preventDefault();
	jQuery('.header-search-block').toggleClass('active');		
	});	
	jQuery('.spravochnik-schema-bottom-item-inner').click(function() {
		jQuery(this).parent().find('.spravochnik-schema-bottom-slides').toggleClass('active');
		if (jQuery(this).parent().find('.spravochnik-schema-bottom-slides.active').length==0) {
		jQuery('.spravocvhnik-tables').removeClass('active');
		jQuery('.spravochnik-table-item').removeClass('active');
	}
});	
	
jQuery('.spravochnik-schema-bottom-slide-item').click(function() {
	var tableid = jQuery(this).attr('tableid');	
	jQuery('.spravocvhnik-tables').addClass('active');
		jQuery('.spravochnik-table-item').removeClass('active');	
		jQuery('.spravochnik-table-item[tableid="'+tableid+'"]').addClass('active');
	});	
	
	jQuery('.addperson-btn').click(function(event){
		event.preventDefault();
		jQuery('.form1').addClass('active');	
	})
	jQuery('.modal-form-btn a').click(function(event){
		event.preventDefault();
		jQuery('.form1').removeClass('active');	
	})
	jQuery('.addinfo-btn').click(function(event){
		event.preventDefault();
		jQuery('.form2').addClass('active');	
	})
	jQuery('.modal-form-btn a').click(function(event){
		event.preventDefault();
		jQuery('.form2').removeClass('active');	
	})
});


