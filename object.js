'use strict';
// object = {key : value}; object는 key와 value의 집합체이다.
// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function human(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
human(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Comeputed properties
// key should be always string //key는 타입으로
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj.key);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3.Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = {name: 'elile', age: 30};
console.log(person4);

// 4.Constuctor Function
function Person(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. int operator property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
//for (key in obj)
//console.clear()
//for (key in ellie) {
//   console.log(key);
//}

//for (value of iterable)
//const array = [1, 2, 4, 5];
//for (value of array){
//   console.log(value);
//}

// 7. Fun cloning 
// Object.assign(dest, [obj, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);