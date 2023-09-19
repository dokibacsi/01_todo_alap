import Megjelenit from "../View/Megjelenit.js";
import Urlap from "../View/Urlap.js"
import Model from "../Model/Model.js";

class Controller{
    constructor(){
        const szuloElem = $(`.tarolo`)
        const MODEL = new Model()
        new Megjelenit(MODEL.getList(), szuloElem)
        new Urlap();

        $(window).on("ujAdatHozzaad", ()=>{
            console.log(event.detail);
            MODEL.ujAdat(event.detail);
            szuloElem.empty();
            new Megjelenit(MODEL.getList, szuloElem)
        });
    }
}

export default Controller