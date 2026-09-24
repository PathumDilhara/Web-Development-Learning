class Rectangle {

    // each time obj created this constructor will call
    constructor(_width, _height,_color){
        this.width = _width;
        this.height = _height;
        this.color = _color;
        console.log("New recatngle obj created (Constructor)");
    }

    // Traditional fucntion
    getArea(){
        return this.width * this.height;
    }

    // act as a value of the class Rectangle
    get area(){
        return this.width * this.height;
    }

    set area(newArea){
        this.width = Math.sqrt(newArea)
        this.height = Math.sqrt(newArea) * 2
    }
}

const objRec = new Rectangle(10, 20, 'green');

// console.log(objRec.getArea());

console.log(objRec.area);

objRec.area = 25

console.log(objRec.area);
