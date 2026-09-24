class Person{
    
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
        console.log(`Person created : ${_name}`);
    }
}

class Programmer extends Person{
    
    constructor(_name, _age, _language){
        super(_name, _age);
        this.name = _name;
        this.age = _age;
        this.language = _language;
        console.log(`Programmer created : ${_language}`);
    }
}

john = new Person("john", 20);

jane = new Programmer("jane", 25, 'Javascript')
