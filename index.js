let pantalla = document.getElementById('display');
let buttons = document.querySelectorAll('.key-operation');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent === '←') {
      pantalla.textContent = pantalla.textContent.slice(0, -1);
      if (pantalla.textContent === '') {
        pantalla.textContent = '0';
      }
      return;
    }

    if (button.textContent === '=') {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = 'Error';
      }
      return;
    }

    if (button.textContent === 'C') {
      pantalla.textContent = '0';
      return;
    }

    if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
      pantalla.textContent = button.textContent;
    } else {
      pantalla.textContent += button.textContent;
    }
  });
});
