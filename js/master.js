// toggle sping class on icon

document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    
//toggle class open on main setting box

document.querySelector(".settings-box").classList.toggle("open");
};





let landingPage = document.querySelector(".landing-page");


let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];




//Get Random Number
  


setInterval(() => {

    let randomNumber = Math.floor( Math.random() * imgsArray.length  ) ;

    landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")';

}, 10000 );

















