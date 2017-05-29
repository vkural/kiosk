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
            disableTextSelection  : true
        }
    }    
    
    constructor(userAgent : string, appVersion : string, appName : string, appCodeName : string){
        this._userAgent   = userAgent;
        this._appVersion  = appVersion;
        this._appName     = appName;
        this._appCodeName = appCodeName;
    }   

    private hideCursor() : void {
        // compatibility : https://quirksmode.org/dom/core/#t14
        let arr = <NodeListOf<HTMLElement>>document.querySelectorAll("*");
        
        for(var i = 0; i< arr.length; i++) {
            // compability : https://www.quirksmode.org/dom/w3c_css.html#t46
            arr[i].style.setProperty ("cursor", "none", "important");
        }
    }

    private disableContextMenu() : void{
        // compability : https://www.quirksmode.org/dom/events/contextmenu.html
        window.oncontextmenu = function () { return false; }
    }

    private disableImageDrag() : void{
        // compability : https://www.w3schools.com/tags/ev_ondragstart.asp
        window.ondragstart  = function () { return false; }
    }

    protected abstract disableTextSelection () : void;

    public Run() : void {
        if(this.options.hideCursor){
            this.hideCursor();
        }

        if(this.options.disableContextMenu){
            this.disableContextMenu();
        }

        if(this.options.disableImageDrag){
            this.disableImageDrag();
        }

        if(this.options.disableTextSelection){
            this.disableTextSelection();
        }                                 
    }
}