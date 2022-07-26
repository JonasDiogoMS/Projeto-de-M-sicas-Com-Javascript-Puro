const playlistSemanal = [
{
    id: 0,
    imgBand: 'images/Michael Jackson.jpg',
    bandName: 'Michael Jackson',
    songName: "Wanna Be Startin' Somethin'",
    file: "songs/Wanna Be Startin' Somethin'.mp3",
},
{
    id: 1,
    imgBand: 'images/pregadorluo.jpg',
    bandName: 'Pregador Luo',
    songName: 'Árvore de bons frutos',
    file: 'songs/ÁRVORE DE BONS FRUTOS - PREGADOR LUO.mp3',
},
{
    id: 2,
    imgBand: 'images/soja.jpg',
    bandName: "Soja",
    songName: "True Love",
    file: "songs/Soja - True Love.mp3",
},

{
    id: 3,
    imgBand: 'images/acdc.jpg',
    bandName: "AC/DC",
    songName: "Thunderstruck",
    file: "songs/ACDC - Thunderstruck.mp3",
},
{
    id: 4,
    imgBand: 'images/pregadorluo.jpg',
    bandName: "Pregador Luo",
    songName: "Testemunhe",
    file: "songs/Testemunhe.mp3",
},
{
    id: 5,
    imgBand: 'images/slipknot.png',
    bandName: "Slipknot",
    songName: "Duality",
    file: "songs/Duality.mp3",
},
{
    id: 6,
    imgBand: 'images/soad.jpg',
    bandName: "System of a down",
    songName: "Chop suey",
    file: "songs/Chop Suey.mp3",
},
{
    id: 7,
    imgBand: 'images/linkinpark.jpg',
    bandName: "Linkin Park",
    songName: "Numb",
    file: "songs/Linking Park - Numb.mp3",
},
{
    id: 8,
    imgBand: 'images/50cent.jpg',
    bandName: "50 Cent",
    songName: "P.I.M.P.",
    file: "songs/PIMP.mp3",
},
{
    id: 9,
    imgBand: 'images/janjijohning.jpg',
    bandName: "Janji, Johnning",
    songName: "Heroes Tonight",
    file: "songs/Heroes Tonight.mp3",
},
{
    id: 10,
    imgBand: 'images/andreadjo.jpg',
    bandName: "Andread Jó",
    songName: "Canto",
    file: "songs/Andread Jó - Canto.mp3",
},
{
    id: 11,
    imgBand: 'images/kiss.jpg',
    bandName: "Kiss",
    songName: "Forever",
    file: "songs/Kiss - Forever.mp3",
},
{
    id: 12,
    imgBand: 'images/Soja.jpg',
    bandName: "Soja",
    songName: "Here I Am",
    file: "songs/Here I Am.mp3",
},

]; /* playlistSemanal */


const ulPlaylist = document.querySelector('.playlist-semanal ul'); // lista onde será adicionado a playlistSemanal.



playlistSemanal.forEach((item) =>{
    ulPlaylist.innerHTML += `
    <li> 
    <div class="img-li">
        <img src="${item.imgBand}" alt="">
    </div>
         ${item.bandName} - ${item.songName} 
        <div title="Ouvir" key="${item.id}" class="btn-tocar"><i class="fas fa-play-circle"></i><div>
        <audio class="song" controls>
            <source src="${item.file}">
        </audio>
    </li>
    `;
    
}); // playlistSemanal adicionada no DOM.



const btnTocar = document.querySelectorAll('.btn-tocar');
const song = document.querySelectorAll('.song');
const songPlaying = document.querySelector('.song-playing');
const eventClickBtn = new Event('click');



const playlistImage = document.querySelector('.playlist-principal__img img');
playlistImage.src = playlistSemanal[0].imgBand;
playlistImage.title = playlistSemanal[0].bandName;

