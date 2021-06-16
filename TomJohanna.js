

/*
var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);  
        document.querySelector(".nstof").style.opacity = "0.1";
    }
    timer = setTimeout(function() {
      document.querySelector(".nstof").style.opacity = "1";
    }, 200);
}, false);

*/
// projects scrolldisplay


var rellax = new Rellax('.rellax');

const one = document.querySelector('.one');

const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');



/*

let scrollAmountTwo = 0;
let oldscrollAmountTwo = 0;
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
    if (scrollTop + window.innerHeight > two.offsetTop) {
      if (scrollTop > oldscrollAmountTwo) {
        scrollAmountTwo--;  
      } else if (scrollTop < oldscrollAmountTwo) {
        scrollAmountTwo++;
      }
      two.style.transform = `translateY(${scrollAmountTwo * 1}px)`;
      uitlegCardsTwo.style.transform = `translateY(${scrollAmountOne * 1}px)`;

    };  
  oldscrollAmountTwo = scrollTop;
});

*/

    //top background 


window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

    // center project and fade sterrenstof/ 

const logo = document.querySelector(".h1-titel");
const right = document.querySelector(".right");
const ster = document.querySelector(".logo a");
const left = document.querySelector(".left")
const infoOne = document.querySelector("#infoOne");
const infoTwo = document.querySelector("#infoTwo");
const infoThree = document.querySelector("#infoThree");
const infoFour = document.querySelector("#infoFour");
const kruis = document.querySelector(".close");
const since = document.querySelector(".uitlegTime");

function fadingLogo() {
  logo.classList.add('fade');
  
}

function slidingLeft() {
  left.classList.add('slideOut');
  right.classList.add('slideOut');
  left.style.transform = "matrix(1, 0, 0, 1, -640, 0);"
}

function slidingRight() {
  infoOne.classList.toggle('slideIn');
  infoOne.style.display = "block";
}

const aboutBtn = document.querySelector('#aboutButton');
const aboutMeDiv= document.querySelector('.aboutMe-div');
const impressumBtn = document.querySelector('#impressum');
const impressumDiv= document.querySelector('.impressum-div');


impressumBtn.addEventListener("click", function(){
  fadingLogo()
  slidingLeft(),
  impressumDiv.style.display = "flex",
  aboutMeDiv.style.display = "none",
  infoOne.style.display = "none",
  infoTwo.style.display = "none",
  infoThree.style.display = "none",
  since.style.display = "none",
  kruis.style.display = "block"

});

aboutBtn.addEventListener("click", function(){
  fadingLogo(),
  slidingLeft(),
  aboutMeDiv.style.display = "flex";
  infoOne.style.display = "none",
  infoTwo.style.display = "none",
  infoThree.style.display = "none",
  impressumDiv.style.display = "none";
  since.style.display = "none",
  kruis.style.display = "block"
});


one.addEventListener("click", function(){
  two.classList.toggle('rellax');
  one.style.position = "absolute",
  one.style.bottom = "40%",
  infoTwo.style.display = "none",
  infoThree.style.display = "none",
  infoFour.style.display = "none",
  impressumDiv.style.display = "none",
  fadingLogo();
  setTimeout(function(){ left.classList.add('slideOut');
  right.classList.add('slideOut');
  left.style.transform = "matrix(1, 0, 0, 1, -640, 0);"
  infoOne.style.display = "flex",
  kruis.style.display = "block"}, 700);
  setTimeout(function(){ aboutMeDiv.style.display = "none";
  }, 700);

});


two.addEventListener("click", function(){
  two.classList.toggle('rellax');
  two.style.position = "absolute",
  two.style.bottom = "40%",
  infoOne.style.display = "none",
  impressumDiv.style.display = "none";
  fadingLogo(),
  infoThree.style.display = "none",
  infoFour.style.display = "none",
  setTimeout(function(){ left.classList.add('slideOut');
  right.classList.add('slideOut');
  left.style.transform = "matrix(1, 0, 0, 1, -640, 0);"
  infoTwo.style.display = "flex",
  kruis.style.display = "block"}, 700);
  setTimeout(function(){ aboutMeDiv.style.display = "none";}, 700);
});

