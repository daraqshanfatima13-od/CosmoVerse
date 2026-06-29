// Launch Button

const button = document.querySelector("button");

button.addEventListener("click",function(){

alert("🚀 Preparing Launch...");

});


// Create Stars

const stars=document.querySelector(".stars");

for(let i=0;i<300;i++){

let star=document.createElement("div");

star.classList.add("star");

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}