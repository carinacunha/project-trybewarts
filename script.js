const buttonSend = document.getElementById('button');

function alertMessage() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email !== 'tryber@teste.com' || senha !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
buttonSend.addEventListener('click', alertMessage);
