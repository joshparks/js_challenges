var simple_adding = (function() {
	
	var run = function() {
		
		var input = document.getElementById('simple_adding_input').value;
		var display = document.getElementById('simple_adding_result');
		var result = 0;
		
		for(var i = input; i > 0; i--) {
			result += Number(i);
		}
		
		display.innerHTML = result;
		
		/***** BETTER *****//*
		 * 
		 * // The sum of the first N natural numbers is equal to n(n+1)/2
		 * 
		 * return (num*(num+1))/2;
		 * 
		 */
	}
	
	return {
		run: run
	}
	
})();