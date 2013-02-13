//alert(String.fromCharCode(event.keyCode));

var pointer = 0;
document.onkeydown = function (e) {

    if (event.shiftKey) {
        var eles = $("div.kaka");
        var elementsCount = eles.length;

        if (event.keyCode == 40) {
            //down          
            if (pointer != elementsCount - 1) {
                eles.eq(pointer).toggleClass("g");
                pointer++;
                eles.eq(pointer).toggleClass("g");
            }
        } else if (event.keyCode == 38) {
            //up
            if (pointer != 0) {
                eles.eq(pointer).toggleClass("g");
                pointer--;
                eles.eq(pointer).toggleClass("g");
            }
        }
    }
};