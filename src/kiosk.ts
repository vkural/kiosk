class Kiosk {
    private static _ua  : string = (window.navigator && navigator.userAgent  ) || '';
    private static _av  : string = (window.navigator && navigator.appVersion ) || '';
    private static _an  : string = (window.navigator && navigator.appName    ) || '';
    private static _acn : string = (window.navigator && navigator.appCodeName) || '';
    private static _is  : any = {
      ie11    : function() { return /Trident.*rv[ :]*11\./           .test(Kiosk._ua); },
      edge    : function() { return /edge/i                          .test(Kiosk._ua); },
      firefox : function() { return /firefox/i                       .test(Kiosk._ua); },
      opera   : function() { return /opera/i                         .test(Kiosk._ua); },
      safari  : function() { return /webkit\W(?!.*chrome).*safari\W/i.test(Kiosk._ua); },
      chrome  : function() { return /webkit\W.*(chrome|chromium)\W/i .test(Kiosk._ua); }
    }        

    public static getBrowser(this: Kiosk) : any {
        if(Kiosk._is.edge   ()){ return new Edge   (Kiosk._ua, Kiosk._av, Kiosk._an, Kiosk._acn); }          
        if(Kiosk._is.chrome ()){ return new Chrome (Kiosk._ua, Kiosk._av, Kiosk._an, Kiosk._acn); }
        if(Kiosk._is.firefox()){ return new Firefox(Kiosk._ua, Kiosk._av, Kiosk._an, Kiosk._acn); }        
        if(Kiosk._is.safari ()){ return new Safari (Kiosk._ua, Kiosk._av, Kiosk._an, Kiosk._acn); }       
        if(Kiosk._is.opera  ()){ return new Opera  (Kiosk._ua, Kiosk._av, Kiosk._an, Kiosk._acn); }       
        if(Kiosk._is.ie11   ()){ return new IE     (Kiosk._ua, Kiosk._av, Kiosk._an, Kiosk._acn); }       

        throw new EvalError('Your browser is not supported.');
    }
}