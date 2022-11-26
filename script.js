//Code for Smooth Scroll// 
var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");

for (let i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', (event) => {
        event.preventDefault();
        var targetId = navMenuAnchorTags[i].textContent.trim().toLowerCase();

        let target = document.getElementById(targetId);

        let interval = setInterval(() => {
            let targetCoordinates = target.getBoundingClientRect();

            if (targetCoordinates.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 15);
        }, 5);
    });
}


//Code for firing skills progress animation//
var skill = document.getElementById('skills');

var skillList = document.querySelectorAll(".skill-content svg circle");

window.addEventListener('scroll', checkScroll);

let animationDone = false;

function checkScroll() {
    let skillCoordinate = skill.getBoundingClientRect();
   
    if (skillCoordinate.top <= window.innerHeight) {
        fillCircularBar();
        animationDone = true;
    } 
   
}
let javaElem = document.getElementById('java-progress');
let csharpElem = document.getElementById('csharp-progress');
let htmlElem = document.getElementById('html-progress');
let cssElem = document.getElementById('css-progress');
let jsElem = document.getElementById('js-progress');
let sqlElem = document.getElementById('sql-progress');
let mongoElem = document.getElementById('mongo-progress');


function fillCircularBar() {
    if (!animationDone) {
        javaElem.classList.add("eighty-anim");
        csharpElem.classList.add("seventy-anim");
        htmlElem.classList.add("seventy-anim");
        cssElem.classList.add("seventy-anim");
        jsElem.classList.add("seventy-anim");
        sqlElem.classList.add("fifty-anim");
        mongoElem.classList.add("fifty-anim");
    }

}

//Code for Theme Change//
var themeIcon = document.getElementById('theme-icon');
themeIcon.addEventListener('click',()=>{
    document.body.classList.toggle("light-theme");
})


//Code for Menu Bar for Small Screen

var sideMenu = document.getElementById('side-menu');

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-180px";
}

