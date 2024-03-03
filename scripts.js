const form = document.getElementById("form")
const nome =document.getElementById("nome")
const email =document.getElementById("email")
const mensagem =document.getElementById("mensagem")

form.addEventListener("submit",(e) =>{
  e.preventDefault();

  checkInputs();
});

function checkInputs(){
  const nomeValue = nome.value;
  const emailValue = email.value;
  const mensagemValue = mensagem.value;

if (nomeValue === "") {
    setErrorFor(nome, "Campo Nome obrigatório.");
  } else {
    setSuccessFor(nome);
  }
if (emailValue === "") {
    setErrorFor(email, "Campo e-mail obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }
if (mensagemValue === "") {
    setErrorFor(mensagem, "Mensagem obrigatória.");
  } else {
    setSuccessFor(mensagem);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

small.innerText = message;

formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

formControl.className = "form-control success";
}


function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
