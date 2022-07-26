const btnPost = document.querySelector('.feed-video');
const modalUser = document.querySelector('.modal-archive');
const modalUserText = document.querySelector('.modal-text');
const file = document.querySelector('input[type=file]');
const form = document.querySelector('.modal-form form');
const formArchive = document.querySelector('input[name=post-archive]');
const formText = document.querySelector('.modal-form form textarea');
const publicade = document.querySelector('.publicades');



btnPost.addEventListener('click',() =>{
    modalUser.style.display = 'block';
});

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    publicade.innerHTML+=`
    <div class="publicade-archive">
        <div class="publicade__imguser">
        <div class="img-publicade-user">
            <img src="../images/acdc.jpg" alt="">
        </div>
        <p>Jonas Diogo</p>
        </div>
        <div class="publicade-img">
            <img src="${formArchive.value}" alt="">
        </div>
        <div class="publicade-text">
            <p>${formText.value}</p>
        </div>
    </div>
    `
    modalUser.style.display = 'none';
})



