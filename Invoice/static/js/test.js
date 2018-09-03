$(document).ready(function(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	var today = dd+'/'+mm+'/'+yyyy;
	$(".date").append("<p>Date: "+today+"</p>");

	$(".add-row").click(function(){
		$(this).closest(".table-data-row").after("<tr class=\"table-data-row\"> <td> <div class=\"dropdown\"> <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> Select Item </button> <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\"> <a class=\"dropdown-item\" href=\"#\">Item 1</a> <a class=\"dropdown-item\" href=\"#\">Item 10</a> </div> </div> </td> <td> <input type=\"number\" min=\"1\"> </td> <td> price </td> <td> tax </td> <td> total </td> <td class=\"icons-container\"> <i class=\"fa fa-plus add-row\" aria-hidden=\"true\"></i> <i class=\"fa fa-times delete-row\" aria-hidden=\"true\"></i> </td> </tr>");
	});
	$(".delete-row").click(function(){
		$(this).closest(".table-data-row").remove();
	});


	var	$printlogo = $('.company-logo');
	$.ajax({
		type: 'GET',
		url: 'http://52.221.70.110:8800/api/getlogo/',
		success: function(data){
			$.each(data, function(i, logo){
				console.log(logo.imageurl);
				$printlogo.append('<img src="'+logo.imageurl+' ">');
			});
			console.log('success',data);
		}
	});
});