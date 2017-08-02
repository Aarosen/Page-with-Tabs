$(document).ready(function () {
  // Escribe tu código aquí
  console.log('hola')
  var part = $("#tab1");
  $(part).show();
  $(".tabs a").click(function(event) {
  	event.preventDefault();
  	$(this).parent("li").addClass("active").siblings().removeClass("active");
  	$(part).hide();
  	console.log(part);
  	var current = $(this).attr("href");
  	$(".tab").hide();
  	console.log(current);
  	$(current).show();
  });
});


