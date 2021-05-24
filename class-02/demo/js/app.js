'use strict';
// comment for 1 line

/*
comments for multible lines


Data types:

- String
any sympol inside 'single quotes' or "double quotes"

-Number
5 integer , 2.5 floats

-Boolean
true or false


*/

// let userName='samer';

// console.log(userName);

// let age= prompt('whats your age?');

// console.log(age);

// check the data type of a variable:

// console.log(typeof age);

// change data type to a nuymber
// age=Number(age);
// age=parseInt(age);

// console.log('after',typeof age);

/*
If statement:

if(condition){
    do this code if the condition is true
}else if(second condition){
    do this if second condition is true
}else{
    do this if all conditions are false
}



// */

// let feeling=confirm('are you good?');

// if (feeling===true){
//     console.log('thats great to hear');
// }else{
//     console.log('hope you feel better soon');
// }


// let favouriteColor=prompt('what do you like more red/black?');

// console.log('before',favouriteColor);

// favouriteColor=favouriteColor.toLowerCase();


// favouriteColor=favouriteColor.toUpperCase();

// console.log('after',favouriteColor);

// if (favouriteColor==='black') {
//     console.log('you like black more');
// }else if(favouriteColor==='red'){
//     console.log('you like red more');
// }else{
//     console.log('please write red or black');
// }

/*
Switch

switch(variable){
    case 'value 1':
        do code..
        break;
    
    case 'value2':
        do code..
        break;

    default:
        do if nothing matches the cases
        break;
}

*/

let fruit = prompt('what is your favourite fruit');

switch (fruit.toUpperCase()) {
    case 'APPLE':
        console.log('apples are 5 dinars a kilo');
        break;

    case 'MELON':
    case 'BANANA':
        console.log('bananas and melons are 3 dinars a kilo');
        break;

    default:
        console.log('sorry we dont have that');
        break;
}


/*
AND

true && true=>true
true &&false=>false
false && true=>false
false && false=>false

OR

true || true => true

true || false =>true

false|| true => true

false || false => false


*/


/*
GitHub
The cloud
store code online and share it with other developers

Git
VCS
LOCAL machine

*/


