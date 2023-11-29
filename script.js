$(".manhattan").click(function() {
  $(".Part-Two-Manhattan").show();
  $(".firstImage").hide();
  $(".button").hide();
  $("body").css("background-color", "gray");
}); 


$(".brooklyn").click(function() {
  $(".Part-Two-Brooklyn").show();
  $(".firstImage").hide();
  $(".button").hide();
  $("body").css("background-color", "gray");
});



$(".mh").dblclick(function(){
  $(".blush").show();
  $(".Part-Two-Manhattan").hide();
  $("body").css("background-color", "lightpink");
   
});

$(".bk").dblclick(function(){
   $(".blush").show();
   $(".bk").hide();
   $(".Part-Two-Brooklyn").hide();
   $("body").css("background-color", "lightpink");
});

$(".rare").click(function() {
  $(".Part-Four-Rare").show();
  $(".blush").hide();
  $("body").css("background-color", "yellow");
});

$(".patrick").click(function() {
  $(".Part-Four-Patrick").show();
  $(".blush").hide();
  $("body").css("background-color", "red");
});

$(".restart").dblclick(function(){
   $(".title").show();
   $(".firstImage").show();
   $(".button").show();
   $(".Part-Four-Patrick").hide();
   $(".bk").show();
   $("body").css("background-color", "white");
});

$(".restart2").dblclick(function(){
   $(".title").show();
   $(".firstImage").show();
   $(".button").show();
   $("body").css("background-color", "white");
   $(".Part-Four-Rare").hide();
   $(".bk").show();
});