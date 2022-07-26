const light = document.querySelector('.ligar-apagar__luz');
const body = document.querySelector('body');
const boxSigle = document.querySelectorAll('.box-sigle');
const header = document.querySelector('header');
const playList = document.querySelector('.playlist-semanal');
const videoLetra = document.querySelector('.video-letra');



const lightActived = () =>{
    light.addEventListener('click',() =>{
    body.classList.toggle('colors-light');
    videoLetra.classList.toggle('colors-light');
    header.classList.toggle('header__color');
    playList.classList.toggle('playlist__border');
    boxSigle.forEach(box =>{
        box.classList.toggle('boxSigle__shadow');
        localStorage.setItem('colorBox',JSON.stringify(box.classList));    
    })
        localStorage.setItem('colorBody',JSON.stringify(body.classList));
        localStorage.setItem('videoColor',JSON.stringify(videoLetra.classList));
        localStorage.setItem('headerColor',JSON.stringify(header.classList));
        localStorage.setItem('playlistColor',JSON.stringify(playList.classList));
    })

    
}
lightActived();


const saveColors = () =>{
    const bodyColor = JSON.parse(localStorage.getItem('colorBody'));
    const videoColor = JSON.parse(localStorage.getItem('videoColor'));
    const headerColor = JSON.parse(localStorage.getItem('headerColor'));
    const playListColor = JSON.parse(localStorage.getItem('playlistColor'));
    boxSigle.forEach(box =>{
        const boxColor = JSON.parse(localStorage.getItem('colorBox'));
        box.classList.toggle(boxColor[2])
    })


    body.classList.toggle(bodyColor[1]);
    videoLetra.classList.toggle(videoColor[2]);
    header.classList.toggle(headerColor[1]);
    playList.classList.toggle(playListColor[2]);

    
}

saveColors();










