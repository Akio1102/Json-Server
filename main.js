import {
  POSTUsers,
  GETUsers,
  PUTUsers,
  DELETEUsers,
} from "./back/peticiones.js";
let myForm = document.querySelector(`#myForm`);
let myData = document.querySelector(`#myData`);
let btnMostrar = document.querySelector(`#mostrar`);
let inputId = document.querySelector("#inputID");
let inputNombre = document.querySelector("#floatingName");
let inputApellido = document.querySelector("#floatingLastName");
let inputEdad = document.querySelector("#floatingAge");
let inputDireccion = document.querySelector("#floatingAddress");
let tabla = document.querySelector("#myData");

myForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let accion = e.submitter.dataset.accion;
  if (accion === "enviar") {
    POSTUsers(e);
  } else if (accion === "editar") {
    console.log(e);
    PUTUsers(e);
  } else {
    alert(`No se puede agregar Datos Vacios`);
  }
});

btnMostrar.addEventListener("click", async (e) => {
  e.preventDefault();
  let accion = await e.target.dataset.accion;
  tabla.innerHTML = "";
  if (accion === "listar") {
    GETUsers();
  }
});

myData.addEventListener("click", (e) => {
  e.preventDefault();
  let accion = e.target.dataset.accion;
  let contenedor = e.target.closest(`.tr`);
  let ide = contenedor.getAttribute(`id`);
  let id = e.target.parentElement.parentElement;

  switch (accion) {
    case "modificar":
      let identificador = id.childNodes[1].innerText;
      let nombre = id.childNodes[3].innerText;
      let apellido = id.childNodes[5].innerText;
      let edad = id.childNodes[7].innerText;
      let direccion = id.childNodes[9].innerText;
      inputId.value = identificador;
      inputNombre.value = nombre;
      inputApellido.value = apellido;
      inputEdad.value = edad;
      inputDireccion.value = direccion;
      break;
    case "eliminar":
      DELETEUsers(contenedor, ide);
      alert(`Usuario Borrado`);
      break;
  }
});
