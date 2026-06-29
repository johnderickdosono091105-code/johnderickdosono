// Dark Mode

function darkMode(){
document.body.classList.toggle("dark");
}

// Typing Animation

const text="BS Computer Science Student | Aspiring Software Engineer";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();