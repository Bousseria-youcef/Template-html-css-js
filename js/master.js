
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

setInterval(() => {

    let randomNumber = Math.floor( Math.random() * imgsArray.length  ) ;

    landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")';

}, 10000 );

//Switch Random background option
const RandomBackEl = document.querySelectorAll(".random-backgrounds span");

RandomBackEl.forEach( span => {
    span.addEventListener("click", (e) => {
        
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













