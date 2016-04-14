// $(document).ready(function() {

//   $("#base-route").on("keyup", function() {
//     setGoldenText(this);
//   });

//   $("#base-route").on("keydown", function(event){
//     preventDefaultEnterKey(event);
//   });

//   $("#nested-route").on("keyup", function() {
//     nestedKeyUp(this);
//   });

//   $('#route-body').on('mouseover', 'tr.route', function(){
//     addClassHover(this);
//   });

//   $('#route-body').on('mouseout', 'tr.route', function(){
//     removeClassHover(this);
//   });

//   $('#route-body').on("click", "tr.route", function() {
//     toggleNext(this);
//     toggleTRClass(this);
//     squadLove();
//   });


// //############ ZeroClipboard #########################

//   client = new ZeroClipboard( $(".route-pre") );

//   client.on("ready", function( readyEvent ) {
//     client.on("copy", function(event) {
//       var preData = event.target.innerText;
//       client.setText(preData);
//     })
//     client.on("aftercopy", function( event ) {
//       $(event.target).siblings(".copy-prompt").text("Copied!");
//       $(event.target).addClass(".on-click")
//       setTimeout(function(){
//         $(event.target).siblings(".copy-prompt").text("^click to copy^");
//         $(event.target).addClass(".on-click");
//       }, 1000);
//     });
//   });

// }); //end of (document).ready()


// //######################## Functions #############################

// function nestedKeyUp(that) {
//   if ($(that).val().length >= 1 && trs.singular === true) {
//     trs.appendNestedRows()
//     setNestedText(that)
//     setGoldenText($("#base-route"))
//     setZeroClipboard()
//   } else if ($(that).val().length >= 1) {
//     setNestedText(that)
//     setGoldenText($("#base-route"))
//   } else{
//     trs.appendSingularRows()
//     setGoldenText($("#base-route"))
//     setZeroClipboard()
//   }
// }

// function setZeroClipboard() {
//   client.clip( $(".route-pre") );
// }

// function setGoldenText(that) {
//   $(".golden-text").text($(that).val().toLowerCase());
//   $(".singular-golden-text").text(pluralize(capitalize($(that).val()), 1));
//   $(".singular-downcase-golden-text").text((pluralize($(that).val(), 1)));
// }


// function setNestedText(that) {
//   $(".nested-text").text($(that).val().toLowerCase());
//   $(".singular-nested-text").text(pluralize(capitalize($(that).val()), 1));
//   $(".singular-downcase-nested-text").text((pluralize($(that).val(), 1)));
// }

// function addClassHover(that) {
//   $(that).addClass('hover');
// }

// function removeClassHover(that) {
//   $(that).removeClass('hover');
// }

// function preventDefaultEnterKey(event) {
//   if (event.keyCode == 10 || event.keyCode == 13) {
//     event.preventDefault();
//   }
// }

// function toggleNext(that) {
//   $(that).next().toggle("slow");
// }

// function toggleTRClass(that) {
//   $(that).toggleClass('in-use');
//   $(that).toggleClass('hover');
// }

// function squadLove() {
//   var rand100 = Math.floor(Math.random() * 100)
//   if (rand100 === 50) {
//     $('.sub-box-under').text("Chi Bobolinks 2015!")
//   }
// }

// function capitalize(string) {
//   var lowerCaseString = string.toLowerCase();
//   return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
// }
