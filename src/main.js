//var a = 'Test1';
//let b = 'Test2';

/*
function testVar(){
  var a = 30;
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

for(let i = 0; i < 10; i++){
  console.log(i);
}

console.log(i);


const colors = [];

colors.push('red');
colors.push('blue');

colors = 'Green';

console.log(colors);
*/


"use strict"

let myVar = 'michu';
let myOtherVar = 'jest super'
console.log(myVar + myOtherVar);


function testVar() {
    var a = 30;
    if (true) {
        var a = 50;
        console.log(a);

    }
    //to jest poza blokiem if
    console.log(a);
}


//wywolanie funkcji
testVar(); //wynik 50 50

function testLet() {
    let a = 30;
    if (true) {
        let a = 50;
        console.log(a);
    }
    console.log(a);
}


//wywolanie funkcji z let
testLet(); //50 30

for (var i = 0; i < 10; i++) {
    console.log(i); //od 1 do 9 
}

console.log(i); //tutaj jest 10 ?

console.log('--------------------------');


for (let j = 0; j < 10; j++) {

    console.log(j);
}


//tutaj blad - poza cialem funcji j nie isteniej
//console.log(j);


console.log('--------------------------');

//to jest stale
const colors = [];

colors.push('red');
colors.push('blue');


//jesli probójem zmienic stała - blad
//colors = 'black';


//console.log(colors);



class User {

    constructor(username, email, password) {

        this.username = username; //uwaga coc jesli tutaj wpiszemy User? lub mała literą user
        this.email = email;
        this.password = password;
    }

    register() {
        //console.log(this.username + 'this usernam is now registered'); //tutaj powonno byc return
        return (this.username + 'this usernam is now registered');
    }

    //metoda statyczna

    static countUsers() {
        return 'I am static method';
    }


}




let bob = new User('bob', 'bog@gmail.com', '123');

//bob.register();

console.log(bob.register());

//podobnie jak w php nie trzeba tworzyć instancji - przy metodach statycznych
User.countUsers;

console.log(User.countUsers());


//dziedziczenie klas

class Member extends User {


    constructor(username, email, password, memberPackage2) { //uwaga na nazwy!!!

        //odwolanie do propeties wyzszej klasy
        super(username, email, password);

        //wlasciwosc tylko dld tej klasy
        this.mypackage = memberPackage2; //nazwa w metodzie musi byc po 2 stronie funkcji


    }

    getPackage() {
        return (this.username + 'is subscriberd to ' + this.mypackage);
    }

}

let mike = new Member('mike', 'mike@gmail', 'haslo', 'Super Packageaaaaaaaaaaa');

//?
console.log(mike.getPackage());


//mozna takze uzuwac metod super klasy

console.log(mike.register());