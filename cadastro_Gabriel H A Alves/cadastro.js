function algo () {
var btn = document.querySelector('#verSenha')
var btnConfirm = document.querySelector('#verConfirmSenha')


var nome = document.querySelector('#nome')
var labelNome = document.querySelector('#labelNome')
var validNome = false

var usuario = document.querySelector('#usuario')
var labelUsuario = document.querySelector('#labelUsuario')
var validUsuario = false

var senha = document.querySelector('#senha')
var labelSenha = document.querySelector('#labelSenha')
var validSenha = false

var confirmSenha = document.querySelector('#confirmSenha')
var labelConfirmSenha = document.querySelector('#labelConfirmSenha')
var validConfirmSenha = false

var msgError = document.querySelector('#msgError')
var msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})
}
function cadastro(){ 

  var msgError = document.querySelector('#msgError')
  var msgSuccess = document.querySelector('#msgSuccess')
  var validNome = false
  var validUsuario = false
  var validSenha = false
  var validConfirmSenha = false

  
    if(nome.value.length <= 2){
      labelNome.setAttribute('style', 'color: red')
      labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
      nome.setAttribute('style', 'border-color: red')
      validNome = false
    } else {
      labelNome.setAttribute('style', 'color: green')
      labelNome.innerHTML = 'Nome'
      nome.setAttribute('style', 'border-color: green')
      validNome = true
    }
 
  
  
    if(usuario.value.length <= 4){
      labelUsuario.setAttribute('style', 'color: red')
      labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
      usuario.setAttribute('style', 'border-color: red')
      validUsuario = false
    } else {
      labelUsuario.setAttribute('style', 'color: green')
      labelUsuario.innerHTML = 'Usuário'
      usuario.setAttribute('style', 'border-color: green')
      validUsuario = true
    }
 
  
  
    if(senha.value.length <= 5){
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
      senha.setAttribute('style', 'border-color: red')
      validSenha = false
    } else {
      labelSenha.setAttribute('style', 'color: green')
      labelSenha.innerHTML = 'Senha'
      senha.setAttribute('style', 'border-color: green')
      validSenha = true
    }
 
  
 
    if(senha.value != confirmSenha.value){
      labelConfirmSenha.setAttribute('style', 'color: red')
      labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
      confirmSenha.setAttribute('style', 'border-color: red')
      validConfirmSenha = false
    } else {
      labelConfirmSenha.setAttribute('style', 'color: green')
      labelConfirmSenha.innerHTML = 'Confirmar Senha'
      confirmSenha.setAttribute('style', 'border-color: green')
      validConfirmSenha = true
    }
 
  
 
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  
  
  
    let inputConfirmSenha = document.querySelector('#confirmSenha')
    
    if(inputConfirmSenha.getAttribute('type') == 'password'){
      inputConfirmSenha.setAttribute('type', 'text')
    } else {
      inputConfirmSenha.setAttribute('type', 'password')
    }
  


  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
 
    
    setTimeout(()=>{
        window.location.href = 'https://login.gfoousz.repl.co/'
    }, 3000)
  
    
  } 
}
