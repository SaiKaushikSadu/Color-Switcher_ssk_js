const colors=["Red","Green","Blue","rgb(241, 10, 10)","rgb(11, 234, 48)","#f2f3f6"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber=getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

