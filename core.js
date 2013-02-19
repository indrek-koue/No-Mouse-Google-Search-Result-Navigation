//alert(String.fromCharCode(event.keyCode));

var highlightCssClass = "nomouse-chrome-extension-highlight";
var pointer = -1;
var selectedUrl = STRING_EMPTY;

var KEY_ARROW_DOWN = 40;
var KEY_ARROW_RIGHT = 39;
var KEY_ARROW_UP = 38;
var KEY_SPECIAL_ENTER = 13;

//var CSS_HIGHLIGHT_KEY = "background-color";
//var CSS_HIGHLIGHT_VALUE = "rgba(255, 0, 0, 0.4) !important";

var STRING_EMPTY = "";
document.onkeydown = function (e) {

    if (e.shiftKey) {
        var eles = $("li.g");
        var elementsCount = eles.length;

        if (e.keyCode == KEY_ARROW_RIGHT && selectedUrl != STRING_EMPTY) {
		//alert("goto: " + selectedUrl);
		window.location = selectedUrl;
		} else if (e.keyCode == KEY_ARROW_DOWN || e.keyCode == KEY_ARROW_UP) {
            //turn off higlight for previous item
            eles.eq(pointer).removeClass(highlightCssClass);
						
            //highlight current item, go out of index and hide highlight 
			//when user navigates over the limit
            if (e.keyCode == KEY_ARROW_DOWN && pointer != elementsCount) {
                eles.eq(++pointer).addClass(highlightCssClass);
            } else if (e.keyCode == KEY_ARROW_UP && pointer != -1) {
                eles.eq(--pointer).addClass(highlightCssClass);
            }
      
        selectedUrl = eles.eq(pointer).find("a[href]:first").attr("href");
  
		}//key
    }//shift
};