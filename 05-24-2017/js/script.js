$(document).ready(function(){
	/*********** PUT THINGS HERE ****************/

	/****** QUESTION 1 ************/
	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}

    /****** QUESTION 2 ************/
    // Same as above except output second to last char of a input string
	document.getElementById('returnLast_submit').onclick = function() {
				var text = document.getElementById('returnLast_submit').value;
				document.getElementById('returnLast_display').innerHTML = text.charAt(text.length - 1);
  }

	/****** QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not
	document.getElementById('checkWork_submit').onclick = function() {
				var text = document.getElementById('checkWork_input').value;
        var text2 = document.getElementById('ps3_p').innerHTML;
				var text3 = text2.split(" ");
				var answer = text2.indexOf(text);
        if (answer > -1) {
        	document.getElementById('checkWork_display').innerHTML = "YES";
        } else {
        	document.getElementById('checkWork_display').innerHTML = "NO";
        }
  }

	/****** QUESTION 4 ************/
	// Reverse string inputted by user
	document.getElementById('reverseString_submit').onclick = function() {
				var text = document.getElementById('reverseString_input').value;
  }
	function reverseString(text) {
		return text;
	}

	/****** QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable
	var firstMessage = ("HELLO WORLD")
	document.getElementById('helloworld_submit').onclick = function() {
				document.getElementById('helloworld_display').innerHTML = firstMessage;
	}

	/****** QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display
	document.getElementById('greet1_submit').onclick = function() {
		  var userName = document.getElementById('greet1_input').value;
			document.getElementById('greet1_display').innerHTML = ('Hello ' + userName ', welcome to the website';
	}

	/****** QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME
	document.getElementById('greet2_submit').onclick = function() {
		  var userName = document.getElementById('greet2_input').value;
	}
	if (userName == 'Alice' || userName == 'Bob' || userName == 'YOUR NAME') {
			document.getElementById('greet2_display').innerHTML = ('Hello ' + userName ', welcome to the website';
	}

	/****** QUESTION 8 ************/
	// Accept two integers from the user and display the larger
	document.getElementById('integerMax_submit').onclick = function() {
		  var integer1 = document.getElementById('integerMax_input1').value;
			var integer2 = document.getElementById('integerMax_input2').value;
			}
			if (integer1 > integer2)
			  {
			  document.getElementById('integerMax_display').innerHTML = ("The larger of "+ integer1 + " and "+ integer2 + " is "+ integer1 + ".");
			  }
			else
				if (integer2 > integer1)
				{
				document.getElementById('integerMax_display').innerHTML = ("The larger of "+ integer1 + " and "+ integer2 + " is "+ integer2 + ".");
				}
			else
			  {
			   document.getElementById('integerMax_display').innerHTML = ("The integers "+ integer1 + " and "+ integer2 + " are equal.");
			  }

	/****** QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)
	document.getElementById('integerSign_submit').onclick = function() {
		  var sign1 = document.getElementById('integerSign_input1').value;
			var sign2 = document.getElementById('integerSign_input2').value;
			var sign3 = document.getElementById('integerSign_input3').value;
			var product = (sign1*sign2*sign3);
				document.getElementById('integerSign_display').innerHTML = (Math.sign(product));
			}

	/****** QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest
	document.getElementById('integerSign_submit').onclick = function() {
		  var x = document.getElementById('integerSort_input1').value;
			var y = document.getElementById('integerSort_input2').value;
			var z = document.getElementById('integerSort_input3').value;
			}
			if (x>y && x>z)
			{
			        if (y>z)
			        {
			            document.getElementById('integerSort_display').innerHTML = (x + ", " + y + ", " +z);
			        }
			        else
			        {
			            document.getElementById('integerSort_display').innerHTML = (x + ", " + z + ", " +y);
			        }
			}
			else if (y>x && y >z)
			{
			        if (x>z)
			        {
			             document.getElementById('integerSort_display').innerHTML = (y + ", " + x + ", " +z);
			        }
			        else
			        {
			             document.getElementById('integerSort_display').innerHTML = (y + ", " + z + ", " +x);
			        }
			}
			else if (z>x && z>y)
			{
			        if (x>y)
			        {
			            document.getElementById('integerSort_display').innerHTML = (z + ", " + x + ", " +y);
			        }
			        else
			        {
			            document.getElementById('integerSort_display').innerHTML = (z + ", " + y + ", " +x);
			        }
			}

	/****** QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function
	document.getElementById('rps_submit').onclick = function() {
		var choice1 = document.getElementById('rps_player1').value.toLowerCase();
		var choice2 = document.getElementById('rps_player2').value.toLowerCase();
  }
		function play(choice1, choice2) {
		    if (choice1 === choice2) {
		        document.getElementById('rps_winner_display').innerHTML = ("The result is a tie.");
		    } if (choice1 === "rock") {
		        if (choice2 === "scissors") {
		            document.getElementById('rps_winner_display').innerHTML = ("Rock wins.");
		        } else {
		            document.getElementById('rps_winner_display').innerHTML = ("Paper wins.");
		        }
		    } if (choice1 === "paper") {
		        if (choice2 === "rock") {
		            document.getElementById('rps_winner_display').innerHTML = ("Paper wins.");
		        } else {
		            document.getElementById('rps_winner_display').innerHTML = ("Scissors win.");
		        }
		    } if (choice1 === "scissors") {
		        if (choice2 === "paper") {
		            document.getElementById('rps_winner_display').innerHTML = ("Scissors win.");
		        } else {
		            document.getElementById('rps_winner_display').innerHTML = ("Rock wins.");
		        }
		    }
		}

	/****** QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user
	document.getElementById('factoral_submit').onclick = function() {
		var factoralInput = document.getElementById('factoral_input').value;
		var total = 1;
	}
	for (i = 0; i < factoralInput; i++) {
	total = total * (factoralInput - i);
	} {
	document.getElementById('factoral_display').innerHTML = (factoralInput + '! = ' + total);
	}

	/****** QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****
	document.getElementById('star_submit').onclick = function() {
		document.getElementById('rps_winner_display').innerHTML = ("*<br>**<br>***<br>****<br>*****");
	}

	/****** QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)
	document.getElementById('base_exp_submit').onclick = function() {
		var base = document.getElementById('base_input').value;
		var exponent = document.getElementById('exp_input').value;
	} {
		document.getElementById('rps_winner_display').innerHTML = (Math.pow(base, exponent));
		}

	/****** QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"
	document.getElementById('fizzbuzz_submit').onclick = function() {
	for (var i=1; i <= 100; i++)
	{
    if (i % 15 == 0)
        document.getElementById('fizzbuzz_display').innerHTML = ("FizzBuzz");
    else if (i % 3 == 0)
        document.getElementById('fizzbuzz_display').innerHTML = ("Fizz");
    else if (i % 5 == 0)
        document.getElementById('fizzbuzz_display').innerHTML = ("Buzz");
    else
        document.getElementById('fizzbuzz_display').innerHTML = (i);
}

});
