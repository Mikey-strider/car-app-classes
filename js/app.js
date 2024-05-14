console.log('app is running')

//We want to have some input from the user which we can receive information
// about the make model and color
//and we press a crete button we want to make the car obj
//then show a message on the screen in the color of the car color 
//describing the make and model

///Lets get the what is written in the inmout and make input
//when we press the create car button

//cache our variables
const makeInputEle = document.querySelector('#make');
const modelInputEle = document.querySelector('#model');
const colorInputEle = document.querySelector('#color');
const createCarBtnEle = document.querySelector('button');

const carListUlEle = document.querySelector('#car-list');
const cars = [];

createCarBtnEle.addEventListener('click', () => {
  if(makeInputEle.value !== ''){
    // create our new car
    const myNewCar = new Car(makeInputEle.value, modelInputEle.value, false, colorInputEle.value);
    cars.push(myNewCar)

    //clear value
    makeInputEle.value = '';
    modelInputEle.value = '';
    colorInputEle.value = '';
    
    const carEl = myNewCar.createCarElement();
    carListUlEle.appendChild(carEl)
    
  }
  
})

//form on left hand side with inputs and buttons verticle with list on the right hand side
//click on the car to delete them from the list
//display nextCarId
//add price property to car
//more advanced idea, Sort() cars on the page by price or Filter() by the make
//have a button next to each car called "paint" that when clicked will change the color of 
//the car in the array as well as the text color of the car listed
//make a git repo and push to github














const myFirstCar = {
  make: 'Toyota',
  model: 'Corolla',
  color: 'black',
};

//defining a class
//blueprint for creating obj's
class Car {

  //constructor is a predefined method
  //that gets called when we instantiate a class new Car()
  constructor(make, model, isRunning, color) {
    this.make = make;
    this.model = model;
    this.isRunning = isRunning;
    this.color = color;
    this.id = Car.nextCarId;
    Car.nextCarId += 1;
  }

    //variable on the class itself
  static nextCarId = 1;

  start(){
    //this refers to the obj calling the method
    this.isRunning = true;
    console.log(`This ${this.make} is running!!!!!`)
  }
  stop(){
    this.isRunning = false;
    console.log(`This ${this.make} is turned off!!!!`)
  }
  //create a car method
  createCarElement(){
    const carLiEle = document.createElement('li');
    carLiEle.className = 'made-car-item';
    carLiEle.innerText = `Make: ${this.make} Model: ${this.model} Color: ${this.color} `;
    carLiEle.style.color = this.color;
    return carLiEle
  }
}

//inhertiance
class ElectricCar extends Car {
  constructor(make, model, isRunning, color, batterCharge){
    super(make, model, isRunning, color);
    this.batterCharge = batterCharge
  }

  
}


//instatiating the class
//make an obj from the cad class and store it in the car1 variable
const car1 = new Car('honda', 'civic', false, 'blue-gray');
const car2 = new Car('mazda', 'mazda3', false, 'white');
const mypoleStar = new ElectricCar('polestar', 'view', false, 'black', 100)
car1.start()
car2.start()
car1.stop()
car2.stop()
console.log(car1, ' <----- car1')
console.log(car2, ' <----- car2')
console.log(mypoleStar,)
//car1 is an instance of the Car class 
//car1 is an obj from the car class



