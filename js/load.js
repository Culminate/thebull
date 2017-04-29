$(document).ready(function(){
	$.ajax({
  		url: 'js/load.html',
  		dataType: 'text',
  		async: false,
  		
  		success: function (data) {
  		$("head").append(data);
  		}
	});
  $.ajax({
      url: 'js/postload.html',
      dataType: 'text',
      
      success: function (data) {
      $("head").append(data);
      }
  });	
});
