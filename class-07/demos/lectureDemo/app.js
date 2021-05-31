'use strict';

// object literals

// let doaa={
//     // properties
//     name:'doaa',
//     age:25,
//     job:'student',

//     // methods
//     walk:function(){
//         console.log('im walkin here...');
//     }
// }
// console.log(doaa);
// doaa.walk();



// let manal={
//     // properties
//     name:'manal',
//     age:20,
//     job:'student',

//     // methods
//     walk:function(){
//         console.log('im walkin here...');
//     }
// }
// manal.walk();



// contstructor functions:


// Pascal naming
// Math

let students=[];

function Student(name,age,height){
    this.userName=name;
    this.age=age;
    this.height=height;

    this.walk=function () {
        console.log('im walkin here..'+this.userName);
        
    }
    // "this" means the object
    // doaa object
    // bashar object
    students.push(this);
}

// console.log(Math);
// console.log(Array);

// a new instance
let doaa=new Student('doaa',25,158);
console.log(doaa);
doaa.walk();

let bashar=new Student('bashar',26,198);
console.log(bashar);


let tariq=new Student('tariq',28,190);

// students=[bashar,doaa];
// console.log(students);
console.log(students);

// you should create the methods outside:

// prototype
Student.prototype.talk=function(){
    console.log('hello there');
}

bashar.talk();
doaa.talk();

Student.prototype.eat=function(){
    console.log(`${this.userName} is eating`);
}

doaa.eat();
bashar.eat();




// making tables in JS
// DOM FOR THE TABLE 


// Get the parent:
let parent=document.getElementById('container');
console.log(parent);

// create the table:
let table=document.createElement('table');


// append the table in the container
parent.appendChild(table);


// make the heading row

let headingRow=document.createElement('tr');

// append to the table

table.appendChild(headingRow);


let headings=['name','age'];

for (let i = 0; i < headings.length; i++) {
    
    // making the th
    let thElement=document.createElement('th');

    // append to the table row
    headingRow.appendChild(thElement);

    // text content
    console.log(headings[i]);
    thElement.textContent=headings[i];
    
}

// making the data rows for the students
for (let i = 0; i < students.length; i++) {
    // creating the row
    let studentRow=document.createElement('tr');
    
    // appending
    table.appendChild(studentRow);
    
    // making the table data
    
    let nameTd=document.createElement('td');
    
    studentRow.appendChild(nameTd);
    
    console.log(students[i].age);
    // students[0] doaa object
    // students[1] bashar object

    nameTd.textContent=students[i].userName;


    // making the age td

    let ageTd=document.createElement('td');
    
    studentRow.appendChild(ageTd);

    ageTd.textContent=students[i].age;
    
}



