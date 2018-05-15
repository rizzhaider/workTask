
export class CategoryType {
    private constructor(public value:string){}

    toString(){
        return this.value;
    }

    static CATEGORY = new CategoryType("c");
    static SUBCATEGORY = new CategoryType("s")
    

    
}