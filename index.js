let text = "Front-end developer";
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
const photos = ['https://cdn.glitch.global/bd70a2d6-9a42-4bf0-9abb-7ff51cfe66d0/crtificate.jpg?v=1655753550644', 'https://cdn.glitch.global/bd70a2d6-9a42-4bf0-9abb-7ff51cfe66d0/%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0%20%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F.png?v=1661789110503'];

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