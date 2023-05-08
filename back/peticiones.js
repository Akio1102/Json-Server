const URL = `http://localhost:3000`;
import { Fila } from "../components/tr.js";

const headers = new Headers({ "Content-Type": "application/json" });

export async function GETUsers() {
  let peticion = await fetch(`${URL}/user`);
  let datos = await peticion.json();
  if (datos == false) {
    alert(`No hay Datos`);
  } else {
    datos.forEach((ele) => {
      Fila(ele);
    });
  }
}

export async function POSTUsers(event) {
  let data = Object.fromEntries(new FormData(event.target));
  let config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  };
  let peticion = await fetch(`${URL}/user`, config);
  datos = await peticion.json();
}

export async function PUTUsers(event) {
  let data = Object.fromEntries(new FormData(event.target));
  console.log(data);
  let config = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  };
  let peticion = await fetch(`${URL}/user/${data.id}`, config);
  datos = await peticion.json();
}

export async function DELETEUsers(event, id) {
  let data = Object.fromEntries(new FormData(event.target));
  let config = {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify(data),
  };
  let peticion = await fetch(`${URL}/user/${id}`, config);
  datos = await peticion.json();
}
