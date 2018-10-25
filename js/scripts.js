
function romanNumeral(number){
  if (number < 10) {
    return lessThanTen(number);
  } else if (number < 40){
    return tenThroughThirtyNine(number);
  } else if (number < 89) {
    return thirtynineThroughEightyNine(number);
  }
}

function lessThanTen(number){
  if (number <=3) {
    var romanNumeral = [];
    for (var i = 1; i <= number; i++){
      romanNumeral.push("I");
    }
    return romanNumeral.join("");
  } else if (number === 4){
    return "IV";
  } else if (number === 5){
    return "V";
  } else if (number <= 8){
    var romanNumeral = ["V"];
    var remainder = number % 5;
    for (var i = 1; i <= remainder; i++){
      romanNumeral.push("I");
    }
    return romanNumeral.join("");
  } else if (number === 9){
  return "IX";
  }
}

function tenThroughThirtyNine(number){
  var tens = number / 10;
  var remainder = number % 10;
  var romanNumeral =[];

  for (var i = 1; i <= tens; i++){
    romanNumeral.push("X");
  }
  romanNumeral.push(lessThanTen(remainder));
  return romanNumeral.join("");
}

function thirtynineThroughEightyNine(number){
  var tens = Math.floor(number / 10);
  var remainder = number % 10;
  var romanNumeral =[];
  var tensToPass = number - 50;

  if (tens === 4) {
    romanNumeral.push("XL");
    romanNumeral.push(lessThanTen(remainder));
  } else {
    romanNumeral.push("L");
    romanNumeral.push(tenThroughThirtyNine(tensToPass));
  }
  return romanNumeral.join("");
}




// User Interface Logic

$(document).ready(function(){
  $("#roman-numeral-form").submit(function(event){
    event.preventDefault();

     var inputNumber = parseInt($("input#number").val());
     var convertedNumber = romanNumeral(inputNumber);

     $("#results").text(convertedNumber);

  });
});
