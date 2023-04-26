const formulario = document.querySelector('.trybewarts-login');
const email = document.querySelector('.Email');
const password = document.querySelector('.senha');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
