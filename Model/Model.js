import {TODOLIST2} from '../adatok.js'

class Model{
    #list = [];
    constructor(){
        this.#list = TODOLIST2;
    }

    ujAdat(objektum){
        this.#list.push(objektum);
    }

    getList(){
        return this.#list
    }
}

export default Model