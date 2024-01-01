
let mainColors =  localStorage.getItem("color_option");


if(mainColors !== null){
    document.documentElement.style.setProperty('--main--color', mainColors);

    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        
        if(element.dataset.color === mainColors){
            element.classList.add("active");
        }

    });

};
// toggle sping class on icon

document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    
this.classList.toggle("fa-spin");  
//toggle class open on main setting box
document.querySelector(".settings-box").classList.toggle("open");
};

let landingPage = document.querySelector(".landing-page");
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//Switch colors
const colorsli = document.querySelectorAll(".colors-list li");

colorsli.forEach( li => {
    li.addEventListener("click", (e) => {
        
        //set color on root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

        //set color on local storage
 
       localStorage.setItem("color_option" , e.target.dataset.color );
      
       // Remove Active class from all childrens
       
       e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    // add avctive class on element 
    e.target.classList.add("active"); 

    });

} );




//Get Random Number

let backgroundOption = true ;

let backgroundInterval ;

// check if there's  local storage random background item

let backgroundLocalItem = localStorage.getItem("background_Option");


if( backgroundLocalItem !== null){

    if(backgroundLocalItem === 'true'){
        backgroundOption = true ; 
    }else {
        backgroundOption = false ; 
    }
   // remove all active class
   document.querySelectorAll(".random-backgrounds span").forEach(element => {
    element.classList.remove("active");
});
   
if( backgroundLocalItem === 'true') {
document.querySelector(".random-backgrounds .yes ").classList.add("active"); }
else {
    document.querySelector(".random-backgrounds  .no ").classList.add("active");
}


}
   
function randomizeImgs () {

if (backgroundOption === true) {
    
    backgroundInterval = setInterval(() => {

    let randomNumber = Math.floor( Math.random() * imgsArray.length  ) ;

    landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")';

}, 1000 );
}
}

randomizeImgs();

//Switch Random background option

const RandomBackEl = document.querySelectorAll(".random-backgrounds span");

RandomBackEl.forEach( span => {
    span.addEventListener("click", (e) => {
        
       e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    // add avctive class on element 
    e.target.classList.add("active"); 

  if (e.target.dataset.background === 'yes') {
    backgroundOption = true;

      localStorage.setItem("background_Option" ,   backgroundOption);

      
    
    randomizeImgs();

  } else {
    backgroundOption = false;
    localStorage.setItem("background_Option" ,   backgroundOption);
    
    clearInterval(backgroundInterval);
  }

    });

} );


let myp = document.querySelector("p");

myp.onclick = function(){
 let newp =   myp.cloneNode(true);
 newp.className =  "clone";
 document.body.appendChild(newp);
};


document.addEventListener("click", function(e){
    if(e.target.className === 'clone'){
        console.log("Im Cloned"); 
    }
 });


//select skills selector

let ourskills = document.querySelector(".skills");

window.onscroll = function () {
    
    let skillsofsettop = ourskills.offsetTop;
    let skillsoutsetheight = ourskills.offsetHeight;
    let windowheight = this.innerHeight;
    let windowscrolltop = this.pageYOffset;



   if(windowscrolltop > (skillsofsettop + skillsoutsetheight - windowheight)) {
      let allskills = document.querySelectorAll(".skill-box .skill-progress  span");
      allskills.forEach(  skill => {
        skill.style.width = skill.dataset.progress;
      });

   }

};

// create popup with the image 

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach( img => {

    img.addEventListener('click' , (e) => {
        let overlay = document.createElement("div");
        overlay.className = 'popup-overlay';

        document.body.appendChild(overlay);

        // create the popup

        let popupbox = document.createElement("div");
        popupbox.className = 'popupbox';
        
        let popupimg = document.createElement("img");
            popupimg.src =     img.src ; 

            popupimg.className= 'popupimg'
            overlay.appendChild(popupbox);
            popupbox.appendChild(popupimg);
          
        

    });

});