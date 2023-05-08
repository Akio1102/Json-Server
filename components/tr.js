export function Fila(user) {
  let tabla = document.querySelector("#myData");
  let tr = document.createElement("tr");
  tr.setAttribute("id", `${user.id}`);
  tr.setAttribute("class", `tr`);
  tr.innerHTML = `
          <td scope="col">${user.id}</td>
          <td scope="col">${user["first_name"]}</td>
          <td scope="col">${user["last_name"]}</td>
          <td scope="col">${user.age}</td>
          <td scope="col">${user.address}</td>
          <td scope="col">
            <button id="editar" data-accion="modificar" data-action="PUT" class="btn btn-outline-warning">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button  data-accion="eliminar" class="btn btn-outline-danger">
              <i class="bi bi-trash"></i>
            </button>
          </td>
    `;
  tabla.appendChild(tr);
}
