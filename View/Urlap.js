class Urlap{
    #adat = {};
    
    constructor(adat, szuloElem){
        this.#adat = adat;
        this.urlapElem = szuloElem;
        this.urlapElem = $(".ujadat");
        this.#UrlapLetrehoz();
        this.tevElem = $("#tevekenysegInput");
        this.hatElem = $("#datumInput");
        this.subElem = $("#elkuldGomb")
        $(this.subElem).on("click", ()=>{
            this.tevAdat = this.tevElem.val()
            this.hatAdat = this.hatElem.val()
            console.log(this.tevAdat, this.hatAdat)
        })
    }

    #UrlapLetrehoz(){
        let txt = "";
        txt += "<input id = 'tevekenysegInput' type='text' placeholder='tevékenység' ></input>";
        txt += "<input id = 'datumInput' type='text' placeholder='határidő'></input>";
        txt += "<button id='elkuldGomb'>Elküldés</button>";

        this.urlapElem.append(txt);
    }
}

export default Urlap