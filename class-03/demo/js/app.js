'use strict';

// let favouriteClub=prompt('is real madrid my favourite football club?');

// favouriteClub = favouriteClub.toLowerCase();

// let flag=false;

// if (favouriteClub ==='yes' || favouriteClub === 'y') {
//     alert('correct, good job');
// }else if(favouriteClub ==='no' || favouriteClub === 'n'){
//     alert('sorry thats wrong');
// }else{
//     flag=true;
//     alert ('please answer yes/y no/n');
// }


// let favouriteFood=prompt('is mlokheyeh my favourite food?');

// favouriteFood = favouriteFood.toLowerCase();

// if (favouriteFood ==='yes' || favouriteFood === 'y') {
//     alert('nope thats wrong');
// }else if(favouriteFood ==='no' || favouriteFood === 'n'){
//     alert('correct, good job');
// }else if(flag===true){
//     alert ('I told you to only answer with yes/y no/n');
// }else{
//     flag=true;
//     alert ('please answer yes/y no/n');
// }


// let favouriteFood=prompt('is mlokheyeh my favourite food?');

// favouriteFood = favouriteFood.toLowerCase();

// switch(favouriteFood.toLowerCase()){
//     case 'yes':
//     case 'y':
//         alert('nope thats wrong');
//         break;
//     case 'no':
//     case 'n':
//         alert('correct, good job');

//         break;
    
//     default:
//         if (flag === true) {
//             alert ('I said please answer yes/y no/n');
//         }else{
//             alert ('please answer yes/y no/n');

//         }
// }


/*
comparison operators:

== value only

5 =='5' => true
5 =='200' => false

=== value DataType:

5 ==='5' => false

5 === 5 => true

5 === 2000 =>flase

>
<
!= Not euqal for value only
!== Not equal for value and datatype
>=
<=


Logical:
AND 
&&
its only true when both are true

OR
||
its only false when both are false



Truthy:
true
1
'car'
5/2
'true'
'false'
'0'

Falsy:
false
0
''
'string'/2 =>NaN not a number
undefined

*/

// let firstName=prompt('whats your name');

// if (firstName) {
//   alert('truthy value');
// }else{
//   alert('falsy value');
// }



/*
Loops:
why: to reqpeat code for an amount of time without coy pasting the same code over and over again

for loop:
is used when we know how many times we will repeat the code

for(initialization; condition; update){
    do code..
}

increment:
initialization: i=0;
condition: i<5;
update i++

decrement:
initialization: i=10;
condition: i>0;
update i--


*/

// for (let i = 1; i <=5; i++) {
    
//     console.log('increment example',i);

// }

// for (let i = 6; i>1 ; i--) {
//     console.log('decrement example',i);
    
// }

// break
// to stop the loop when it reaches a point

// continue
// skip this iteration

// for (let i = 1; i <=5; i++) {
//     // if (i===3) {
//     //     break;
//     // }
        
//     if (i===3) {
//         continue;
//     }

        
//     console.log('increment example',i);
// }

/*
while 
if you dont how many times you'll loop through

while(condition){
    code will running while this condition is true
}


*/

// let userName=prompt('whats your name?');

// while (!userName) {
//   userName=prompt('please write something');
// }

// !false=> true
// !true => false



// let grade1=50;
// let grade2=51;
// let grade3=100;


/*
Arrays


*/

// let grades = [100,88,54,56,58,88,99];

// console.log('the whole array',grades);

// console.log('the first element', grades[0]);

// console.log('the fourth element', grades[3]);

// print an index for an element:
// console.log('get index for 88', grades.indexOf(88));

// print length
// console.log('print length', grades.length);

// array of multible:
// let info=['ahmad',34,3.9,['pizza','mansaf','burger']];
// console.log(info);


// add elements at the end of an array:
// grades.push(150);
// console.log('grades after pushing', grades);

// remove from the end:
// grades.pop();
// console.log('grades after removing', grades);


////////////////////////////////////////
// ########  DEMO  ######

/* to do list:
1) make sure the user name is not empty ( not a falsy value) X

2)ask the user 2 yes or no questions the user can answer with yes/y or no/n X

3)keep track of the score of the user and display it at the end add 1 point when the user answers correctly X

4) show in the console these foods in order 'burger','steak','pizza','mansaf' X
*/

let userName=prompt('whats your name?');

while (!userName) {
  userName=prompt('please write something');
}

alert('Hello there, ' + userName + ' glad to have you here');

let score=0;

let human=prompt('am i a robot');
human=human.toLowerCase();



if (human==='yes'||human==='y') {
    score++;
    // score=score+1;
    alert('good job');
}else if (human==='no'||human==='n') {
    alert('think again');
}else{
    alert('please answer with yes/y no/n');
}


let horses=prompt('do horses fly');
horses=horses.toLowerCase();

if (horses==='yes'||horses==='y') {
    alert('are you okay?');
}else if (horses==='no' || horses==='n') {
    score++;
    alert('reallyy?');
}else{
    alert('please answer with yes/y no/n');
}


// alert('thanks for playing '+ userName + ' your score is '+score);

// string interpolation:
// template literals: add backticks then the text and the variables inside this:
alert(`thanks for playing ${userName} your score is ${score}`);

let typesOffood=['burger','steak','pizza','mansaf'];

// console.log(typesOffood[0]);
// console.log(typesOffood[1]);

for ( let i = 0 ; i< typesOffood.length; i++){
    // typesOffood[0] burger
    // typesOffood[1] steak
    // typesOffood[2] pizza
    // typesOffood[3] mansaf

    console.log(typesOffood[i]);
}


// nested loops

// for(){


// }


for (let i = 0; i <5; i++) {
    console.log('inside first loop',i);

    for (let j = 0; j < 10; j++) {
        console.log('inside seond loop',j);
        
    }
    
}

