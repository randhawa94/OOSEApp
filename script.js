$(document).ready(function() {
	$('#event').click(function(){
		//alert('Handler for click called');
		$.ajax({
        url: "http://127.0.0.1:8080/greeting"
    }).then(function(data) {
       $('#content').text(data.content);
    });
		});
    
});
