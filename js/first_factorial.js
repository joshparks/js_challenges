var first_factorial = (function() {

	var run = function() {

		var input = document.getElementById('first_factorial_input').value;
		var display = document.getElementById('first_factorial_result');

		var val = input;

		for (var i = input - 1; i > 0; i--) {
			val = val * i;
		}

		display.innerHTML = val;

		/***** BEST *****//*
		 * 
		 * // internal factorial function 
		 * function factorial(n) {
		 *  
		 *  	// terminate the recursion once we hit zero 
		 *  	if (n===0) { return 1; }
		 *  
		 *  	// otherwise keep calling the function recursively 
		 *  	else { return * factorial(n-1) * n; }
		 *  
		 *  }
		 * 
		 * return factorial(num);
		 * 
		 */

		/***** BETTER *****//*
		 * 
		 * var factorial = 1;
		 * 
		 * for (var i = 1; i <= num; i++) { 
		 * 		
		 * 		// multiply each number between 1 and num 
		 * 		factorial = factorial * i;
		 *  
		 * }
		 * 
		 * return factorial;
		 * 
		 */

	}

	return {
		run : run
	}

})();