class MegjelenitSor {
  #adat = {};
  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.tablaElem = szuloElem;
    this.index = index;
    this.#sor();
    this.sorElem = this.tablaElem.children("tr:last-child");

    this.KESZ = this.sorElem.children("td").children(".kesz");
    this.KESZ.on("click", () => {
      this.#esemenyTrigger("kesz");
      this.sorElem.css("background-color", "lightgreen");
    });

    this.MEGSE = this.sorElem.children("td").children(".megsem");
    this.MEGSE.on("click", () => {
      this.#esemenyTrigger("megsem");
      this.sorElem.css("background", "none");
    });

    this.MEGSE = this.sorElem.children("td").children(".torol");
    this.MEGSE.on("click", () => {
      this.#esemenyTrigger("adatTorles");
      this.sorElem.remove();
    });
  }

  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      const element = this.#adat[key];
      txt += `<td class= " border-2 ">${element}</td>`;
    }
    txt += `<td><button class = "kesz"> ✅ </button> <button class = "megsem"> ❌ </button> <button class = "torol"> ✂ </button></td>`;
    this.tablaElem.append(txt);
  }
  
  #esemenyTrigger(esemenynev) {
    const esmenyem = new CustomEvent((esemenynev, { detail: this }));
    window.dispatchEvent(esmenyem);
  }

  /* ALT+SHIFT+A */
}

export default MegjelenitSor;
