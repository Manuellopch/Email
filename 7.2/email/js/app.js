// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const enviar = document.getElementById('enviar');
const formulario = document.querySelector('#enviar-mail');
const BtnReset = document.querySelector('#resetBtn');
//const EnviarEmail = document.getElementById('enviar-mail');
//Event Listeners
EventListener();
function EventListener(){
     //desabilitar boton
     document.addEventListener('DOMContentLoaded', desabilitarBtn);
     //campos del formulario
     email.addEventListener('blur', CamposForm);
     asunto.addEventListener('blur', CamposForm);
     mensaje.addEventListener('blur', CamposForm);
     //boton enviar en el submit
     enviar.addEventListener('click', enviarEmail);
     //EnviarEmail.addEventListener('submit', enviarEmail);
     BtnReset.addEventListener('click', ResetearForm);
}
//Funciones
function desabilitarBtn(){
     //desabilitar boton enviar porque los campos estan vacios
     enviar.disabled = true;
}
function CamposForm(){
     //se valida la longitud del texto para verificar que hay escrito
     ValidarLongitud(this);
     if(this.type === 'email'){
          validarEmail(this);
     }
     let errores = document.querySelectorAll('.error');
     if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
          if(errores.length === 0){
               enviar.disabled = false;
          } 
     }
}
function ValidarLongitud(campo){
     console.log(campo.value.length);
     if(campo.value.length > 0){
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     }else{
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}
function validarEmail(campo){
     const mensaje = campo.value;
     if(mensaje.indexOf('@') !== -1 ){
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     }else{
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
};
function enviarEmail(e){
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'block';
     const enviado = document.createElement('img');
     enviado.src = 'img/mail.gif';
     enviado.style.display = 'block'; 
     // ocultar spinner y mostrar gif enviado
     setTimeout(function(){
          spinner.style.display = 'none';
          document.querySelector('#loaders').appendChild(enviado);
          setTimeout(function(){
               enviado.remove();
               formulario.reset();
          },5000);
     },3000);
     e.preventDefault();
     desabilitarBtn();
     
}
function ResetearForm(e){
     formulario.reset();
     e.preventDefault();

}