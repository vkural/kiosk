class Kiosk {
    private static _userAgent   : string = (window.navigator && navigator.userAgent  ) || '';
    private static _appVersion  : string = (window.navigator && navigator.appVersion ) || '';
    private static _appName     : string = (window.navigator && navigator.appName    ) || '';
    private static _appCodeName : string = (window.navigator && navigator.appCodeName) || '';
    private static _is : any = {
      ie11    : function() { return /Trident.*rv[ :]*11\./           .test(Kiosk._userAgent); },
      edge    : function() { return /edge/i                          .test(Kiosk._userAgent); },
      firefox : function() { return /firefox/i                       .test(Kiosk._userAgent); },
      opera   : function() { return /opera/i                         .test(Kiosk._userAgent); },
      safari  : function() { return /webkit\W(?!.*chrome).*safari\W/i.test(Kiosk._userAgent); },
      chrome  : function() { return /webkit\W.*(chrome|chromium)\W/i .test(Kiosk._userAgent); }
    }        

    public static getBrowser(this: Kiosk) : any {
        if(Kiosk._is.edge   ()){ return new Edge   (Kiosk._userAgent, Kiosk._appVersion, Kiosk._appName, Kiosk._appCodeName); }          
        if(Kiosk._is.chrome ()){ return new Chrome (Kiosk._userAgent, Kiosk._appVersion, Kiosk._appName, Kiosk._appCodeName); }
        if(Kiosk._is.firefox()){ return new Firefox(Kiosk._userAgent, Kiosk._appVersion, Kiosk._appName, Kiosk._appCodeName); }        
        if(Kiosk._is.safari ()){ return new Safari (Kiosk._userAgent, Kiosk._appVersion, Kiosk._appName, Kiosk._appCodeName); }       
        if(Kiosk._is.opera  ()){ return new Opera  (Kiosk._userAgent, Kiosk._appVersion, Kiosk._appName, Kiosk._appCodeName); }       
        if(Kiosk._is.ie11   ()){ return new IE     (Kiosk._userAgent, Kiosk._appVersion, Kiosk._appName, Kiosk._appCodeName); }       

        throw new EvalError('Your browser is not supported.');
    }
}