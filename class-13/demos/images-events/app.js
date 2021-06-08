'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 25 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
    name : 'cool goat',
    clicks: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/

let container=document.getElementById('images-div');
let leftImageElement=document.getElementById('left-image');
let rightImageElement=document.getElementById('right-image');
let middleImageElement=document.getElementById('middle-image');

let maxAttempts=10;
let userAttemptsCounter=0;

// the random number index for the left image
let leftImageIndex; 

// the random number index for the right image
let rightImageIndex;

// the random number index for the middle image
let middleImageIndex;


let goatNames=[];
let votes=[];
let shown=[];


function Goat(name,source) {
  this.name=name;
  this.source=source;
  this.votes=0;
  this.shown=0;

  goatNames.push(this.name);

  Goat.allGoats.push(this);
}

// will contain all of the goats that will be created

Goat.allGoats=[];


new Goat('cruisin-goat','images/cruisin-goat.jpg');//0
new Goat('float-your-goat', 'images/float-your-goat.jpg');//1
new Goat('goat-away', 'images/goat-away.jpg');//2
new Goat('goat-out-of-hand', 'images/goat-out-of-hand.jpg');//3
new Goat('kissing-goat', 'images/kissing-goat.jpg');//4
new Goat('sweater-goat', 'images/sweater-goat.jpg');//5
new Goat('sassy-goat', 'images/sassy-goat.jpg');//6
new Goat('smiling-goat', 'images/smiling-goat.jpg');//7

console.log(goatNames);
function generateRandomIndex() {
  // 0 => 7
  return Math.floor(Math.random() * Goat.allGoats.length); 
}

// console.log(generateRandomIndex());

let shownPictures=[];
function renderTwoImages() {
  // 0=>7
  leftImageIndex=generateRandomIndex();
  // 0=>7
  rightImageIndex=generateRandomIndex();

  middleImageIndex=generateRandomIndex();

  console.log('before',shownPictures);

  while (leftImageIndex===rightImageIndex||leftImageIndex===middleImageIndex||middleImageIndex===rightImageIndex||shownPictures.includes(leftImageIndex)||shownPictures.includes(rightImageIndex)||shownPictures.includes(middleImageIndex)) {
    rightImageIndex=generateRandomIndex();
    leftImageIndex=generateRandomIndex();
    middleImageIndex=generateRandomIndex();    
  }

  // Goat.allGoats[0];
  // Goat.allGoats[1];
  // Goat.allGoats[2];
  // Goat.allGoats[3];
  // Goat.allGoats[4];
  // []
  // [left midd right]


  // shownPictures=[leftImageIndex,middleImageIndex,rightImageIndex];


  // pushing into the shown array
  shownPictures=[];
  shownPictures.push(leftImageIndex,rightImageIndex,middleImageIndex);

  console.log('after',shownPictures);


  // console.log(Goat.allGoats[leftImageIndex].source);

  // make the source for the left and right image equal to the random goat source
  // jamal{
  //   height:180;
  //   weight:100;

  // }
  // jamal.weight.height  X
  // jamal.height 

  // console.log(Goat.allGoats[leftImageIndex]);
  // Goat.allGoats[1].source.shown


  leftImageElement.src=Goat.allGoats[leftImageIndex].source;
  Goat.allGoats[leftImageIndex].shown++;

  rightImageElement.src=Goat.allGoats[rightImageIndex].source;
  Goat.allGoats[rightImageIndex].shown++;

  middleImageElement.src=Goat.allGoats[middleImageIndex].source;
  Goat.allGoats[middleImageIndex].shown++;
}
renderTwoImages();

// add event listner
// container
container.addEventListener('click',handleUserClick);
// leftImageElement.addEventListener('click',handleUserClick);
// rightImageElement.addEventListener('click',handleUserClick);


function handleUserClick(event) {
  
  console.log(event.target.id);

  // adding to attempts
  userAttemptsCounter++;
  
  // console.log(userAttemptsCounter);

  // if the attempts is lower than the max:
  // -add to the votes based on the id
  // -render two new images

  // ELSE
  // show the list
  // remove the clicking


  if (userAttemptsCounter<=maxAttempts) {


    if (event.target.id==='left-image') {
      // the random number
      // Goat.allGoats[5].votes++
      Goat.allGoats[leftImageIndex].votes++

    }else if(event.target.id==='middle-image'){
      Goat.allGoats[middleImageIndex].votes++;
    }
    else if(event.target.id==='right-image'){
      Goat.allGoats[rightImageIndex].votes++
    }else{
      alert('please click on the images');
      userAttemptsCounter--;
    }

    console.log(Goat.allGoats);
    renderTwoImages();


  }else{
    let button=document.getElementById('button');
    button.hidden=false;
    button.addEventListener('click',showingList);

    // create button
    // let button=document.creatElement('button');
    // container.appendChild(button);
    // button.textContent='show results';

    // stop the clicking
    // leftImageElement.removeEventListener('click',handleUserClick);
    // rightImageElement.removeEventListener('click',handleUserClick);
    container.removeEventListener('click',handleUserClick);
    console.log(Goat.allGoats);
    
    for (let i = 0; i < Goat.allGoats.length; i++) {

      votes.push(Goat.allGoats[i].votes);
      shown.push(Goat.allGoats[i].shown);
    }

    chart();
  }

}

function showingList() {
  let list=document.getElementById('results-list');
  for (let i = 0; i < Goat.allGoats.length; i++) {
    let goatResult=document.createElement('li');

    list.append(goatResult);

    goatResult.textContent=`${Goat.allGoats[i].name} has ${Goat.allGoats[i].votes} votes and was seen ${Goat.allGoats[i].shown}`;
    
  }
  // button.removeEventListener('click',showingList);
  button.hidden=true;
}

function chart() {
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels:goatNames,
          datasets: [{
              label: '# of Votes',
              data:votes,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          },
          {
            label: '# of Shown',
            data:shown,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
        ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
    
}