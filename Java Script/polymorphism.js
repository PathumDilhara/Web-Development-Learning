class Animal{
    constructor(){
        console.log("Animal is created");
    }

    makeSound(){
        console.log("Animals generaly make sounds");
    }
    
    doThings(){
        console.log("Animal do things");
    }
}

class Dog extends Animal{

    constructor(){
        super();
        console.log("Dog is created");
    }

    makeSound(){
        console.log("Dog normaly bark");
    }
}

// Obj creation
tommy = new Dog;

// polymorphism dog class is override parent's makeSound method
tommy.makeSound();

// since doThings is not overrrided by child class(dog) when accessing access the parent's class method
tommy.doThings();