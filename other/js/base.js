  function getClientHeight() {
            if(document.documentElement) {
                return document.documentElement.clientHeight;
            } else {
                return document.body.clientHeight;
            }
        };
        
        function getClientWidth() {
            if(document.documentElement) {
                return document.documentElement.clientWidth;
            } else {
                return document.body.clientWidth;
            }
        };