document.onkeydown = function(){
    if(window.event && window.event.keyCode == 123) {
        layer.msg("F12被禁用");
        event.keyCode=0;
        event.returnValue=false;
    }
}
