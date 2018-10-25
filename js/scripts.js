
function romanNumeral(number){
  if (number < 10) {
    return lessThanTen(number);
  } else if (number < 99){
    return tenThroughNinetyNine(number);
  } else if (number < 1000){
    return oneHundredToNineNintyNine(number);
  } else if (number < 4000){
    return nineNinetyNineTo3999(number);
  } else {
    return "Make sure to enter a numerical value. There aren't Roman Numerals for numbers over 3,999."
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

function tenThroughNinetyNine(number){
  var tens = Math.floor(number / 10);
  var romanNumeral =[];
  var remainder = number % 10;

  if (number < 40)  {
    for (var i = 1; i <= tens; i++){
      romanNumeral.push("X");
    }
  } else if (number < 50) {
    romanNumeral.push("XL");
  } else if (number < 90){
    romanNumeral.push("L");
    for (var i = 1; i <= (tens-5); i++) {
    romanNumeral.push("X");
    }
  } else if (number < 100){
    romanNumeral.push("XC");
  }
  romanNumeral.push(lessThanTen(remainder));
  return romanNumeral.join("");
}

function oneHundredToNineNintyNine(number){
  var hundreds = Math.floor(number/100);
  var romanNumeral = [];
  var remainder = number % 100;

  if (number < 400) {
    for (var i = 1; i <= hundreds; i++){
      romanNumeral.push("C");
    }
  } else if (number < 500) {
    romanNumeral.push("CD");
  } else if (number < 900){
    romanNumeral.push("D");
    for (var i = 1; i <= (hundreds-5); i++) {
    romanNumeral.push("C");
    }
  } else if (number < 1000){
    romanNumeral.push("CM");
  }
  romanNumeral.push(tenThroughNinetyNine(remainder));
  return romanNumeral.join("");
}

function nineNinetyNineTo3999(number){
  var thousands = Math.floor(number/1000);
  var romanNumeral = [];
  var remainder = number % 1000;

  if (number < 4000) {
    for (var i =1; i <= thousands; i++){
      romanNumeral.push("M");
    }
  }
  romanNumeral.push(oneHundredToNineNintyNine(remainder));
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
