// ==========================
// Typing Animation
// ==========================

const text =
"BS Computer Science Student | Aspiring Software Engineer";

let index = 0;

function typing() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing, 70);

    }

}

typing();


// ==========================
// Dark Mode
// ==========================

const mode = document.getElementById("mode");

mode.onclick = function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        mode.innerHTML = "☀️";

    }

    else{

        mode.innerHTML = "🌙";

    }

}


// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


// ==========================
// Fade Animation
// ==========================

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position = card.getBoundingClientRect().top;

const screen = window.innerHeight;

if(position < screen-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

});


// ==========================
// Contact Form
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent.");

form.reset();

});