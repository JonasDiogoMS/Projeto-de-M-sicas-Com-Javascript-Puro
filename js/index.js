const allSongs = [
    {
        id: 0,
        nameArtist: `Guns N' Roses`,
        imgArtist: 'images/guns.jpg',
        songName: 'Patience',
        source: `
        <video controls autoplay>
            <source src="videos/Guns N' Roses - Patience.mp4">
        </video>`,
        letra: `
        <p>One, two, one, two, three, four</p>
        <p>Shed a tear 'cause I'm missing you<br>I'm still alright to smile<br>Girl, I think about you every day now<br>Was a time when I wasn't sure<br>But you set my mind at ease<br>There is no doubt you're in my heart now</p>
        <p>Said: Woman, take it slow<br>And it'll work itself out fine<br>All we need is just a little patience<br>Said: Sugar, make it slow<br>And we'll come together fine<br>All we need is just a little patience<br>Patience</p>
        <p>I sit here on the stairs<br>'Cause I'd rather be alone<br>If I can't have you right now I'll wait, dear<br>Sometimes I get so tense<br>But I can't speed up the time<br>But you know, love, there's one more thing to consider</p>
        <p>Said: Woman, take it slow<br>And things will be just fine<br>You and I'll just use a little patience<br>Said: Sugar, take the time<br>'Cause the lights are shining bright<br>You and I've got what it takes to make it</p>
        <p>We won't fake it<br>I'll never break it<br>'Cause I can take it</p>
        <p>Little patience<br>Need a little patience<br>Just a little patience<br>Some more patience</p>
        <p>I've been walking the streets at night<br>Just trying to get it right (need some patience)<br>It's hard to see with so many around<br>You know, I don't like being stuck in the crowd<br>(Could use some patience)</p>
        <p>And the streets don't change but, baby, the names<br>I ain't got time for the game<br>(Gotta have some patience)<br>'Cause I need you<br>But I need you (all it takes is patience)</p>
        <p>I need you (just a little patience)<br>I need you (is all you need)<br>This time</p>
        `,
    },
    {
        id: 1,
        nameArtist: `Guns N' Roses`,
        imgArtist: 'images/guns.jpg',
        songName: `knockin' on heaven's door`,
        source: `
        <video controls autoplay>
            <source src="videos/Guns N' Roses - Knockin' On Heaven's Door.mp4">
        </video>`,
        letra: `
        <p>Mama, take this badge from me<br>I can't use it anymore<br>It's getting dark, too dark to see<br>Feels like I'm knockin' on heaven's door</p>
        <p>Knock, knock, knockin' on heaven's door<br>Hey, hey, hey, hey, yeah</p>
        <p>Knock, knock, knockin' on heaven's door<br>Knock, knock, knockin' on heaven's door<br>Knock, knock, knockin' on heaven's door</p>
        <p>Mama, put my guns in the ground<br>I can't shoot them anymore<br>That cold black cloud is coming down<br>Feels like I'm knockin' on heaven's door</p>
        <p>Knock, knock, knockin' on heaven's door<br>Hey, hey, hey, hey, yeah</p>
        <p>Knock, knock, knockin' on heaven's door<br>Knock, knock, knockin' on heaven's door<br>Knock, knock, knockin' on heaven's door</p>
        <p>(You just better start sniffing<br>Your own rank subjugation, Jack<br>'Cause it's just you against<br>Your tattered libido<br>The bank and the mortician, forever, man<br>And it wouldn't be luck<br>If you could get out of life alive)</p>
        <p>Knock, knock, knockin' on heaven's door<br>Hey, hey, hey, hey, yeah<br>(Knock, knock, knockin' on heaven's door)</p>
        <p>Knock, knock, knockin' on heaven's door<br>(Knock, knock, knockin' on heaven's door)<br>Knock, knock, knockin' on heaven's door<br>(Knock, knock, knockin' on heaven's door)<br>Knock, knock, knockin' on heaven's door<br>(Knock, knock, knockin' on heaven's door)</p>
        <p>Knock, knock, knockin' on heaven's door<br>Knock, knock, knockin' on heaven's door<br>Knock, knock, knockin' on heaven's door<br>Knock, knock, knockin' on heaven's door</p>
        `,
    },
    {
        id: 2,
        nameArtist: `AC/DC`,
        imgArtist: 'images/acdc.jpg',
        songName: `Highway to Hell`,
        source: `<video controls autoplay="" >
                <source src="videos/acdc highway to hell.mp4">
                </video>`,
        letra: `
        <p>Living easy, livin' free<br>Season ticket, on a one way ride<br>Asking nothing, leave me be<br>Taking everything in my stride</p>
        <p>Don't need reason, don't need rhyme<br>Ain't nothin' that I’d rather do<br>Going down, party time<br>My friends are gonna be there too</p>
        <p>I'm on the highway to hell<br>On the highway to hell<br>Highway to hell<br>I'm on the highway to hell</p>
        <p>No stop signs, speed limit<br>Nobody's gonna slow me down<br>Like a wheel, gonna spin it<br>Nobody's gonna mess me 'round</p>
        <p>Hey, satan!<br>Paid my dues<br>Playin' in a rockin' band<br>Hey mama! Look at me<br>I'm on my way to the promised land</p>
        <p>I'm on the highway to hell<br>Highway to hell<br>I'm on the highway to hell<br>Highway to hell</p>
        <p>Don't stop me!</p>
        <p>I'm on the highway to hell<br>On the highway to hell<br>I'm on the (highway to hell)<br>On the highway (to hell)<br>Highway to hell<br>I'm on the highway to hell<br>Highway to hell<br>Highway to hell<br>Highway to hell</p>
        <p>Yeah I'm going down all the way<br>On the highway to hell</p>
        `,
    },
    {
        id: 3,
        nameArtist: `AC/DC`,
        imgArtist: 'images/acdc.jpg',
        songName: `Thunderstruck`,
        source: `songs/ACDC - Thunderstruck.mp3`,
        letra: ``,
    },
    {
        id: 4,
        nameArtist: `Iron Maiden`,
        imgArtist: 'images/Iron-Maiden.jpg',
        songName: `Fear of the Dark`,
        source: `<video controls autoplay="" src="videos/videoplayback.mp4"></video>`,
        letra: ``,
    },
];

