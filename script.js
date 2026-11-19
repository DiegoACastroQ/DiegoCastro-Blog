const header = document.querySelector("#mainHeader");
const body = document.querySelector("body");
const nightButtonIcon = document.querySelector("#mode-icon");
let nightMode = false;
const monoColor = document.querySelector("#mainColor");
const hero = document.querySelector("#mainHero");
const update = document.querySelector("#update");


update.addEventListener("click", (e) => {
    if (nightMode===true){
        nightButtonIcon.setAttribute("href", "#day");
        
        nightMode = false;
        body.classList.remove("nightMode");
    } else{
        nightButtonIcon.setAttribute("href", "#night");
       
        nightMode = true;
        body.classList.add("nightMode");
    };
});