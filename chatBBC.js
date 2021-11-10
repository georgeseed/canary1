setTimeout(function(){ 
 (function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1636030866912-1636027596699-1635929254643-1635263886544-1634893085884-0f0795fe1aa930919393df59f97895d0.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;
            s.dataset.clickthroughUrl = 'https://ad.doubleclick.net/ddm/trackclk/N6602.3623628HPH_UK_6602/B26725750.318801160;dc_trk_aid=510996191;dc_trk_cid=64717704;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
            s.dataset.clickMacro = 'MACRO_PLACEHOLDER';
            s.dataset.bubbleAppearance = 'custom'

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
