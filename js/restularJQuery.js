$(document).ready(function() {
  $('#route-body').on('click', '.route-pre', function() {
    flashBorder(this)
  });

  $('#route-body').on('click', 'tr.hover', function() {
    $(this).toggleClass('in-use')
  });
});


flashBorder = function(that) {
  $(that).siblings('.indicate-copy').text("Copied!")
  $(that).fadeOut(100).fadeIn(1000)
  setTimeout(function() {
    $(that).siblings('.indicate-copy').text("(click to copy)")
  }, 1000)
}