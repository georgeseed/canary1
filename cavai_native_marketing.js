    // Converse ID 1363-2572-3381-20504 generated 2022-08-03T13:41:34.772Z
    (function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1659533964121-1659362885104-1658305666368-1657724053390-1657723473892-1657700843814-f022cc7ed9d4c4ae081176d591895e1b.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;

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

async function(){
  await attachHandler()
  target.addEventListener('click', clickFunction, true);
  target.addEventListener('touchstart', clickFunction, true);
}

function attachHandler(){
int count = 0;
console.log(count);
int maxTries = 3;
    while(true) {
        try {
          setTimeout(function(){
          var target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
          var clickElement = document.createElement("div");
          clickElement.style.position = "absolute";
          clickElement.style.left = "0px";
          clickElement.style.top = "0px";
          clickElement.style.width = "100%";
          clickElement.style.height = "100%";
          if(target != null){
              target.appendChild(clickElement);
          } else{
              target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
          }},1000);
        } catch (e) {
            if (++count == maxTries) throw e;
        }
    }
}

var clickFunction = function() {

    /*cavai code for clicking*/
    const openBubble = new MouseEvent('click');
    document.querySelector('.adbotic-chatbot-bubble-mob').dispatchEvent(openBubble);

    event.preventDefault();
    event.stopPropagation();
    return false;
}
