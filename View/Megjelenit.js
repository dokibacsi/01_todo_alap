import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit {
  #lista = [];

  constructor(lista, szuloElem) {
    this.#lista = lista;
    szuloElem.append(`<table class = "table table-bordered table striped">`);
    this.tablaElem = szuloElem.children("table");
    console.log(this.tablaElem);
    this.megjelenito();
  }

  megjelenito(lista) {
    let txt = "";
    this.#lista.forEach((elem) => {
        new MegjelenitSor(elem, this.tablaElem);
      /*txt += "<tr>";
      for (const kulcs in elem) {
        txt += `<td>${elem[kulcs]}</td>`;
      }
      txt += `<td><button class="kesz"> ✅ </button></td><td><button class="megsem"> ❌ </button></td><td><button class="torol"> 🗑 </button></td>`;
      txt += "</tr>";*/
    });
  }
}

export default Megjelenit;
