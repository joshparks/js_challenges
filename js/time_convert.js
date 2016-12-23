var time_convert = (function() {
	
	var run = function() {
		
		var input = document.getElementById('time_convert_input').value;
		var display = document.getElementById('time_convert_result');
		
		var hrs = Math.floor(input / 60);
		var mins = input % 60;

		var result = padWithZero(hrs.toString()) + ":" + padWithZero(mins.toString());
		
		display.innerHTML = result;

		
	}
	
	// BONUS FOR 00:00
	var padWithZero = function(val) {
		
		if(val.length == 1) {
			 return "0" + val;
		} else {
			return val;
		}
		
	}
	
	return {
		run: run
	}
	
})();