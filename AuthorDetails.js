$(document).ready(function(){
	$(document).on('click', '.dropdown-menu li a', function() {
		$('#departmentValue').val($(this).html());
	}); 
});