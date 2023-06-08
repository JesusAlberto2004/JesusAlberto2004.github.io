import { readuser, updateuser } from "./global.js";

const actualizar = document.getElementById('btndoc')
const visualizar = document.getElementById('container1')

async function actdetails(){
    const ced= document.getElementById('edtdoc').value

    const docRef = readuser(ced)
    const docSnap = await docRef

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let html=""
        html=`
            <Label>Nombre</Label>
            <input type="text" id="edtnombre" value="${docSnap.data().fisrt}" name="date1">
            <Label>Apellido</Label>
            <input type="text" id="edtapellido" value="${docSnap.data().last}" name="date2">
            <Label>Telefono</Label>
            <input type="text" id="edtphone" value="${docSnap.data().phone}" name="date3" >
            <button class="btn-update" data-id="${docSnap.data().id}">Actualizar</button>

        `
        visualizar.innerHTML=html
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

    async function generar(){
        const componente = visualizar.querySelector('.btn-update');
    }
    var cid=''
    var componente = visualizar.querySelector('.btn-update');

    componente.addEventListener('click',({target: { dataset }})=>{
        cid=dataset.id
        var n = $("input[type=text][name=date1]").val();
        var l = $("input[type=text][name=date2]").val();
        var p = $("input[type=text][name=date3]").val();
        if(n)
        {
            updateuser(cid,n,l,p) 
            alert("El registro se actualizo")

        }
        else{
            alert('not update');
            
        }
               
      });
      
}

window.addEventListener('DOMContentLoaded',async()=>{
    actualizar.addEventListener('click',actdetails)
}) 