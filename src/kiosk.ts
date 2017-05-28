interface IBrowser{

}

abstract class Browser implements IBrowser {

}

class Chrome  extends Browser { 

}

class Firefox extends Browser{

}

export class BrowserFactory {
    private static _ua : string = (window.navigator && navigator.userAgent ) || '';
    private static _av : string = (window.navigator && navigator.appVersion) || '';
    private static _is : any = {
      ie      : function() { return /msie/i                                           .test(this._ua); },
      ie6     : function() { return /msie 6/i                                         .test(this._ua); },
      ie7     : function() { return /msie 7/i                                         .test(this._ua); },
      ie8     : function() { return /msie 8/i                                         .test(this._ua); },
      ie9     : function() { return /msie 9/i                                         .test(this._ua); },
      ie10    : function() { return /msie 10/i                                        .test(this._ua); },
      ie11    : function() { return /Trident.*rv[ :]*11\./                            .test(this._ua); },
      firefox : function() { return /firefox/i                                        .test(this._ua); },
      gecko   : function() { return /gecko/i                                          .test(this._ua); },
      opera   : function() { return /opera/i                                          .test(this._ua); },
      safari  : function() { return /webkit\W(?!.*chrome).*safari\W/i                 .test(this._ua); },
      chrome  : function() { return /webkit\W.*(chrome|chromium)\W/i                  .test(this._ua); },
      webkit  : function() { return /webkit\W/i                                       .test(this._ua); },
      mobile  : function() { return /iphone|ipod|(android.*?mobile)|blackberry|nokia/i.test(this._ua); },
      tablet  : function() { return /ipad|android(?!.*mobile)/i                       .test(this._ua); },
      desktop : function() { return !this.mobile() && !this.tablet();                                  },
      kindle  : function() { return /kindle|silk/i                                    .test(this._ua); },
      tv      : function() { return /googletv|sonydtv|appletv|roku|smarttv/i          .test(this._ua); },
      windows : function() { return /win/i                                            .test(this._av); },
      mac     : function() { return /mac/i                                            .test(this._av); },
      unix    : function() { return /x11/i                                            .test(this._av); },
      linux   : function() { return /linux/i                                          .test(this._av); }
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

