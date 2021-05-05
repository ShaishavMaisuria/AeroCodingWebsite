// using this to create a toggling effect to contact button when clicked like a small animation
// also a Jquery plugin requirment js
$(document).ready(function(){
	$(".contact-btn").click(function(){
		
		$(".contact-form").toggle("slow");
	});
});

// it is used to make provide specific functionality to the date picker
// also a Jquery plugin requirment js
$(document).ready(function(){
	$("#datepicker").datepicker({
		changeMonth:true,
		changeYear:true
	});
});





