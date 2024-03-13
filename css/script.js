
const datos = {
    nombre: "",
    email: "",
    mensaje: "",
}
const nombre = document.querySelector('#nombre')
console.log(nombre)
const email= document.querySelector('#email')
const mensaje=document.querySelector('#mensaje')
console.log(mensaje)
const form = document.querySelector('.formulario')
console.log(form)
function leerTexto(e){
    datos[e.target.id]=e.target.value;
     console.log(datos)
 }
 nombre.addEventListener('input',leerTexto)
 email.addEventListener('input',leerTexto)
 mensaje.addEventListener('input',leerTexto)
 
 
 
 form.addEventListener('submit',function(e){
     e.preventDefault()
     //Comprobar que no haya campos en datos vacio
     const {nombre,email,mensaje}=datos;
     // console.log(nombre)
 
     if(nombre==="" || email===""|| mensaje===""){
         //si esta vacio algun campo mostrar error
         // mostrarError("Todos los campos son obligatorio")
         mostrarInfo("error, introduce informacion",'error')
         console.log('error')
         // return 
     }else{
         console.log('correcto')
         console.log("ahora si para")
         // mostrarMensaje("mensaje enviado correctamente")
         mostrarInfo("enviado correctamente",'correcto')
     }
 
     //si todo esta correcto enviar y mostrar mensaje de enviado
 
     
 })
 function mostrarInfo(mensaje,clase){
     const alerta = document.createElement('p')
     alerta.textContent=mensaje
     alerta.classList.add(clase)
     form.appendChild(alerta)
 
     desaparecer(alerta)
     // setTimeout(()=>{
     //     alerta.remove();
     // },2000)
 
 }
 
 function desaparecer(e){
     var efecto = setInterval(function(){
         if(!e.style.opacity){
             e.style.opacity=1;
         }
         if(e.style.opacity>0){
             e.style.opacity-=0.01
         }else{
             clearInterval(efecto)
         }},50)
 
         setTimeout(()=>{
         e.remove()
         },5000)
     }
 