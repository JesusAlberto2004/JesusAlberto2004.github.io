import { getitems,readitems,Logout } from "./global.js";
const datos=document.getElementById('ctrlreg');
const btnCerrarSesion = document.getElementById('logoutbtn');
const btn2 = document.getElementById('btnsearch')
const boton=document.getElementById('btnback');
const visualizar = document.getElementById('container1')
async function getite(){
    datos.innerHTML=''
    const docref=getitems();
    const querySnapshot=await docref
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}`);
        datos.innerHTML+=`
        <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().tipo}</td>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().precio}</td>
        </tr>
        `
      });
}
window.addEventListener('DOMContentLoaded',async()=>{
    getite();
})
async function getitem(){
  const cd= document.getElementById('edtid').value

  const docRef = readitems(cd)
  const docSnap = await docRef

  if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      let html=""
      html=`
          <div class="card" style="width: 18rem;">
              <img src="${docSnap.data().image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${docSnap.data().nombre}</h5>
                  <p class="card-text">${docSnap.data().tipo}</p>
                  <p class="card-text">${docSnap.data().id}</p>
                  <p class="card-text">${docSnap.data().precio}</p>
              </div>
          </div>
      `
      visualizar.innerHTML=html
  } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
  }
}
window.addEventListener('DOMContentLoaded',async()=>{
  btn2.addEventListener('click',getitem)
})

async function volverinicio(){
    window.location.href="../Templates/pantallainuser.html"
  }
  window.addEventListener('DOMContentLoaded',async()=>{
    boton.addEventListener('click',volverinicio)
  })
