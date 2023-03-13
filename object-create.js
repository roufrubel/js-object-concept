// 1. using object literal
const student = { name: 'Sakib', job: 'cricketer'};
// 2. constructor
const person = new Object();console.log(person);
// 3. 
// const human = Object.create(null)
const human = Object.create(student);
// 4. class
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};
const peop = new People('Amzad', 15);
// 5. functional
function Manus (name){
    this.name = name;
}
const man = new Manus('Razib');
console.log(man)

