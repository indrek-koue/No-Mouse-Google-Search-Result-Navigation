//40 - down
//38 - up

var counter = 0;
document.onkeydown = function (e) {

    if (event.shiftKey && event.keyCode == 40) {
        //alert(String.fromCharCode(event.keyCode));
        alert(++counter);
        var eles = $("div.kaka");
        eles.toggleClass("g");
    }

};