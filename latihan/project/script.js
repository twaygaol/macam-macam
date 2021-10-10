const closedface = document.querySelector('.closed');
const openvideo = document.querySelector('.open');


closedface.addEventListener('click' , () => {
    if(openface.classList.contains('open')){
       openface.classList.add('active');
        closedface.classList.remove('active');
    }
})

openvideo.addEventListener('play' , () => {
    if(closedface.classList.contains('closed')){
        closedface.classList.add('active');
        openvideo.classList.remove('active');
    }
})