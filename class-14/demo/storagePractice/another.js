'use strict';
// let parent=document.getElementById('container')

function getting() {
    let data=localStorage.getItem('student');
    console.log(data);

    let parsed=JSON.parse(data);

    console.log(parsed);

    // students=parsed;
    // console.log(parsed);

    if (parsed) {
        console.log('coming from another');
        for (let i = 0; i < parsed.length; i++) {
            // new Student(parsed[i].name,parsed[i].height);
            let para=document.createElement('p');
            parent.appendChild(para);
            para.textContent='hello my name is '+parsed[i].name;

         }
}



    // new Student('obada',190);
//    console.log(students);


// if welink the app.js in the another.html

   for (let i = 0; i < students.length; i++) {
       students[i].render()
   }
}
getting();