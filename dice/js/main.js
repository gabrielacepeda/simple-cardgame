/*user can enter number of dice, number of sides and the number of dice they want to ignore*/
/*user will see the dice they entered in a list*/
/*user expects the correct number of dice/sides/dice ignored to display*/






$("input").submit(function(e){
  e.preventDefault();
  // idol = $("#enter").val();
  $("#list").append("<li>"+idol+"</li>");
  $("#enter").val("");

})

$("#enter").on("click", function(e){
  $("li").remove();
  var dice = $("#numOfDice").val();
  var sides = $("#numOfSides").val();
  var ignored = $("#ignore").val();
  $("#numOfDice").val("");
  $("#numOfSides").val("");
  $("#ignore").val("");
  $("#list").append("<li>"+sides+"</li>");
  $("#enter").val("");
  getRolls(dice, sides, ignored);

}
)


function getRolls(zebra,party){
  for(var count = 1; count < zebra; count ++){
    var num = Math.ceil(Math.random()*party)
    $("#list").append("<li>"+num+"</li>")
  }
}


$("form").on("submit", function(e){
  e.preventDefault();
  $("li").remove()
  var numOfDice = $("#numOfDice").val();
  var numOfSides = $("#numOfSides").val();
  getRolls(numOfDice,numOfSides);
})



//to run the number of dice you want and then ignore//
//ex: you want 10 dice, but only want 8 so you do 10-8=2 so you run the 8 and then run the 2 that you want to ignore//
 var num = [1,2,3,4,5,6]

var ignoredArray = [];

function getRolls(x,y,z){
  var end = x - z
  for(var count =1; count < end;count++){
    var num=Math.ceil(Math.random()* y)
    $("ol").append("<li>"+num+"</li>")
  }

    for(var count =1; count < z;count++){
      var num=Math.ceil(Math.random()* y)
      ignoredArray.push(num)
    }
    ignoredArray.forEach(function(e){
      $("ul").append("<li>"+e+"</li>")
    }
  );
}