btnTocar.forEach((el,index) =>{
    el.addEventListener('click',function(e){
    songPlaying.innerHTML = '';
    songPlaying.style.display = 'block';    
    songPlaying.innerHTML = `
            <div class="container">
            <div class="img-flex">
                <div class="img-band">
                <img src="${playlistSemanal[index].imgBand}" title="${playlistSemanal[index].bandName}">
                </div>
                <div  class="btn-random__music" title="Música aleatória"><i class="fas fa-random"></i></div>
            </div>
            <div class="controls-progress">
                <div class="btn-player">
                    <i class="fas fa-play-circle"></i>
                </div>
                <div class="btn-pause">
                    <i class="fas fa-pause-circle"></i>
                </div>

                <input name="progress" type="range" value="0" min="0" max="${song[index].duration}">
                
                <div class="music-time">

                <div class="time-song__current">
                    <span class="minCurrent">00</span>:<span class="segCurrent">00</span>
                </div>

                <div class="time-song">
                    <span class="min">00</span>:<span class="seg">00</span>
                </div>

                </div>
                
            </div>

            <div class="controls-vol">
                <i class="fas fa-volume-up"></i>
                <input name="audio" type="range" min="0" max="100" value="100">
            </div>
        </div>
        `;
    song[index].play();
    songTime();
    
    const play = document.querySelector('.btn-player');
    const pause = document.querySelector('.btn-pause');
    const progress = document.querySelector('input[name=progress]');
    const vol = document.querySelector('.controls-vol input');
    var minutes = document.querySelector('.min');
    var seconds = document.querySelector('.seg');
    var minCurrent = document.querySelector('.minCurrent');
    var segCurrent = document.querySelector('.segCurrent');
    playlistImage.src = playlistSemanal[index].imgBand;
    playlistImage.title = playlistSemanal[index].bandName;
    
    

    


    
    
    
    //Insere no DOM o tempo da música atual e total
    song.forEach(s =>{
        minutes.innerText = `${(('0' + Math.floor(song[index].duration / 60))).slice(-2)}`;
        seconds.innerText = `${(('0' + Math.floor(song[index].duration % 60))).slice(-2)}`;

        setInterval(() =>{
            minCurrent.innerText = `${(('0' + Math.floor(song[index].currentTime / 60))).slice(-2)}`;
            segCurrent.innerText = `${(('0' + Math.floor(song[index].currentTime % 60))).slice(-2)}`;
        },60);
    })
    
        


    //Evento para atualizar a barra de progresso a cada 1 seg.
    function songTime(){
        const duration = setInterval(() =>{
            progress.value = song[index].currentTime;
            
        },1000);
    }
    
        
    //Evento para atualizar a barra de progresso quando clicada.
    const updateProgressSong = () =>{
        progress.addEventListener('click',() =>{
            song[index].currentTime = progress.value;
        });
    }
    updateProgressSong();
        

    //Evento para pausar a música atual.
    const pauseSong = () =>{
        pause.addEventListener('click',() =>{
            song[index].pause();
            play.style.display = 'block';
            pause.style.display = 'none';
        })
    }   
    pauseSong();           
    

    play.addEventListener('click',() =>{
        song[index].play();
        play.style.display = 'none';
        pause.style.display = 'block';
    })
    
        
    //Evento para salvar o volume atual no Localstorage.
    const saveVolume = () =>{
        song[index].volume = localStorage.getItem('volume');
        vol.value = song[index].volume * 100;
    }
       
    //Evento que modifica o volume da música.
    const volume = () =>{
        vol.addEventListener('click',() =>{
            song[index].volume = (vol.value * 0.01);
            localStorage.setItem('volume', song[index].volume);
        })
    }
    volume();
    saveVolume();
    
        


    //footer.offsetTop - 710

    const footer = document.querySelector('footer');
    window.addEventListener('scroll', () =>{ 
    if(window.scrollY >= footer.offsetTop - 710 && footer.offsetWidth >= 1600){
        
        songPlaying.style.bottom = footer.offsetHeight+'px';
    }else if(window.scrollY >= footer.offsetTop - 410 && footer.offsetWidth <= 1500){
        songPlaying.style.bottom = footer.offsetHeight+'px';
    }else{
        songPlaying.style.bottom = '0'; 
    }
    });
            

        
    });

    song.forEach((s,i) =>{
                            
    const songLoadPlay = () =>{                
        if(s !== song[index]){
            song[index].pause();
            song[index].currentTime = 0;
            song[index].volume = 1.0;   
        }
    }

    const autoPlaySong = () =>{
        i++;
        if(i >= song.length){
            i = 0;
        }

        playlistImage.src = playlistSemanal[i].imgBand;
        playlistImage.title = playlistSemanal[i].bandName;
        btnTocar[i].dispatchEvent(eventClickBtn);          
        i-=1;
    }
    s.addEventListener('playing',songLoadPlay);
    s.addEventListener('ended',autoPlaySong);

        
    });
    
    
    
        
    

});

//O volume da música após a página atualiazar será 100.
song.forEach((s,i) =>{
    localStorage.setItem('volume', s.volume);
    s.volume = localStorage.getItem('volume');
});



    


/*btnRandom.addEventListener('click',(e) =>{
    let btn = e.target;
    btn.classList.add('btnRandomColor');
    s.addEventListener('playing',() =>{
        if(s !== song[index]){
            song[index].pause();
            song[index].currentTime = 0;
            song[index].volume = 1.0;   
        }
        
    });

    s.removeEventListener('playing',songPlaying);
    s.removeEventListener('ended',autoPlaySong);
    s.addEventListener('ended',() =>{
        var generateRandomNum = Math.round(Math.random() * 12);
        if(song[i] == song[generateRandomNum]){
            generateRandomNum = generateRandomNum + generateRandomNum;
            i = i + i;
            console.log(generateRandomNum);
            console.log(i);
        }
        btnTocar[generateRandomNum].dispatchEvent(eventClickBtn);
        console.log(song[generateRandomNum]);
        btn.classList.add('btnRandomColor');
        }) 
})*/


