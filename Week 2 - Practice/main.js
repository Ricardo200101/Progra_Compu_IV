//Constante del boton ocultar y el div

const hidebtn = document.querySelector('#hideElements')
const listdiv = document.querySelector('#list')

//Agregar evento al boton hidebtn
hidebtn.addEventListener('click', ()=>{
    //alert('hola')
    if(listdiv.style.display == 'none'){
        listdiv.style.display = 'Block'
        hidebtn.textContent = 'Ocultar'
    }else{
        listdiv.style.display = 'none'
        hidebtn.textContent = 'Mostrar'
    }
})


//Agregar elementos a la lista 
const addItemInpu = document.querySelector('#addItem')
const addItemButton = document.querySelector('button#addItemButton')

addItemButton.addEventListener('click', () =>{
    let list = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = addItemInpu.value 
    list.appendChild(li)
})
