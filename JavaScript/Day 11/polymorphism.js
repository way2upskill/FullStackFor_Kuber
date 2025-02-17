// Poly:many
// Morphism: forms
// It let different classes use the same method name but behave differntly
class Animal{
    speak(){
        console.log("Makes Sound")
    }
}
class Dog extends Animal{
    speak(){
        console.log("Bark")
    }
}
class Cat extends Animal{
    speak(){
        console.log("Meow");
    }
}
const animals=[new Animal(),new Dog(),new Cat()];
animals.forEach(animal=>animal.speak());