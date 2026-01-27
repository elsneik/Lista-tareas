/* REFERENCIAS DEL DOOM */

const tareaEntrada = document.getElementById('tareaEntrada');
const botonAgregar = document.getElementById('botonAgregar');
const contenedorTareas = document.getElementById("contenedorTareas");
const mensaje = document.getElementById("mensaje");


/* FUNCIÓN PARA CREAR EL ELEMENTO TAREA (FUNCIÓN CREADORA DE NODO) */

function crearElementoTarea() {
  // Crear los elementos html de la tarea
  const tareaContenedor = document.createElement('div');
  const tareaTexto = document.createElement('p');
  const iconosContenedor = document.createElement('div');
  const iconoCompletada = document.createElement('i');
  const iconoEliminar = document.createElement('i');

  // CREAR LA ESTRUCTURA DE LA TAREA

  iconosContenedor.append(iconoCompletada, iconoEliminar);
  tareaContenedor.append(tareaTexto, iconosContenedor);



  // AGREGAMOS LAS CLASES A LOS ELEMENTOS DE LA TAREA

  tareaContenedor.classList.add('tarea');
  tareaTexto.classList.add('tarea-texto');
  iconosContenedor.classList.add('tarea-iconos');
  iconoCompletada.classList.add('bi', 'bi-patch-check');
  iconoEliminar.classList.add('bi', 'bi-trash2');


  // AGREGAMOS EL TEXTO DEL USUARIO

  tareaTexto.innerText = tareaEntrada.value;

  //ESCUCHADORE DE LOS ICONOS
  iconoCompletada.addEventListener("click" , (e) => {
    //codigo que se ejecuta
       const tareaElemento = e.target.parentNode.parentNode;
       const esCompletada = tareaElemento.classList.contains("tarea-completada");

    tareaElemento.classList.toggle("tarea-completada");
    if(esCompletada)
    {
      e.target.classList.remove("bi-dash-circle");
      e.target.add("bi-check-circle");
    } else{
e.target.classList.remove("bi-check-circle");
e.target.classList.add("bi-dash-circle");
    }

 
  })
  
  iconoEliminar.addEventListener("click" , (e) => {
    //codigo que se ejecuta
   const tareaElemento = e.target.parentNode.parentNode;
   tareaElemento.remove();
  })

  // RETORNAMOS LA ESTRUCTURA DE LA TAREA

  return tareaContenedor;


}
/* ESCUCHADOR  BOTON*/

botonAgregar.addEventListener('click', agregarTarea);

// FUNCION AGREGAR AL ELEMENTO TAREA

function agregarTarea() {

  const texto = tareaEntrada.value.trim();




  if (texto) {
    const elementoTarea = crearElementoTarea();
    contenedorTareas.append(elementoTarea);
    tareaEntrada.value = "";
    tareaEntrada.value = "";
    mensaje.textContent = "tarea creada correctamente";
  }





  else {
    mensaje.textContent = "porfavor escribe algo";
  }



  //Reiniciar el value

  tareaEntrada.value = "";
}



/* Hacemos que al presionar la tecla enter en el input se cree la tarea       */


tareaEntrada.addEventListener("keydown", (e) => {

  //evaluar tecla presionada
  if (e.key == "Enter")

    agregarTarea();
})


