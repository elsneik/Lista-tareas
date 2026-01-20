/* REFERENCIAS DEL DOOM */

const tareaEntrada = document.getElementById('tareaEntrada');
const botonAgregar = document.getElementById('botonAgregar');
const contenedorTareas = document.getElementById("contenedorTareas");


/* FUNCIÓN PARA CREAR EL ELEMENTO TAREA (FUNCIÓN CREADORA DE NODO) */

function crearElementoTarea() {
  // Crear los elementos html de la tarea
  const tareaContenedor = document.createElement('div');
  const tareaTexto = document.createElement('p');
  const iconosContenedor = document.createElement('div');
  const iconoCompletada = document.createElement('i');
  const iconoEliminar = document.createElement('i');

  // CREAR LA ESTRUCTURA DE LA TAREA

  iconosContenedor.append(iconoCompletada , iconoEliminar);
  tareaContenedor.append(tareaTexto , iconosContenedor);



  // AGREGAMOS LAS CLASES A LOS ELEMENTOS DE LA TAREA

  tareaContenedor.classList.add('tarea');
  tareaTexto.classList.add('tarea-texto');
  iconosContenedor.classList.add('tarea-iconos');
  iconoCompletada.classList.add('bi' , 'bi-patch-check');
  iconoEliminar.classList.add('bi' , 'bi-trash2');


  // AGREGAMOS EL TEXTO DEL USUARIO

  tareaTexto.innerText = tareaEntrada.value;

  // RETORNAMOS LA ESTRUCTURA DE LA TAREA

return tareaContenedor;


}
/* ESCUCHADOR */

botonAgregar.addEventListener('click', agregarTarea);

// FUNCION AGREGAR AL ELEMENTO TAREA

function agregarTarea() {
    const elementoTarea = crearElementoTarea();
    contenedorTareas.append(elementoTarea);

    //Reiniciar el value

    tareaEntrada.value = "";
}