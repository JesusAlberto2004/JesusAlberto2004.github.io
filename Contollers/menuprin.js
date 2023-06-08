const boton=document.getElementById('btnver');
const boton2=document.getElementById('btnnewit');
const boton3=document.getElementById('btncrearus');
const boton4=document.getElementById('btnnewemp');

async function ver(){
    window.location.href="/Templates/vistauser.html"

}
window.addEventListener('DOMContentLoaded',async()=>{
    boton.addEventListener('click',ver)
  })
  async function newitem(){
    window.location.href="/Templates/reg_productos.html"

}
window.addEventListener('DOMContentLoaded',async()=>{
    boton2.addEventListener('click',newitem)
  })
  async function newus(){
    window.location.href="/Templates/creacionperfiles.html"
}
window.addEventListener('DOMContentLoaded',async()=>{
    boton3.addEventListener('click',newus)
  })

  async function newemp(){
    window.location.href=" /Templates/reg_empleado.html"
}
window.addEventListener('DOMContentLoaded',async()=>{
    boton4.addEventListener('click',newemp)
  })