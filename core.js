//alert(String.fromCharCode(event.keyCode));

var STRING_EMPTY = "";
var highlightCssClass = "nomouse-chrome-extension-highlight";
var pointer = -1;
var selectedUrl = STRING_EMPTY;

var KEY_ARROW_DOWN = 40;
var KEY_ARROW_RIGHT = 39;
var KEY_ARROW_LEFT = 37;
var KEY_ARROW_UP = 38;
var KEY_SPECIAL_ENTER = 13;

document.onkeydown = function (e) {

    $("span#knavm").remove() //Remove default and buggy google keyboard navigation

    if (e.shiftKey) {

        //find all search results
        var eles = $(".g");
        var elementsCount = eles.length;

        //determine if ctrl key is down (command key on Mac)
        if (navigator.appVersion.indexOf("Mac") !=- 1) {
            var NEW_TAB = event.metaKey; //true if OS is Mac and command key is down
        } else {
            var NEW_TAB = event.ctrlKey; //true if OS is not Mac and ctrl key is down
        }

        if (e.keyCode == KEY_SPECIAL_ENTER && NEW_TAB == false && selectedUrl != STRING_EMPTY) {

            //shift + enter = go to highlighted
            window.location = selectedUrl;

        } else if (e.keyCode == KEY_SPECIAL_ENTER && NEW_TAB == true && selectedUrl != STRING_EMPTY) {

            //ctrl + shift + enter = go to highlighted in new tab
            window.open(selectedUrl);

        } else if (e.keyCode == KEY_ARROW_RIGHT && selectedUrl != STRING_EMPTY) {

            //go to next page
            window.location = $(".navend:last a").attr("href");

        } else if (e.keyCode == KEY_ARROW_LEFT && selectedUrl != STRING_EMPTY) {

            //go to previous page
            if ($("td.cur").text()!=1) //if we are on the first page, we can't go back
                window.location = $(".navend:first a").attr("href");

        } else if (e.keyCode == KEY_ARROW_DOWN || e.keyCode == KEY_ARROW_UP) {

            //turn off highlight for previous item
            eles.eq(pointer).removeClass(highlightCssClass);

            //highlight current item, go out of index and hide highlight
            //when user navigates over the limit
            if (e.keyCode == KEY_ARROW_DOWN && pointer != elementsCount) {
                eles.eq(++pointer).addClass(highlightCssClass);
            } else if (e.keyCode == KEY_ARROW_UP && pointer != -1) {
                eles.eq(--pointer).addClass(highlightCssClass);
            }

            //if no visible highlight, reset selectedUrl
            if(pointer==-1 || pointer == elementsCount){
                selectedUrl = STRING_EMPTY;
            } else {
                selectedUrl = eles.eq(pointer).find("a[href]:first").attr("href");
            }
        }

    } //shift

};
