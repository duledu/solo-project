var hasOpenCard = false;
var oneCard, secondCard;
var freezeCard = false;

var cards = document.querySelectorAll('.memory-card');


function flipCard() {
  if (freezeCard) return;
  if (this === oneCard) return;
  this.classList.add('flip');

  if (!hasOpenCard) {
// click one
    hasOpenCard = true;
    oneCard = this;
  } else {
// click two

    secondCard = this;
    Matching();

  }
}

function Matching() {

      if (oneCard.dataset.framework === secondCard.dataset.framework) {
       disableCards();

      } else {
        notMach();
      }
    };

     function disableCards() {
       oneCard.removeEventListener('click', flipCard);
       secondCard.removeEventListener('click', flipCard);
       reset();


     };

     function notMach() {

      freezeCard = true;
       setTimeout(function () {
         oneCard.classList.remove('flip');
         secondCard.classList.remove('flip');
      reset();
       },1250);

     };

     function reset() {
       hasOpenCard = false;
       freezeCard = false;
       oneCard = null;
       secondCard = null;

     }

     (function shuffe() {
       cards.forEach(card => {
         var randomPos = Math.floor(Math.random() * 16);
         card.style.order = randomPos;
       });

     })();

cards.forEach(card => card.addEventListener('click', flipCard));
beat();

function beat() {
  setInterval(function () {
    $('.game-name').addClass('animated pulse')

  },2000)

  setInterval(function () {
    $('.game-name').removeClass('animated pulse')

  },5000)

};
