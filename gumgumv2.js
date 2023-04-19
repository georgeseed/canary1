(function() {
  var s   = top.document.createElement('script');
  s.src   = 'https://delivery-3.cavai.com/assets/creatives/51401/clepl68b205ita5j48mbd4xtf/built/assets/stub.js?bust='+Date.now();
  s.async = true;
  s.setAttribute('data-click-macro', 'MACRO_PLACEHOLDER');
  s.setAttribute('data-domain', 'DOMAIN_PLACEHOLDER');
  s.setAttribute('data-dsp', 'DSP_PLACEHOLDER');
  s.setAttribute('data-start-flow-trigger-id', 'cavai-trigger');
  top.document.head.appendChild(s);
})();

var clickFunction = function() {

        /*cavai code for clicking*/
        const openBubble = new MouseEvent('click');
        top.document.querySelector('#creativeHeader [class*="expandable-icon"]').click()

        event.preventDefault();
        event.stopPropagation();
        return false;
    }

function winLoad(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener("load", callback);
  }
}

winLoad(function() {
    console.log('page is fully loaded');
        try {
          setTimeout(function(){
          var target = document.getElementById('cavai-trigger');
          var clickElement = document.createElement("div");
          clickElement.style.position = "absolute";
          clickElement.style.left = "0px";
          clickElement.style.top = "0px";
          clickElement.style.width = "100%";
          clickElement.style.height = "100%";
          if(target != null){
              target.appendChild(clickElement);
              target.addEventListener('click', clickFunction, true);
              target.addEventListener('touchstart', clickFunction, true);
          } else{
              target = top.document.querySelectorAll('cavai-trigger')[0];
              target.addEventListener('click', clickFunction, true);
              target.addEventListener('touchstart', clickFunction, true);
          }},1000);

          } catch (e) {
            console.log(`cavai error log: ${e}`)
          }
        });
