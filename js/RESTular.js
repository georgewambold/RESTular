$(document).ready(function() {

  $("#base-route").on("keyup", function() {
    setGoldenText(this);
  });

  $("#base-route").keydown(function(event){
    preventDefaultEnterKey(event);
  });

  $("#nested-route").on("keyup", function() {
    nestedKeyUp(this);
  });

  $('tbody#route-body tr.route').mouseover(function(){
    console.log("we in this")
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

function nestedKeyUp(that) {
  if ($(that).val().length >= 1 && trs.singular === true) {
    trs.appendNestedRows()
    setNestedText(that)
    setGoldenText($("#base-route"))
  } else if ($(that).val().length >= 1) {
    setNestedText(that)
    setGoldenText($("#base-route"))
  } else{
    trs.appendSingularRows()
    setGoldenText($("#base-route"))
  }
}

function setGoldenText(that) {
  $(".golden-text").text($(that).val().toLowerCase());
  $(".singular-golden-text").text(pluralize(capitalize($(that).val()), 1));
  $(".singular-downcase-golden-text").text((pluralize($(that).val(), 1)));
}


function setNestedText(that) {
  $(".nested-text").text($(that).val().toLowerCase());
  $(".singular-nested-text").text(pluralize(capitalize($(that).val()), 1));
  $(".singular-downcase-nested-text").text((pluralize($(that).val(), 1)));
}

function addClassHover(that) {
  $(that).addClass('hover');
}

function removeClassHover(that) {
  $(that).removeClass('hover');
}

function preventDefaultEnterKey(event) {
  if (event.keyCode == 10 || event.keyCode == 13) {
    event.preventDefault();
  }
}

function toggleNext(that) {
  $(that).next().toggle("slow");
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
