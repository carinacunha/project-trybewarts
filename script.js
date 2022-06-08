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

const buttonSubmit = document.getElementById('submit-btn');
const checkInfo = document.getElementById('agreement');
function enable() {
  buttonSubmit.disabled = !checkInfo.checked;
}

checkInfo.addEventListener('change', enable);

const textbox = document.getElementById('textarea');
const counter = document.getElementById('counter');
textbox.onkeyup = (e) => {
  counter.innerHTML = `${500 - e.target.value.length} caracteres restantes.`;
};
