// ELEMENTS

const cursor = document.getElementById("cursor");

const cover = document.getElementById("cover");
const garden = document.getElementById("garden");

const openGarden = document.getElementById("openGarden");

const dabButton = document.getElementById("dabButton");
const energyBar = document.getElementById("energyBar");

const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

const turnPage = document.getElementById("turnPage");

const ending = document.getElementById("ending");

const music = document.getElementById("music");





// CURSOR

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});







// SPARKLES

function createSparkle(){

    let sparkle = document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✦";


    sparkle.style.left =
    Math.random()*100+"vw";


    sparkle.style.fontSize =
    (10+Math.random()*25)+"px";


    sparkle.style.animationDuration =
    (3+Math.random()*5)+"s";


    document
    .getElementById("sparkles")
    .appendChild(sparkle);



    setTimeout(()=>{

        sparkle.remove();

    },8000);

}


setInterval(createSparkle,200);








// COVER TO GARDEN


openGarden.addEventListener("click",()=>{


    cover.style.display="none";

    garden.style.display="block";


});








// DAB CHARGE


let power = 0;


dabButton.addEventListener("click",()=>{


    power += 20;


    energyBar.style.width =
    power+"%";



    if(power >= 100){

        unlockLetter();

    }


});







// LETTER UNLOCK


function unlockLetter(){


    garden.style.display="none";


    letter.style.display="block";


    music.play().catch(()=>{});


    typeLetter();


}









// MESSAGE


const message = `hey, lil teddy bear 🧸💚


hehe you actually found the secret thing.


first of all... yo 😭 bahaha


i know A Levels have been stressing you out a lot lately and your brain probably has like 500 tabs open at the same time 💀 lolol


mehh idiot, i need you to remember something okay?


you're doing better than you think.


i know sometimes it feels like there's too much to do and everything is just piling up, but i see how much effort you put in.


i see you trying, even on the days when you feel tired or unsure.


so here's your tiny reminder:


stop being so hard on urself harida 🫵😭


take breaks when you need them.


don't be so mean to yourself yea? only I get to do that :3


and remember that one stressful day doesn't decide your whole future.


i'm always cheering for you, even when you don't realize you need someone cheering.


also btw...


you better not underestimate yourself because you're actually so much more capable than you think 🤨💚


okay i'll stop being cheesy now before this becomes a whole novel 💀


just know that i care about you a lot.


i wuv u sooo much, harida?


more than yk 🥺❤️


mwahh 🧸💗`;



let index = 0;



function typeLetter(){


    if(index < message.length){


        typing.innerHTML += message[index];


        index++;


        setTimeout(typeLetter,35);


    }

}








// PAGE FLIP ENDING


turnPage.addEventListener("click",()=>{


    letter.style.display="none";


    ending.style.display="block";


    heartRain();


});








// HEART RAIN


function heartRain(){


    setInterval(()=>{


        let heart =
        document.createElement("div");


        heart.innerHTML="💗";


        heart.style.position="absolute";

        heart.style.left =
        Math.random()*100+"vw";


        heart.style.top="-30px";

        heart.style.fontSize =
        "30px";

        heart.style.animation =
        "fall 4s linear";



        document
        .getElementById("heartRain")
        .appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },4000);


    },150);


}
