//what does user see?
//a pizza, 3 topping buttons, 2 buttons for half and whole pizza toppings
//what can user do?
//user can click buttons to choose out of 3 toppings, they can choose half or whole pizza
//what does user expect?
//user expects to see toppings they chose to be added, and to see half or whole pizza filled with toppings of their choice.



//when user clicks on button topping will be added to pizza


$("input").on("change", function(){


switch($(this).attr("class")){
  case "cheeseLeft":
    $(".right").removeClass("cheese")
    $(".left").addClass("cheese")
    break;
case "cheeseWhole":
    $(".right, .left").addClass("cheese")
    break;
case "cheeseRight":
    $(".left").removeClass("cheese")
    $(".right").addClass("cheese")
    break;
case "pepLeft":
    $(".pepsLeft").removeClass("hidden")
    $(".pepsRight").addClass("hidden")
    break;
case "pepWhole":
    $(".pepsLeft, .pepsRight").removeClass("hidden")
    break;
case "pepRight":
    $(".pepsRight").removeClass("hidden")
    $(".pepsLeft").addClass("hidden")
    break;
case "shroomLeft":
    $(".shroomsLeft").removeClass("hidden")
    $(".shroomsRight").addClass("hidden")
    break;
case "shroomWhole":
    $(".shroomsLeft, .shroomsRight").removeClass("hidden")
    break;
case "shroomRight":
    $(".shroomsRight").removeClass("hidden")
    $(".shroomsLeft").addClass("hidden")
    break;
case "oliveLeft":
    $(".olivesLeft").removeClass("hidden")
    $(".olivesRight").addClass("hidden")
    break;
case "oliveWhole":
    $(".olivesLeft, .olivesRight").removeClass("hidden")
    break;
case "oliveRight":
    $(".olivesRight").removeClass("hidden")
    $(".olivesLeft").addClass("hidden")
    break;

}
});
