  (function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1627298841620-1627288268379-1626873718672-1621429862720-1617810558896-23fbff718ad66343089e7b871fec1c6e.min.js?bust=' + Date.now();
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

    window.onload = function() {
    	document.querySelector('.ayl_v_ckr_b').addEventListener('click', function() {
    			const openBubble = new MouseEvent('click');
    			document.querySelector('.adbotic-chatbot-bubble-mob').dispatchEvent(openBubble);
    	});

    	document.querySelector('.ayl_v_ckr_b').addEventListener('touchstart', function() {
    			const openBubble = new MouseEvent('click');
    			document.querySelector('.adbotic-chatbot-bubble-mob').dispatchEvent(openBubble);
    	});

    };
