import{UserCreate,Logout,observador} from "./global.js"
const boton3=document.getElementById('btncrear')
const boton=document.getElementById('btnback');
async function registeruser(){
  const user=document.getElementById('emailuser').value
  const pws=document.getElementById('pwuser').value
  const usercon=document.getElementById('emailusercon').value
  const pwscon=document.getElementById('pwusercon').value
    
  if(user==usercon && pws==pwscon){
    try{
      const userCredential= await UserCreate(user,pws)
      const user1 = userCredential.user;
      console.log(user1)
      alert("usuario registrado")
      window.location.href="/Templates/menuprin.html"
      
    }catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage)
      alert(errorMessage)
      // ..
    };
  }else{
    alert("El usuario o la contraseña no son la mismas")
  }
}
window.addEventListener('DOMContentLoaded',async()=>{
  boton3.addEventListener('click',registeruser)
})

async function back(){
  window.location.href="/Templates/menuprin.html"
}
window.addEventListener('DOMContentLoaded',async()=>{
  boton.addEventListener('click',back)
})