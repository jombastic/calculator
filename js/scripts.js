// Business (or back-end) logic:

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
	$("form#add").submit(function(event) {
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);

		$("#output").text(result);

		event.preventDefault();
	});

	$("form#subtract").submit(function(event) {
		var number1 = parseInt($("#sub1").val());
		var number2 = parseInt($("#sub2").val());
		var result = subtract(number1, number2);

		$("#output").text(result);

		event.preventDefault();
	});

	$("form#multiply").submit(function(event) {
		var number1 = parseInt($("#multi1").val());
		var number2 = parseInt($("#multi2").val());
		var result = multiply(number1, number2);

		$("#output").text(result);

		event.preventDefault();
	});

	$("form#divide").submit(function(event) {
		var number1 = parseInt($("#divi1").val());
		var number2 = parseInt($("#divi2").val());
		var result = divide(number1, number2);

		$("#output").text(result);

		event.preventDefault();
	});
});
