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


// let frankie={
//     name:'frankie',
//     age:0,
//     intrests:['napping','cuddiling','eating'],
//     isGoodWithKids:true,
//     isGoodWithDogs:false,
//     isGoodWithOtherCats:true,
//     breed:'angora',
//     getAge:function () {
//         this.age=randomNumber(3,12)+ ' months';
//         console.log(this.age);   
//     }

//   }

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// kittens array
let kittens = [];

// creating constructor

function Kitten(name, intrests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats) {
    // add properties:
    this.name = name;
    this.intrests = intrests;
    this.age = 0;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithOtherCats = isGoodWithOtherCats;

    kittens.push(this);


}

// make prototype for the age method
Kitten.prototype.getAge = function () {
    this.age = randomNumber(3, 12) + ' months';

}

// create a new kitten
let frankie = new Kitten('frankie', ['napping', 'cuddiling', 'eating'], true, false, true);
let serena = new Kitten('serena', ['napping', 'playing', 'chasing string'], false, false, true);

// frankie.getAge();
// console.log(frankie);
// serena.getAge();
// console.log(serena);


// make the render method

Kitten.prototype.render = function () {
    // worry baout making it work for one cat and it will work for the rest

    let parent = document.getElementById('kittenProfiles');
    // get the parent:

    console.log(parent);
    // <article>
    //       <h2></h2>
    //       <p></p>
    //       <ul>
    //         <li></li>
    //       </ul>
    //       <table>
    //         <tr>
    //           <th>
    //             Kids
    //           </th>
    //           <th>
    //             Dogs
    //           </th>
    //           <th>
    //             Other Cats
    //           </th>
    //         </tr>
    //         <tr>
    //           <td>
    //             true
    //           </td>
    //           <td>
    //             false
    //           </td>
    //           <td>
    //             true
    //           </td>
    //         </tr>
    //       </table>
    //       <img>
    //     </article>

    let article = document.createElement('article');
    parent.appendChild(article);

    let h2Element = document.createElement('h2');

    article.appendChild(h2Element);

    h2Element.textContent = this.name;


    // create paragraph
    let paragraphElement = document.createElement('p');

    // append
    article.appendChild(paragraphElement);

    // text 
    paragraphElement.textContent = ` ${this.name} is adorable and is ${this.age} old`;



    // create the ul
    let ulElement = document.createElement('ul');

    // append
    article.appendChild(ulElement);


    for (let i = 0; i < this.intrests.length; i++) {
        // console.log(frankie.likes[i]);

        // create li 
        let liElement = document.createElement('li');

        // append
        ulElement.appendChild(liElement);

        // text content
        liElement.textContent = this.intrests[i];

    }


    // create img
    let imgElement = document.createElement('img');

    // append img
    article.appendChild(imgElement);

    // adding source
    // frankie

    imgElement.setAttribute('src', 'images/' + this.name + '.jpeg');


    let table = document.createElement('table');

    article.appendChild(table);

    // making header row
    let headingRow=document.createElement('tr');

    table.appendChild(headingRow);


    let likesArr=['isGoodWithKids', 'isGoodWithDogs', 'isGoodWithOtherCats'];

    for (let i = 0; i < likesArr.length; i++) {
       let thElement=document.createElement('th');
       headingRow.appendChild(thElement);
       thElement.textContent=likesArr[i]
        
    }

    let dataRow=document.createElement('tr');

    table.appendChild(dataRow);

    let td1 =document.createElement('td');

    dataRow.appendChild(td1);

    td1.textContent=this.isGoodWithKids;


    
    let td2 =document.createElement('td');

    dataRow.appendChild(td2);

    td2.textContent=this.isGoodWithDogs;

    
    let td3 =document.createElement('td');

    dataRow.appendChild(td3);

    td3.textContent=this.isGoodWithOtherCats;

}








for (let i = 0; i < kittens.length; i++) {
    // kittens[0].getAge()
    kittens[i].getAge();
    kittens[i].render();
}
console.log(kittens);





// normal function  the header and one for the footer NOT PROTOTYPE
// name min max avg

// make the table as global
function makingHeader(){
    // tr 
    // th

}
makingHeader();



Shop.prototype.render=function(){
    // make a row for the shop
    // tr
    // td

}


function makingFooter() {
    // tr
    // th
    
}
makingFooter();

// THE  RENDER method WILL BE THE PROTOTYPE 


