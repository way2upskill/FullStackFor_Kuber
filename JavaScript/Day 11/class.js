class Dog{
    constructor(breed,age){
        this.breed=breed;
        this.age=age;
    }
    bark(){
        console.log(`The dog  who bark is  ${this.breed}.`)
    }
}
const doggy=new Dog("Husky",2);
doggy.bark();
