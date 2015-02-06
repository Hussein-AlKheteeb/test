$(document).ready(function(){
	$('#tabs div').hide();
	$('#tabs div:first').show();
	$('#main-tap ul li:first').addClass('active');
	$('#main-tap ul li a').click(function(){ 
	$('#main-tap ul li').removeClass('active');
	$(this).parent().addClass('active'); 
	var currentTab = $(this).attr('href'); 
	$('#tabs div').hide();
	$(currentTab).show();
	return false;
	});
	});

function view(id)
{	
	$(document).ready(function()
	 {
		 $('#img-over'+id).mouseover(function()
		 {
			 $('#marq'+id).slideDown(300);
		 });
		 $('#img-over'+id).mouseout(function()
		 {
			 $('#marq'+id).slideUp(500);
		 });
	 });
}