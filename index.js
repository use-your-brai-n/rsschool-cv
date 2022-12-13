let text = "Front-End developer";
let index = 0;
let speed = 100;

function type() {
    if (index<text.length) {
        document.querySelector('#par').textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
    }
}

type();

const back = document.querySelector('#back');
const next = document.querySelector('#next');
const photos = ['../rsschool-cv/assets/Tatsiana Zagorskaya.png', '../rsschool-cv/assets/crtificate.jpg'];

let i = 0;

next.addEventListener('click', ()=>{
    i++;
    if (i>photos.length-1){
        i=0;
    }
    document.querySelector('#pictures').src=photos[i]
})

back.addEventListener('click', ()=>{
    i--;
    if (i<0){
        i=photos.length-1;
    }
    document.querySelector('#pictures').src=photos[i]
})

AOS.init();