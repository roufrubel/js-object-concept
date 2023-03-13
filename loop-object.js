const bottle = {color: 'yellow', hold: 'water', price: 50, isCleaned: true};
/*
for(let i = 0; i <10; i++) {}
for(const num of numbers){}  //array
for(const prop in student){}  //object
*/
for(const prop in bottle){
    // console.log(prop)
    // console.log(prop, bottle[prop])
};
const keys = Object.keys(bottle);
// console.log(keys)
for(const key of keys){
    // console.log(key, bottle[key])
};
const entries = Object.entries(bottle);
// console.log(entries)
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
};