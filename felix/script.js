var person = {

    firstName: "john",
    lastName: "doe",
    age: 25,
    drivingLicense: true,
    hobbies: ['swim', 'read', 'coding'],

    fullName: function() {

        return this.firstName + ' ' + this.lastName;

    }

}

var person2 = {

    firstName: "max",
    lastName: "musterman",
    age: 29,
    drivingLicense: false,
    hobbies: ['coding', 'cooking', 'reading'],

    fullName: function() {

        return this.firstName + ' ' + this.lastName;

    }

}

var person3 = {

    firstName: "jane",
    lastName: "tarzan",
    age: 30,
    drivingLicense: false,
    hobbies: ['swim', 'jogging', 'sunbathing'],

    fullName: function() {

        return this.firstName + ' ' + this.lastName;

    }

}

console.table(person3)
document.getElementById("personName").innerHTML = person.firstName;
// document.getElementById("personName").innerHTML = person.fullName();

const people = [];

class Person {
    firstName;
    lastName;
    age;
    drivingLicense;
    hobbies;

    constructor(fname, lname, age, drivingLicense, hobbies) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.drivingLicense = drivingLicense;
        this.hobbies = hobbies;

        people.push(this);
    }

    printInfo() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.firstName}  ${this.lastName}</h5>
                <p class="card-text">${this.hobbies[0]} ${this.hobbies[1]}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
    }
}

let person1 = new Person("Felix", "B", 45, true, ["Swimming", "Training"]);
let person4 = new Person("X", "B", 49, true, ["Swimming", "Training"]);



class Professional extends Person {
    jobposition;
    salary;

    constructor(fname, lname, age, drivingLicense, hobbies, jobposition, salary) {
        super(fname, lname, age, drivingLicense, hobbies);
        // this.firstName = fname;
        // this.lastName = lname;
        // this.age = age;
        // this.img = img;
        // this.gym = gym;
        // this.hobbies = hobbies;

        this.jobposition = jobposition;
        this.salary = salary;
    }

    printInfo() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.jobposition} ${this.firstName}  ${this.lastName}</h5>
                <p class="card-text">${this.age} ${this.salary}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
    }
}

let person5 = new Professional("hans", "berger", 38, false, "swimming", "boss", 4000);
console.log(people)
for (let val of people) {
    document.getElementById("demo").innerHTML += val.printInfo();
}


var animal = {

    firstName: "john",
    species: "mammal",
    race: "lion",
    age: 8,
    carniovore: true,


    fullName: function() {

        return this.firstName + ' ' + this.race;

    }



}

var animal2 = {

    firstName: "jim",
    species: "bird",
    race: "dove",
    age: 2,
    carniovore: false,


    fullName: function() {

        return this.firstName + ' ' + this.race;

    }



}

var animal3 = {

    firstName: "sam",
    species: "fish",
    race: "shark",
    age: 5,
    carniovore: true,


    fullName: function() {

        return this.firstName + ' ' + this.race;

    }



}

const Animals = [];

class Animal {
    firstName;
    species;
    race;
    age;
    carniovore;

    constructor(fname, species, age, race, carniovore) {
        this.firstName = fname;
        this.species = species;
        this.age = age;
        this.race = race;
        this.carniovore = carniovore;

        Animals.push(this);
    }

    printInfo() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.firstName}  ${this.species}</h5>
                <p class="card-text">${this.race} ${this.carniovore}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
    }
}

let animal4 = new Animal("sam", "fish", 3, "shark", true)
let animal5 = new Animal("joe", "mammal", 3, "lion", true)

class Animalextd extends Animal {
    water;


    constructor(fname, species, age, race, carniovore, water) {
        super(fname, species, age, race, carniovore);

        this.water = water;

    }

    printInfo() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.water} ${this.firstName}  ${this.species}</h5>
                <p class="card-text">${this.age} ${this.race}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
    }
}

let animal6 = new Animalextd("leo", "lion", 5, "mammal", true, "sweet");




for (let val of Animals) {
    document.getElementById("demo").innerHTML += val.printInfo();
}


const Cars = [];

class Car {
    brand;
    automatic;
    age;
    color;

    constructor(brand, automatic, age, color) {
        this.brand = brand;
        this.automatic = automatic;
        this.age = age;
        this.color = color;


        Cars.push(this);
    }

    printInfo() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.brand}  ${this.automatic}</h5>
                <p class="card-text">${this.age} ${this.color}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
    }
}

let car4 = new Car("volkswagen", true, 5, "green")
let car5 = new Car("Audi", false, 3, "black")

class Motorbike extends Car {
    numberWheels;


    constructor(brand, automatic, age, color, numberWheels) {
        super(brand, automatic, age, color);

        this.numberWheels = numberWheels;

    }

    printInfo() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.numberWheels} ${this.brand}  ${this.color}</h5>
                <p class="card-text">${this.age} </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
    }
}

let car6 = new Motorbike("BMW", false, 2, "red", 2);


for (let val of Cars) {
    document.getElementById("demo").innerHTML += val.printInfo();
}