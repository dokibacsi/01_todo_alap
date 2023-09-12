import Megjelenit from "./Megjelenit.js";
import { TODOLIST2 } from "./adatok.js";

$(()=>{
    const szuloElem = $(`.tarolo`)
    let megjelenites = new Megjelenit(TODOLIST2, szuloElem)

});