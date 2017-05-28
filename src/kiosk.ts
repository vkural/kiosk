interface IBrowser{
    Options : any
    Run     : any
}

abstract class Browser implements IBrowser {
    public Options : any = {
        hideCursor            : true,
        disableContextMenu    : true,
        disableImageDrag      : true,
        disableTextSelection  : true,
        disableTouchHighlight : true
    }

    public hideCursor() : void {
        // compatibility : https://quirksmode.org/dom/core/#t14
        let arr = <NodeListOf<HTMLElement>>document.querySelectorAll("*");
        
        for(var i = 0; i< arr.length; i++) {
            // compability : https://www.quirksmode.org/dom/w3c_css.html#t46
            arr[i].style.setProperty ("cursor", "none", "important");
        }
    }

    public disableContextMenu() : void{
        // compability : https://www.quirksmode.org/dom/events/contextmenu.html
        window.oncontextmenu = function () { return false; }
    }

    public Run() : void {
        if(this.Options.hideCursor){
            this.hideCursor();
        }

        if(this.Options. disableContextMenu){
            this.disableContextMenu();
        }
    }
}

class Chrome  extends Browser { 
    constructor() {
        super();
    }

}

class Firefox extends Browser{
    constructor(){
        super();
    }  
}

class BrowserFactory {
    private static _ua : string = (window.navigator && navigator.userAgent ) || '';
    private static _av : string = (window.navigator && navigator.appVersion) || '';
    private static _is : any = {
      ie      : function() { return /msie/i                                           .test(BrowserFactory._ua); },
      ie6     : function() { return /msie 6/i                                         .test(BrowserFactory._ua); },
      ie7     : function() { return /msie 7/i                                         .test(BrowserFactory._ua); },
      ie8     : function() { return /msie 8/i                                         .test(BrowserFactory._ua); },
      ie9     : function() { return /msie 9/i                                         .test(BrowserFactory._ua); },
      ie10    : function() { return /msie 10/i                                        .test(BrowserFactory._ua); },
      ie11    : function() { return /Trident.*rv[ :]*11\./                            .test(BrowserFactory._ua); },
      firefox : function() { return /firefox/i                                        .test(BrowserFactory._ua); },
      gecko   : function() { return /gecko/i                                          .test(BrowserFactory._ua); },
      opera   : function() { return /opera/i                                          .test(BrowserFactory._ua); },
      safari  : function() { return /webkit\W(?!.*chrome).*safari\W/i                 .test(BrowserFactory._ua); },
      chrome  : function() { return /webkit\W.*(chrome|chromium)\W/i                  .test(BrowserFactory._ua); },
      webkit  : function() { return /webkit\W/i                                       .test(BrowserFactory._ua); },
      mobile  : function() { return /iphone|ipod|(android.*?mobile)|blackberry|nokia/i.test(BrowserFactory._ua); },
      tablet  : function() { return /ipad|android(?!.*mobile)/i                       .test(BrowserFactory._ua); },
      desktop : function() { return !this.mobile() && !this.tablet();                                  },
      kindle  : function() { return /kindle|silk/i                                    .test(BrowserFactory._ua); },
      tv      : function() { return /googletv|sonydtv|appletv|roku|smarttv/i          .test(BrowserFactory._ua); },
      windows : function() { return /win/i                                            .test(BrowserFactory._av); },
      mac     : function() { return /mac/i                                            .test(BrowserFactory._av); },
      unix    : function() { return /x11/i                                            .test(BrowserFactory._av); },
      linux   : function() { return /linux/i                                          .test(BrowserFactory._av); }
    }        

    public static getBrowser(this: BrowserFactory) : any {
        if(BrowserFactory._is.chrome ()){ return new Chrome (); }
        if(BrowserFactory._is.firefox()){ return new Firefox(); }        
    }
}

class Kiosk {
    constructor(){

    }
}

