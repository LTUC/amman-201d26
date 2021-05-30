// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data


'use strict';

let frankie={
    name:'frankie',
    age:0,
    likes:['napping','cuddiling','eating'],
    goodWithKids:true,
    goodWithDogs:false,
    goodWithOtherCats:true,
    breed:'angora',

    getAge:function(){
        this.age=randomNumber(3,12)+' months';

    },

}

// this is from w3schooles
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

frankie.getAge();
// console.log(frankie);
console.log(frankie.age);

// gives me a number from 0 =>1
// console.log(Math.random());

// math floor
// console.log(Math.floor(5.6));
// 5.7 => 5  

// math ceil
// 5.3=>6

// math round
// 5.4 => 5
// 5.6 => 6


// get the parent by it's id, this is where i will be adding the new tags that i will create

let parent= document.getElementById('kittenProfiles');


// <!-- generate this from js: -->
// <!-- <article>
//   <h2>name</h2>
//   <p></p>
//   <ul>
//     <li></li>
//   </ul>
//   <img src="">
// </article> -->


// create element
let articleElement=document.createElement('article');

// appending
parent.appendChild(articleElement);

console.log(parent);

// create h2 element
let h2Element= document.createElement('h2');

// append
articleElement.appendChild(h2Element);

// text content
h2Element.textContent= frankie.name;


// create paragraph
let paragraphElement=document.createElement('p');

// append
articleElement.appendChild(paragraphElement);

// text 
paragraphElement.textContent=` frankie is adorable and is ${frankie.age} old`;



// create the ul
let ulElement=document.createElement('ul');

// append
articleElement.appendChild(ulElement);


for (let i = 0; i < frankie.likes.length; i++) {
    // console.log(frankie.likes[i]);

    // create li 
    let liElement=document.createElement('li');

    // append
    ulElement.appendChild(liElement);

    // text content
    liElement.textContent=frankie.likes[i];

}


// create img
let imgElement=document.createElement('img');

// append img
articleElement.appendChild(imgElement);

// adding source
imgElement.setAttribute('src','images/'+frankie.name+'.jpeg');


//horus= [6am,7am.....,7pm]

// name seattle
// min cust
// max cust
// avg cookies
// random customers per hour=[];
// avgCookies=[];

// method for random cust each hour
// [23,60,55,]

// avg cookies per hour

// [23*1.2,250,300,105]


// unordered list


// tokyo

// dubai

