// Encapsulation bundles the data(properties)and functions(methods)together while hiding internal details using private fields.
class Box{
    #content;
    constructor(content){
        this.#content=content;
    }
    getContent(){
        return this.#content;
    }
}
const myBox=new Box("secret messege");
console.log(myBox.getContent());
//console.log(myBox.#content);