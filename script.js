// First event reaction
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

// Second event reaction
const buttonSubmit = document.getElementById('submit-btn');
const checkInfo = document.getElementById('agreement');
function enable() {
  buttonSubmit.disabled = !checkInfo.checked;
}

checkInfo.addEventListener('change', enable);

// Third event reaction
const textbox = document.getElementById('textarea');
const counter = document.getElementById('counter');
textbox.onkeyup = (e) => {
  counter.innerHTML = `${500 - e.target.value.length} caracteres restantes.`;
};

// Get elements
const originalForm = document.getElementById('evaluation-form');
const finalForm = document.getElementById('form-data');
const family = [...document.getElementsByClassName('family')];
const evaluation = [...document.getElementsByClassName('eval')];
const subjects = [...document.getElementsByClassName('subject')];

// eslint-disable-next-line max-lines-per-function
buttonSubmit.addEventListener('click', (event) => {
  const resultFamily = family.find((element) => element.checked).value;
  const resultEval = evaluation.find((element) => element.checked).value;
  const selectedSubjects = subjects.filter((element) => element.checked);
  const resultSubjects = selectedSubjects.map((element) => element.value).join(', ');

  finalForm.innerText = `Nome: ${document.getElementById('input-name').value} \
  ${document.getElementById('input-lastname').value}\n
  Email: ${document.getElementById('input-email').value}\n
  Casa: ${document.getElementById('house').value}\n
  Família: ${resultFamily}\n
  Matérias: ${resultSubjects}\n
  Avaliação: ${resultEval}\n
  Observações: ${document.getElementById('textarea').value}`;

  originalForm.style.display = 'none';
  event.preventDefault();
});
