
export class Addresstype{
    private constructor(public value:string){}

    toString(){
        return this.value;
    }

    static STATE = new Addresstype("s");
    static DISTRICT = new Addresstype("d");
    static BLOCK = new Addresstype("b");
    static VILLAGE = new Addresstype("v");
    

    
}