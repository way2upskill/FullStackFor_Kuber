// Abstraction hides complex details. A base class can define a method that must be implement by subclass.
class Vehicle{
    constructor(){
        //preventing direct instialisation of vehicle
        if(new.target===Vehicle){
            throw new Error("Cannot instantiate Vehicle directly");
        }
    }
    move(){
        throw new error ("move() method must be implemented");
    }
}
class Car extends Vehicle{
    move(){
        console.log("The car drives");

    }
}
const mycar=new Car();
mycar.move();
const myVehicle=new Vehicle();