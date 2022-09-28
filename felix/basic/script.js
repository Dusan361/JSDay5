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
document.getElementById("personName").innerHTML = person.fullName();

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
document.getElementById("driversLicence").innerHTML = person2.drivingLicense;
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
document.getElementById("hobbies").innerHTML = person3.hobbies[0];



var car = {

    brand: "Volkswagen",
    automatic: true,
    age: 5,




}


document.getElementById("brandName").innerHTML = car.brand;

var car2 = {

    brand: "Audi",
    automatic: false,
    age: 8,




}


document.getElementById("automatic").innerHTML = car2.automatic;

var car3 = {

    brand: "Mercedes",
    automatic: true,
    age: 3,




}


document.getElementById("carAge").innerHTML = car3.age;

var animal = {

    animalName: "john",
    race: "lion",
    age: 8,


    fullName: function() {

        return this.animalName + ' ' + this.race;

    }

}

document.getElementById("animalName").innerHTML = animal.fullName();

var animal2 = {

    animalName: "doe",
    race: "dove",
    age: 3,


    fullName: function() {

        return this.animalName + ' ' + this.race;

    }

}
document.getElementById("race").innerHTML = animal2.race;

var animal3 = {

    animalName: "herbert",
    race: "panther",
    age: 2,


    fullName: function() {

        return this.animalName + ' ' + this.race;

    }

}
document.getElementById("age").innerHTML = animal3.age;