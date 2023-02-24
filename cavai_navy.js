
<script
  data-creative-id='500-50045-50054-51291'
  data-timestamp='2023-02-23T12:27:30.473Z'
>
(function() {
  var s   = document.createElement('script');
  s.src   = 'https://delivery-3.cavai.com/assets/creatives/51291/clegztjaw0bmw70j4840s3qey/built/assets/stub.js?bust='+Date.now();
  s.async = true;
  s.setAttribute('data-click-macro', 'MACRO_PLACEHOLDER');
  document.head.appendChild(s);
})();
</script>

var clickFunction = function() {

        /*cavai code for clicking*/
        const openBubble = new MouseEvent('click');
        document.querySelector('.adbotic-chatbot-bubble-mob').dispatchEvent(openBubble);

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
          var target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
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
              target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
              target.addEventListener('click', clickFunction, true);
              target.addEventListener('touchstart', clickFunction, true);
          }},1000);

          } catch (e) {
            console.log(`cavai error log: ${e}`)
          }
        });
