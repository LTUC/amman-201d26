'use strict';




function Student(name,height) {
    this.name=name;
    this.height=height;
    students.push(this);
    this.render =function(){
        let para=document.createElement('p');
        parent.appendChild(para);
        para.textContent='hello my name is '+this.name;
    }
    setting();
}

let students=[];

new Student('alaa',165);
new Student('khair', 180);

let parent=document.getElementById('container')


console.log(students);

function setting() {
    let string=JSON.stringify(students);

    localStorage.setItem('student',string);
}

function getting() {
    let data=localStorage.getItem('student');

    let parsed=JSON.parse(data);

    console.log(parsed);

    // students=parsed;
    // console.log(parsed);

    if (parsed) {
        
        
        for (let i = 0; i < parsed.length; i++) {
            console.log(parsed[i]);
          new Student(parsed[i].name,parsed[i].height);
         }
    }



    // new Student('obada',190);
   console.log(students);

   for (let i = 0; i < students.length; i++) {
       students[i].render()
   }

    // if (parsed) {
    //     for (let i = 0; i < parsed.length; i++) {
    //         console.log(parsed[i]);
    
    //         let student=new Student(parsed[i].name,parsed[i].height);
               
    //     }
        
    // }
}



// alaa.render();
// khair.render();

getting()

