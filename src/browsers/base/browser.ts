abstract class Browser {
    private _ua  : string;
    private _av  : string;
    private _an  : string;
    private _acn : string;

    public get getUserAgent() {
        return this._ua;
    }

    public get getAppVersion() {
        return this._av;
    }         

    public get getAppName() {
        return this._an;
    }    

    public get getAppCodeName() {
        return this._acn;
    }             

    public options : any  = {
        hideCursor            : true,
        disableContextMenu    : true,
        disableImageDrag      : true,
        disableTextSelection  : true
    }    
    
    constructor(ua : string, av : string, an : string, acn : string){
        this._ua  = ua;
        this._av  = av;
        this._an  = an;
        this._acn = acn;
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

    public run() : void {
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