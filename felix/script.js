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

let arr = [];

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

        arr.push(this);
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



for (let val of arr) {
    document.getElementById("demo").innerHTML += val.printInfo();
}