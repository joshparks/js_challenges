var alpha_soup = (function() {
	
	var run = function() {
		
		var input = document.getElementById('alpha_soup_input').value;
		var display = document.getElementById('alpha_soup_result');
		
		var result = input.split('').sort().join('');
		
		display.innerHTML = result;
		
	}
	
	return {
		run: run
	}
	
})();