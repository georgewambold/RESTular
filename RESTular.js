$(document).ready(function() {
	$(".submission-box").on("keyup", function() {
		$(".golden-text").text($(this).val().toLowerCase())
	});
});

$(document).ready(function(){
   $('tr.route').mouseover(function(){
      $(this).addClass('hover');
   });
        
   $('tr.route').mouseout(function(){
      $(this).removeClass('hover');
   });
});

$(document).ready(function(){
	$(".route").on("click", function() {
		$(this).next().toggle()
	});
});



var client = new ZeroClipboard( $(".route-info td pre"), {
              moviePath: "resources/ZeroClipboard.swf",
              debug: false
});









