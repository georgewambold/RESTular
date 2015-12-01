function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function singularize(string) {
  var stringEnd = string.length - 1
  if (string.substr((stringEnd - 2), stringEnd) === "ies") {
    return (string.substr(0, stringEnd - 2) + "y")
  } else if (string.substr((stringEnd - 1), stringEnd) === "es") {
    return string.substr(0, stringEnd - 1) 
  } else if (string.substr(stringEnd) === "s") {
    return string.substr(0, (stringEnd))
  } else {
    return string
  }
}

$(document).ready(function() {
	$(".submission-box").on("keyup", function() {
    $(".golden-text").text($(this).val().toLowerCase())
		$(".g-text-singular").text(capitalizeFirstLetter(singularize($(this).val())))
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





