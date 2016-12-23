var first_reverse = (function() {

	var run = function() {

		var input = document.getElementById('first_reverse_input').value;
		var display = document.getElementById('first_reverse_result');

		 var split = input.split(''); 
		 var arr = [];
		 
		 for (var i = split.length; i >= 0; i--) { 
		 		arr.push(split[i]); 
		 }
		 
		 var val = arr.join('');
		 
		 display.innerHTML = val;
		
		
		 /***** BEST *****//*
		 * 
		 * display.innerHTML = input.split('').reverse().join('');
		 *  
		 */
		
		 
		/***** BETTER *****//*
		 * 
		 * var newString = "";
		 * 
		 * for (var i = str.length - 1; i >= 0; i--) { 
		 * 		newString = newString + str.charAt(i); 
		 * }
		 * 
		 * display.innerHTML = newStr;
		 * 
		 */
		
	}

	return {
		run : run
	}

})();