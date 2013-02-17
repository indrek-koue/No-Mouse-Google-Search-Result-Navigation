//alert(String.fromCharCode(event.keyCode));

var highlightCssClass = "nomouse-chrome-extension-highlight";
var pointer = -1;
var selectedUrl = "";

var KEY_ARROW_DOWN = 40;
var KEY_ARROW_UP = 38;
var KEY_SPECIAL_ENTER = 13;

document.onkeydown = function (e) {

    if (e.shiftKey) {
		//alert("shift");
        var eles = $("li.g");
        var elementsCount = eles.length;
		
		//alert(eles.length);

        if (e.keyCode == KEY_SPECIAL_ENTER && selectedUrl != "") {
            window.location = selectedUrl;
        } else if (e.keyCode == KEY_ARROW_DOWN || e.keyCode == KEY_ARROW_UP) {
            //turn off higlight for previous item
            eles.eq(pointer).removeClass(highlightCssClass);
			
            //highlight current item
            if (e.keyCode == KEY_ARROW_DOWN && pointer != elementsCount - 1) {
                eles.eq(++pointer).addClass(highlightCssClass);
            } else if (e.keyCode == KEY_ARROW_UP && pointer != 0) {
                eles.eq(--pointer).addClass(highlightCssClass);
            }
       //get selected section url
        selectedUrl = eles.eq(pointer).find("a[href]:first").attr("href");
        alert(urlString);
  
		}//key
    }//shift
};