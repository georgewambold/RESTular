$(document).ready(function() {

  $(".submission-box").on("keyup", function() {
    setGoldenText(this);
  })

  $('tr.route').mouseover(function(){
    addClassHover(this);
  });

  $('tr.route').mouseout(function(){
    removeClassHover(this);
  });

  $(".route").on("click", function() {
    toggleNext(this);
    toggleTRClass(this);
    squadLove();
  });


//############ ZeroClipboard Nightmare #########################

  var client = new ZeroClipboard( $(".route-pre") );

  client.on("ready", function( readyEvent ) {
    client.on("copy", function(event) {
      var preData = event.target.innerText;
      client.setText(preData);
    })
    client.on("aftercopy", function( event ) {
      $(event.target).siblings(".copy-prompt").text("Copied!");
      $(event.target).addClass(".on-click")
      setTimeout(function(){
        $(event.target).siblings(".copy-prompt").text("^click to copy^");
        $(event.target).addClass(".on-click");
      }, 1000);
    });
  });


//################ Thank god that's over ##########################


}); //end of (document).ready()


//######################## Functions #############################


function removeClassHover(that) {
  $(that).removeClass('hover');
}

function setGoldenText(that) {
  $(".golden-text").text($(that).val().toLowerCase());
  $(".g-text-singular").text(pluralize(capitalize($(that).val()), 1));
  $(".g-text-s-dc").text((pluralize($(that).val(), 1)));
}

function addClassHover(that) {
  $(that).addClass('hover');
}

function toggleNext(that) {
  $(that).next().toggle();
}

function toggleTRClass(that) {
  $(that).toggleClass('in-use');
  $(that).toggleClass('hover');
}

function squadLove() {
  var rand100 = Math.floor(Math.random() * 100)
  if (rand100 === 69) {
    $('.sub-box-under').text("Chi Bobolinks 2015!")
  }
}

function capitalize(string) {
  var lowerCaseString = string.toLowerCase();
  return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
}
