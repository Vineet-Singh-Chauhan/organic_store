
//------------------preloader--------------------------//
const preloader=document.getElementById("preloader");
function hide(){
    preloader.style.display="none";
    document.querySelector(".modal-btn").click();
}


//--------------------Username menu----------------------------------//
let menuToggleVar = false;
let menu = document.querySelector(".usermenu");




function showMenu() {
    if (menuToggleVar === false) {
        showUserMenu();
        menuToggleVar = true;
        
    }
    else if (menuToggleVar === true) {
        hideUserMenu();
        menuToggleVar = false;
        
    }
}

function showUserMenu() {
    menu.style.display="block";
}

function hideUserMenu(){
    menu.style.display="none";
}

//-----------------back to top btn----------------------//
const back2top =document.getElementById("back2top");
window.onscroll = function() {scrollFunction()};
// console.log(back2top)
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    back2top.style.display = "block ";
  } else {
    back2top.style.display = "none ";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//--------------------Theme-plate-toggle----------------------------------//
let themeToggleVar = false;
let themeCustomizer = document.querySelector(".theme-customizer");
let themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", themeToggle);

function themeToggle() {
    if (themeToggleVar === false) {
        showPalette();
        themeToggleVar = true;
        
    }
    else if (themeToggleVar === true) {
        hidePalette();
        themeToggleVar = false;
        
    }
}

function showPalette() {
    themeCustomizer.style.transform = "translateX(0)";
}

function hidePalette() {
    themeCustomizer.style.transform = "translateX(300px)";
}

//-----------------------------theme customizer mechanism-----------------
const defaultBtn=document.querySelector(".default");
defaultBtn.addEventListener("click",defaultColor);
function defaultColor(){
  
    document.documentElement.style.setProperty('--pri-color', 'white');
    document.documentElement.style.setProperty('--sec-color', 'rgba(0, 0, 0, 0.363)');
    document.querySelectorAll(".bi-check2-square").forEach(function(e){
      e.style.display="none"});
    defaultBtn.querySelector(".bi-check2-square").style.display="block";
    setColor();
}

const tomatoBtn=document.querySelector(".tomato");
tomatoBtn.addEventListener("click",tomatoColor);
function tomatoColor(){
  
    document.documentElement.style.setProperty('--pri-color', 'tomato');
    document.documentElement.style.setProperty('--sec-color', 'rgba(223, 136, 120, 0.1)');
    document.querySelectorAll(".bi-check2-square").forEach(function(e){
      e.style.display="none"});
    tomatoBtn.querySelector(".bi-check2-square").style.display="block";
    setColor();
}

const DodgerBlueBtn=document.querySelector(".DodgerBlue");
DodgerBlueBtn.addEventListener("click",DodgerBlueColor);
function DodgerBlueColor(){
  
    document.documentElement.style.setProperty('--pri-color', 'DodgerBlue');
    document.documentElement.style.setProperty('--sec-color', 'rgba(30, 143, 255, 0.1');
    document.querySelectorAll(".bi-check2-square").forEach(function(e){
      e.style.display="none"});
    DodgerBlueBtn.querySelector(".bi-check2-square").style.display="block";
    setColor();
}

const NeonGreenBtn=document.querySelector(".NeonGreen");
NeonGreenBtn.addEventListener("click",NeonGreenColor);
function NeonGreenColor(){
  
    document.documentElement.style.setProperty('--pri-color', 'rgb(17, 245, 119)');
    document.documentElement.style.setProperty('--sec-color', 'rgba(17, 245, 119, 0.1');
    document.querySelectorAll(".bi-check2-square").forEach(function(e){
      e.style.display="none"});
    NeonGreenBtn.querySelector(".bi-check2-square").style.display="block";
    setColor();
}

const AquaBtn=document.querySelector(".Aqua");
AquaBtn.addEventListener("click",AquaColor);
function AquaColor(){
  
    document.documentElement.style.setProperty('--pri-color', 'aqua');
    document.documentElement.style.setProperty('--sec-color', 'rgba(0, 255, 255, 0.1)');
    document.querySelectorAll(".bi-check2-square").forEach(function(e){
      e.style.display="none"});
    AquaBtn.querySelector(".bi-check2-square").style.display="block";
    setColor();
}
const OrangeBtn=document.querySelector(".Orange");
OrangeBtn.addEventListener("click",OrangeColor);
function OrangeColor(){
  
    document.documentElement.style.setProperty('--pri-color', 'Orange');
    document.documentElement.style.setProperty('--sec-color', 'rgba(255, 166, 0, 0.1)');
    document.querySelectorAll(".bi-check2-square").forEach(function(e){
      e.style.display="none"});
    OrangeBtn.querySelector(".bi-check2-square").style.display="block";
    setColor();
}

function setColor(){
  let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-color');
    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-color');

    document.querySelector('#priColorValue').innerText = priColor;
    document.querySelector('#secColorValue').innerText = secColor;
    
}


const primaryBtn=document.querySelector(".primary");
primaryBtn.addEventListener("click",primaryColor);
function primaryColor(){
  
    let priColorInput = document.querySelector('.priColorInput');
    priColorInput.click();
}
function changepri(){
  let priColorValueInput = document.querySelector('.priColorInput').value;
  document.documentElement.style.setProperty('--pri-color',priColorValueInput );
  setColor();
  document.querySelectorAll(".bi-check2-square").forEach(function(e){
    e.style.display="none"});
}

const secondaryBtn=document.querySelector(".secondary");
secondaryBtn.addEventListener("click",secondaryColor);
function secondaryColor(){
  
    let secColorInput = document.querySelector('.secColorInput');
    secColorInput.click();
}
function changesec(){
  let secColorValueInput = document.querySelector('.secColorInput').value;
  document.documentElement.style.setProperty('--sec-color',secColorValueInput );
  document.querySelectorAll(".bi-check2-square").forEach(function(e){
    e.style.display="none"});
  setColor();
}

function randomColor(){
  function c(){
      let hex= Math.floor(Math.random()*256).toString(16);
       return ("0"+String(hex)).substr(-2);
     
  }
  // console.log('#'+c()+c()+c());
  
  let randomPriColor = '#'+c()+c()+c();
  document.documentElement.style.setProperty('--pri-color',randomPriColor );
  

  let randomSecColor = '#'+c()+c()+c();
  document.documentElement.style.setProperty('--sec-color',randomSecColor );
  setColor();
  document.querySelectorAll(".bi-check2-square").forEach(function(e){
    e.style.display="none"});
  
}