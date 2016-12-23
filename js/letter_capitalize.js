var letter_capitalize = (function() {
	
	var run = function() {
		
		var input = document.getElementById('letter_capitalize_input').value;
		var display = document.getElementById('letter_capitalize_result');
		
		var split = input.split(' ');
		
		for(var i = 0; i < split.length; i++) {
			
			split[i] = split[i].substr(0, 1).toUpperCase() + split[i].substr(1);
			
		}
		
		var result = split.join(' ');
		
		display.innerHTML = result;
		
		/***** BETTER *****//*
		 * 
		 * // our regex [a-z] matches every alphabetic character in the string
		 * // but the \b before it specifies a word boundary, in other words, nothing can
		 * // come before those letters therefore selecting every word in the string
		 * 
		 * return str.replace(/\b[a-z]/gi, function(char) {
		 * 		return char.toUpperCase();
		 * });
		 * 
		 */
	}
	
	return {
		run: run
	}
	
})();