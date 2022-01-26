setTimeout(function(){ 
    (function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1635162693395-1634546846987-1633894773473-1633523583973-a73be1e0b007534424b8a0ce76f3bc47.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;
            s.dataset.clickthroughUrl = 'https://ad.doubleclick.net/ddm/trackclk/N96004.279382DBMOCADO932121404-O/B26547771.316068574;dc_trk_aid=506500130;dc_trk_cid=157741196;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
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
