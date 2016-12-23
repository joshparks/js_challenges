var match_number = (function() {
	
	var run = function() {
		
		var input = document.getElementById('match_number_input').value;
		var display = document.getElementById('match_number_result');
		
		var min = 1;
		var max = 10;
		
		var cpu = Math.floor(Math.random()*(max-min+1)+min);
		var match = (Number(cpu) == Number(input)) ? 'match' : 'miss';
		var result = match + " (cpu) " + cpu;
		
		display.innerHTML = result;
	}
	
	return {
		run: run
	}
	
})();