//function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

//함수
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

//2. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log('${message} by ${from}');
}
showMessage('Hi!');

//4. Local scope
let globalMessage = 'global'; // global varuable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();

//5.Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

//6. Early return, early exit
//bad
function upgradeUswe(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// 1
const print = function(){ // anoymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2.Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
//anoymous function
const printYes = function(){
    console.log('yes!');
};

//named function
//better debugging in debugger`s stack traces
//recursions
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function(){
//   console.log(`simplePrint!`);
//};

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
const simpleMultiply = (a,b) => {
    //do something more
    return a * b;
};

//IIFE: Immediately Invoked Fucction Expression
(function hello(){
    console.log('IIFE');
})();
