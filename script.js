const header = document.querySelector("#mainHeader");
const body = document.querySelector("body");
let nightMode = false;
const monoColor = document.querySelector("#mainColor");
const hero = document.querySelector("#mainHero");
const update = document.querySelector("#update");


update.addEventListener("click", (e) => {
    if (nightMode===true){
        hero.classList.remove("nightMode");
        monoColor.style.fill = "#b61818";
        nightMode = false;
        body.classList.remove("nightMode");
    } else{
        hero.classList.add("nightMode");
        monoColor.style.fill = "#ffffff";
        nightMode = true;
        body.classList.add("nightMode");
    };
});