const card = document.querySelector('.card__inner');
if(card!=null) {
    card.addEventListener('click', function (){
        card.classList.toggle('is-flipped');
    });
}