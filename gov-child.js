
(function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.1646834989057-1646756433372-1646650660410-1646386617501-1646247855218-1646148144325-ad3eb22c441e34a52357ab9aa2cfe12c.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;
            
            s.dataset.clickMacro = '%%c1;cpdir=';
            s.dataset.bubbleAppearance = 'custom'

            target.document.body.appendChild(s);
        }
        try {
          async_load(window.top)
        } catch (error) {
          async_load(window)
        }
    })();
