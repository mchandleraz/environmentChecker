(function (window, document, undefined) {
	
	var environmentChecker = {},
        currentEnvironment = '',
        browserWidth = 0;

	environmentChecker.width = function () {
		return environmentChecker.browserWidth;
	}

	environmentChecker.currentEnvironment = function () {
		return currentEnvironment;
	}

	environmentChecker.init = function () {
        //Update browser width
        browserWidth = getWidth();

        if (browserWidth < 600) {
			currentEnvironment = 'mobile';
		} else if (browserWidth >= 600 && browserWidth < 960) {
			currentEnvironment = 'tablet';
		} else if (browserWidth >= 960) {
			currentEnvironment = 'desktop';
		}

        // TODO: Attach event for resizing
        if (window.attachEvent) {
            // window.attachEvent("onresize", );
        } else if (window.addEventListener) {
            // window.addEventListener("resize", , true);
        }
    };

    var getWidth = function () {
        var x = 0,
            testQuery = null,
            supportsQueries = false;

        if(typeof window.matchMedia === "function"){
            testQuery = window.matchMedia('(width: 100px)');

            if(typeof testQuery.addListener !== "undefined"){
                supportsQueries = true;
            }
        }

        if(supportsQueries){
            testQuery = window.matchMedia('(width: 100px)');

            //Browsers that support match media we will test our method does same as media queries
            if(window.matchMedia('(width:'+window.innerWidth+'px)').matches){
                x = window.innerWidth;
            }
            else if(window.matchMedia('(width:'+window.innerWidth+'px)').matches){
                x = window.outerWidth;
            }
            else if(window.matchMedia('(width:'+document.body.clientWidth+'px)').matches){
                x = document.body.clientWidth;
            }
        }
        else if (typeof(document.body.clientWidth) === "number") {
            // newest gen browsers
            x = document.body.clientWidth;
        }
        else if( typeof( window.innerWidth ) === "number" ) {
            x = window.innerWidth;
        }
        else if( document.documentElement && document.documentElement.clientWidth ) {
            //IE 6+ in 'standards compliant mode'
            x = document.documentElement.clientWidth;
        }
        

        return x;
    };



    //Expose environmentChecker
    window.environmentChecker = environmentChecker;

}(window, document));