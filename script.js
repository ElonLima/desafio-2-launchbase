const modalOverlay = document.querySelector('.modal-overlay');
const trilhas = document.querySelectorAll('.trilha');
const modal = document.querySelector('.modal');

for (let trilha of trilhas) {
    trilha.addEventListener("click", function(){
        const videoId = trilha.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ``
    modal.classList.remove('maximize')
})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    if(!modal.classList.contains('maximize')){
        modal.classList.add('maximize')
    }
})
