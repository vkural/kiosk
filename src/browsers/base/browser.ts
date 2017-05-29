abstract class Browser {
    private _userAgent   : string;
    private _appVersion  : string;
    private _appName     : string;
    private _appCodeName : string;

    public get userAgent() {
        return this._userAgent;
    }

    public get appVersion() {
        return this._appVersion;
    }         

    public get appName() {
        return this._appName;
    }    

    public get appCodeName() {
        return this._appCodeName;
    }             

    public get options() {
        return {
            hideCursor            : true,
            disableContextMenu    : true,
            disableImageDrag      : true,
            disableTextSelection  : true,
            disableTouchHighlight : true
        }
    }    
    
    constructor(userAgent : string, appVersion : string, appName : string, appCodeName : string){
        this._userAgent   = userAgent;
        this._appVersion  = appVersion;
        this._appName     = appName;
        this._appCodeName = appCodeName;
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

    public disableImageDrag() : void{
        // compability : https://www.quirksmode.org/dom/events/contextmenu.html
        window.ondragstart  = function () { return false; }
    }

    public Run() : void {
        if(this.options.hideCursor){
            this.hideCursor();
        }

        if(this.options.disableContextMenu){
            this.disableContextMenu();
        }
    }
}
