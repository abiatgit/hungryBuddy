class Car {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  printname() {
    console.log(`car color is =${this.color}`);
  }
}
class Mycar extends Car{
    constructor(year,name,color){
        super(name,color)
        this.year=year
    }
    details(){
        console.log(`this is my ${this.name} : color${this.color} : registerd  year = ${this.year}`)
    }
}

const kidilamCar= new Mycar("benz","red",1990)

kidilamCar.details()