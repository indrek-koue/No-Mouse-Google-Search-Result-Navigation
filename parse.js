//37-40 arrows
  // if (typeof event !== 'undefined') {
    // keyPress = event.keyCode;
  // }
  // else if (e) {
    // keyPress = e.which;
  // }
  
var counter := 0;

document.onkeydown = function (e) {
	
	var wasOverrided := false;
	if (typeof event !== 'undefined') {
		
		var results = document.getElementsByClassName("g");
		
		//find all links
		var links;
		for (var i = 0; i < results.length; i++){
		links[i] = results[i].getElementsByTagName("a");
		}
		
		
		//down
		if(event.keyCode == 40){
			counter++;
		}
		//up
		else if (event.keyCode == 38 && counter != 0){
			counter--;
		}
	
		results[counter].style.background = "rgba(255,0,0,0.1) !important";
	
		wasOverrided = true;
	}
  
//your_array.push(String.fromCharCode(keyPress));
// alert(String.fromCharCode(keyPress));
	return !wasOverrided;   // Prevents the default action
};