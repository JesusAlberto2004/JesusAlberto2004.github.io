import { additems, getitems } from "./global.js";
const formulario = document.getElementById('regusers') 
const datos=document.getElementById('ctrlreg');
const boton=document.getElementById('btnback');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const Id= formulario['id']
    const tipo = formulario['tipe']
    const nombre= formulario['name']
    const prec = formulario['precio']
    const img= formulario['response']
    additems(
        Id.value,
        tipo.value,
        nombre.value,
        prec.value,
        img.value
        )
        alert('Producto registrado')
})
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

async function volverinicio(){
    window.location.href="../Templates/menuprin.html"
  }
  window.addEventListener('DOMContentLoaded',async()=>{
    boton.addEventListener('click',volverinicio)
  })
