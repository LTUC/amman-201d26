'use strict';


// function declaration
// you can call it before

/*
function funcName(params){
    code..
    return output
}

funcName(arguments)

*/

// function welcomeMessage(userName){
//   alert('welcome to our page ' + userName);
// }

// welcomeMessage('rawan');
// welcomeMessage('abdallah');

// let userName=prompt('whats your name');

// function getName(name) {
//     let output='hello '+ name;
//     return output;
// }
// console.log(getName(userName));


console.log(square(5));
function square(length) {
    let area = length**2;
    let perimter= length*4;

    return [area,perimter];
}


// if i want the area only
// console.log(square(5)[0]);



// function expression:
// you cant call before the initilization

let getAge = function (year) {
    let output =2021 - year;
    return output
}

console.log(getAge(1990));
console.log(getAge(1500));
console.log(getAge(2000));



// IIF

(function () {
    console.log('hello there from IIF');
})();

(function (userName) {
    console.log('hello there from IIF'+userName);
})('samer');



// Scopes

// global varibale
function question1() {
    
    let firstName='alaa';
    
    if (true) {
        // local varibale
        // let firstName='mohammad';
        let lastName='baroud';
        console.log('global variable',firstName);
        console.log('local variable',lastName);
    }
}
question1();
// acp


function question2() {
    // code.. 
}
question2();
// acp


// 7




// console.log('local variable',lastName);
