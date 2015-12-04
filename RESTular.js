$(document).ready(function() {

  var client = new ZeroClipboard( $(".route-pre") );

  client.on( "ready", function( readyEvent ) {
    client.on("copy", function(event) {
      console.log(client);
      var preData = event.target.innerText;
      client.setText(preData);
    })
    client.on( "aftercopy", function( event ) {
      $(event.target).siblings(".copy-prompt").text("Copied!");
      $(event.target).addClass(".on-click")
      setTimeout(function(){
        $(event.target).siblings(".copy-prompt").text("^click to copy^");
        $(event.target).addClass(".on-click");
      }, 1000);
    });
  });

  $(".submission-box").on("keyup", function() {
    $(".golden-text").text($(this).val().toLowerCase());    
    $(".g-text-singular").text(pluralize(capitalize($(this).val()), 1));
    $(".g-text-s-dc").text((pluralize($(this).val(), 1)));
  });

   $('tr.route').mouseover(function(){
      $(this).addClass('hover');
   });
        
   $('tr.route').mouseout(function(){
      $(this).removeClass('hover');
   });


  $(".route").on("click", function() {
    $(this).next().toggle();
    $(this).toggleClass('in-use');
    $(this).toggleClass('hover');

    var rand100 = Math.floor(Math.random() * 100)
    if (rand100 === 69) {
      $('.sub-box-under').text("Chi Bobolinks 2015!")
    } //else if (rand100 >= 80) {
    //   $('.sub-box-under').text("Type something in!")
    // } else if (rand100 >= 60) {
    //     $('.sub-box-under').text("Try your own!")
    // } else if (rand100 >= 40) {
    //     $('.sub-box-under').text("Rest-a-licious!")
    // } else if (rand100 >= 20) {
    //     $('.sub-box-under').text("Rapid Restful Results! (TM)")
    // } else {
    //     $('.sub-box-under').text("Kitchen it? Kitchen it.")
    // }
  });


});


function capitalize(string) {
  var lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
}