three.addEventListener("click", function(){
  three.classList.toggle('rellax');
  three.style.position = "absolute",
  three.style.bottom = "40%",
  fadingLogo(),
  infoOne.style.display = "none",
  infoTwo.style.display = "none",
  infoFour.style.display = "none",
  impressumDiv.style.display = "none";
  setTimeout(function(){ left.classList.add('slideOut');
  right.classList.add('slideOut');
  left.style.transform = "matrix(1, 0, 0, 1, -640, 0);"
  infoThree.style.display = "flex",
  kruis.style.display = "block"}, 700);
  setTimeout(function(){ aboutMeDiv.style.display = "none";}, 700);
});



four.addEventListener("click", function(){
  four.classList.toggle('rellax');
  four.style.position = "absolute",
  four.style.bottom = "40%",
  fadingLogo(),
  infoOne.style.display = "none",
  infoTwo.style.display = "none",
  infoThree.style.display = "none",
  impressumDiv.style.display = "none";
  setTimeout(function(){ left.classList.add('slideOut');
  right.classList.add('slideOut');
  left.style.transform = "matrix(1, 0, 0, 1, -640, 0);"
  infoFour.style.display = "flex",
  kruis.style.display = "block"}, 700);
  setTimeout(function(){ aboutMeDiv.style.display = "none";}, 700);
});

// transform .left out of screen 

// exit

  kruis.addEventListener("click", function(){
    left.classList.remove('slideOut');
    right.classList.remove('slideOut');
    infoOne.classList.remove('slideIn');
    infoOne.style.display = "none";
    infoTwo.style.display = "none";
    infoFour.style.display = "none",
    infoThree.style.display = "none";
    logo.classList.remove('fade');
    kruis.style.display ="none";
    one.style.position = "absolute",
    one.style.bottom = "20%",
    two.style.position = "absolute",
    two.style.bottom = "20%",
    three.style.position = "absolute",
    three.style.bottom = "20%",
    four.style.position = "absolute",
    four.style.bottom = "20%",
    aboutMeDiv.style.display = "none";
    impressumDiv.style.display = "none";
    since.style.display = "block";
    threeInfoBg.style.display = "none";
    threeInfoBg.classList.remove("visible");
    //location = location
});



const threeInfoBtn = document.querySelector("#info-show-three");
const threeInfoBg = document.querySelector(".three-info-bg");

threeInfoBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  threeInfoBg.classList.toggle("visible");
});

const twoInfoBtn = document.querySelector("#info-show-two");
const twoInfoBg = document.querySelector(".two-info-bg");

twoInfoBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  twoInfoBg.classList.toggle("visible");
});

const oneInfoBtn = document.querySelector("#info-show-one");
const oneInfoBg = document.querySelector(".one-info-bg");

oneInfoBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  oneInfoBg.classList.toggle("visible");
});

const fourInfoBtn = document.querySelector("#info-show-four");
const fourInfoBg = document.querySelector(".four-info-bg");

fourInfoBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  fourInfoBg.classList.toggle("visible");
});


//background image
/*
var images = [
  'nasa--hI5dX2ObAs-unsplash-2.jpg',
  'aldebaran-s-g-Gc-k-NPkA-unsplash.jpg',
  'Horsehead-Hubble.jpg',
  'pxfuel.com.jpg',
  'NGC_3114.png'
]


if (document.getElementById) { window.onload = swap };
function swap() {
var numimages=8;
rndimg = new Array('one.jpg',
  'two.jpg',
   'three.jpg',
  'four.jpg',
  'five.jpg',
'six.jpg',
'seven.jpg',
  'eight.jpg'
  ); 
x=(Math.floor(Math.random()*numimages));
randomimage=(rndimg[x]);
document.querySelector(".right").style.backgroundImage = "url("+ randomimage +")"; 
document.querySelector(".hTest").style.backgroundImage = "url("+ randomimage +")"; 
}
*/
//centering elements that are clicked upon

//about Me info

