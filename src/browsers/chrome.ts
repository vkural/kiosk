class Chrome  extends Browser { 
    constructor(userAgent: string, appVersion: string, appName: string, appCodeName: string) {
        super(userAgent, appVersion, appName, appCodeName);
    }  

    public disableTextSelection() : void{
        // compatibility : https://quirksmode.org/dom/core/#t14
        let arr = <NodeListOf<HTMLElement>>document.querySelectorAll("*");
        
        for(var i = 0; i< arr.length; i++) {
            // compability : https://www.quirksmode.org/dom/w3c_css.html#t46
            arr[i].style.setProperty ("-webkit-user-select", "none",  "important");
        }
    }        
}