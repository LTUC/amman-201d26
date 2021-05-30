'use strict';


// objects

// propties
// key:value 
/*

propties:

name: Doaa
age:25
height: 158

methods:
eat:function
sleep: function




phones:
model: samsung
height:10 cm
RAM:8gb

method:
calling:function
surfing the web:function
taking pictures:function


*/

// let human = ['doaa',25,'student',158,1995,['sleep','watching movies']];

// console.log(human[5][1]);

// object literal:

var doaa= {
    name:'doaa',
    age:25,
    job:'student',
    height:158,
    likes:['sleep','watching movies' ],
    jobDescription:{
        title:'senior develpor',
        experince:5,
        salary:250000,
        typing:function(){
            return 'type type type'
        }

    },

    talk:function(){
        return `hello from ${this.name}`;
    },
    info:function(){
        console.log(`hi my age is ${this.age} and my height is ${this.height} and ${this.talk()} and i do this ${this.jobDescription.typing()}`);
    },
    whatIsThis:function () {
        console.log(this);
    }



}

// doaa.info();



// console.log('outside',this);

// dot notation:

// logging the full objecct
// console.log(doaa);

// console.log(doaa.name);

// accesing the age
// console.log(doaa.age);

// accesing the array
// console.log(doaa.likes);

// for (let i = 0; i < doaa.likes.length; i++) {
//     console.log(doaa.likes[i]);
// }


// bracket notation

// console.log(doaa["name"]);

// console.log(doaa['age']);


// adding a new property:
// doaa.deslikes=['Math','waking up early'];

// doaa.grade=98;

// console.log(doaa);


// deleting a property:

// delete doaa.grade;

// doaa.grade='';

// console.log(doaa);


// let arr1=[1,2,3];

// let arr2=arr1;

// arr2.push(100);
// console.log( 'array 1',arr1); 

// console.log( 'array 2',arr2); 


// accessin object inside of an object:
// console.log(doaa.jobDescription);
// console.log(doaa.jobDescription.title);



// calling methods :
// doaa.talk();

// doaa.whatIsThis();


// DOM
// document object model

// console.log(document);

// document.write('<h3> hello there </h3>');

// we need to get the parent from my html file by it's ID

let parent = document.getElementById('parent');

console.log(parent);


// create a child element

let child=document.createElement('p');
console.log(child);

// append the child to the parent
parent.appendChild(child);


// give text content
child.textContent='hello form JS';


// create
let child2=document.createElement('h1');


// append
parent.appendChild(child2);

// text content
child2.textContent='this is an h1 from JS';


// child.className='test';

// parent.textContent='';

