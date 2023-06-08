import{login_auth,readuser} from "./global.js"

const boton=document.getElementById('btnlogin');
const boton2=document.getElementById('btnloginF');
const boton3=document.getElementById('btncrea');
const boton4=document.getElementById('btnproducto')

async function validar(){
    const user=document.getElementById('emailuser').value
    const pws=document.getElementById('pwuser').value
    const docRef = readuser(user)
    const docSnap = await docRef

    const sesion=login_auth(user,pws)
    const confirmacion= await sesion
    .then((confirmacion) => {
      alert("El usuario: "+user+" existe")
      window.location.href="../Templates/menuprin.html"
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let html=""
        visualizar.innerHTML=html
      }else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!")
      window.location.href="/Templates/vistauser1.html"
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("El usuario: "+user+" no existe")
    });
  }
window.addEventListener('DOMContentLoaded',async()=>{
  boton.addEventListener('click',validar)
})

async function registeruser(){
  window.location.href="../Templates/creacionperfiles.html"
}
window.addEventListener('DOMContentLoaded',async()=>{
  boton3.addEventListener('click',registeruser)
})
async function produc(){
  window.location.href="../Templates/productos.html"
}
window.addEventListener('DOMContentLoaded',async()=>{
  boton4.addEventListener('click',produc)
})