const maisOuvidas = document.querySelector('.sessao-principal__musicas');

allSongs.forEach((song) =>{
    maisOuvidas.innerHTML += `
    <div class="box-sigle">
        <div class="img-sigle">
            <img src="${song.imgArtist}" title="${song.nameArtist}">
            </div>
            <div class="info-flex">
            <div class="artista-musica">
                <h2>${song.songName}</h2>
                <p>${song.nameArtist}</p>
            </div>
            <div class="btn-ouvir">
                <a class="btn-play" href="#" title="Ouvir"><i class="fas fa-play-circle"></i></a>
            </div>
        </div>
    </div>
    `;

    
})


const musicaOverlay = document.querySelector('.musica-overlay');
const overlayVideo = document.querySelector('.overlay-video');
const source = document.querySelector('.overlay-video');


const musicaLetra = document.querySelector('.musica-letra');

const btnPlay = document.querySelectorAll('.btn-play');
const btnFechar = document.querySelector('.btn-fechar');

btnPlay.forEach((item,pos) =>{
    item.addEventListener('click',(e) =>{
        e.preventDefault();
        musicaOverlay.style.display = 'block';
        source.innerHTML = `${allSongs[pos].source}`;
        musicaLetra.innerHTML = `
        <h2>${allSongs[pos].nameArtist}</h2>
        <h3>${allSongs[pos].songName}</h3>
        <p>${allSongs[pos].letra}</p>`;
    });

    btnFechar.addEventListener('click',() =>{
        musicaOverlay.style.display = 'none';
        source.innerHTML = '';
        musicaLetra.innerHTML = '';
    })
    
    overlayVideo.addEventListener('blur',() =>{
        musicaOverlay.style.display = 'none';
    })
})

