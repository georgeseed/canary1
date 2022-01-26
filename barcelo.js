setTimeout(function(){ 
    (function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1642773583544-1607009155586-1606837433355-9d0e3b51c5550385332f9af00e62b366.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;
            
            s.dataset.clickMacro = 'MACRO_PLACEHOLDER';
            s.dataset.bubbleAppearance = 'default'

            target.document.body.appendChild(s);
        }
        try {
          async_load(window.top)
        } catch (error) {
          async_load(window)
        }
    })();

var target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
var clickElement = document.createElement("div");
clickElement.style.position = "absolute";
clickElement.style.left = "0px";
clickElement.style.top = "0px";
clickElement.style.width = "100%";
clickElement.style.height = "100%";
if(target != null){
    target.appendChild(clickElement);    
}else{
    target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
}

var clickFunction = function() {
    
    /*cavai code for clicking*/
    const openBubble = new MouseEvent('click');
    document.querySelector('.adbotic-chatbot-bubble-mob').dispatchEvent(openBubble);

    event.preventDefault();
    event.stopPropagation();
    return false;
}


setTimeout(function(){
    target.addEventListener('click', clickFunction, true);
target.addEventListener('touchstart', clickFunction, true);
},2000);

}, 1000);
