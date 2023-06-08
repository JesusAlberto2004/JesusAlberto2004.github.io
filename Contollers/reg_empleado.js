import { adduser,UserCreate,getsers } from "./global.js";
const formulario=document.getElementById('regusers')
const datos=document.getElementById('ctrlreg')
const resetear=formulario.reset();
const btn=document.getElementById('btnback');

async function getall(){
    datos.innerHTML=''
    const docref=getsers();
    const querySnapshot=await docref
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}`);
        datos.innerHTML+=`
        <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().first}</td>
            <td>${doc.data().last}</td>
            <td>${doc.data().phone}</td>
        </tr>
        `
      });
}
window.addEventListener('DOMContentLoaded',async()=>{
    getall();
})
formulario.addEventListener('submit',async (e)=>{
    e.preventDefault()
        const user=document.getElementById('emailuser').value
        const pws=document.getElementById('pwuser').value
        const usercon=document.getElementById('emailusercon').value
        const pwscon=document.getElementById('pwusercon').value
        if(user==usercon && pws==pwscon){
            try{
                const Id= formulario['emailuser']
                const primer=formulario['fname']
                const segundo=formulario['lname']
                const tel=formulario['phone']
                const img= formulario['response']
              const userCredential= await UserCreate(user,pws)
              const user1 = userCredential.user;
              console.log(user1)
              alert("usuario registrado")
                  adduser(Id.value,primer.value,segundo.value,tel.value,img.value)
                  alert('Usuario '+ primer.value +' registrado')
                  resetear
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
    
})
async function volverinicio(){
    window.location.href="../Templates/menuprin.html"
  }
  window.addEventListener('DOMContentLoaded',async()=>{
    btn.addEventListener('click',volverinicio)
  })


