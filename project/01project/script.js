const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {

    switch (e.target.id) {
      case 'pink':
      case 'blue':
      case 'yellow':
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'white';
        break;
    }
  });
});

const Rbutton = document.querySelector('.z');
Rbutton.addEventListener('click', () => {
  body.style.backgroundColor = 'white';
});
