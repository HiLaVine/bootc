const human = {
    name: 'Emmanuel',
    age: 22,
    lastname: 'Farrera'
};

//console.log(human);


human.id = Symbol('FAME010220')


//console.log(human);

const designer = {
    name: "Emmanuel",
    lastname: "Farrera",
    "The best designer": true
}
//console.log(designer["name"] + " " + designer["lastname"]);

//console.log(designer["The best designer"]);

human.blonde = false
human.age = human.age-10



delete human.lastname
delete human.age

//

function walk(){
    console.log("I'm walking");
}

const walk1 = function(){
    console.log("I'm walking with style")
}

function sum(a, b){ //Es pura ya que no modifica nada fuera de la función y siempre retorna el mismo resultado. 
    return a+b;
}

//console.log(sum(2, 3));

let name = "Emmanuel" //primite value
let nickname = name
name = "Sinai"

//console.log(name)
//console.log(nickname)

let human1 = {name: "Emmanuel"} 
let alien = human1  
alien.name = "Sinai"

//console.log(human1.name)
//console.log(alien.name)

function changeName(person, newName){
    person.name = newName;
    return person;
}

changeName(human, "Ame")

const fruits = {
    0: "Banana",
    1: "orange",
    2: "apple"
}

const fruitsArray = ["Banana", "orange", "apple"]

//console.log(fruitsArray[0])

//console.log(typeof(fruitsArray))

/*for (let i = 0; i < fruitsArray.length; i++){
    console.log(fruitsArray[i])
}*/

