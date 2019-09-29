let table;
let itNombre, itNif;

function setup() {
  noCanvas();
  $('#successModal').modal('toggle');
  itNombre = select('#searchName');
  itNif = select('#searchNif');
  table = $('#tbBusqueda').DataTable({
    "columnDefs": [{
      "data": null,
      "defaultContent": "<a class='btn btn-primary' style='margin-right: 10px;' role='button' href='#'>Info</a>" +
        "<a class='btn btn-primary' style='margin-right: 10px;' role='button' href='#'>Clases</a>" +
        "<a class='btn btn-danger' role='button' href='#'>Eliminar</a>",
      "targets": -1
    }]
  });

  $('#btnBuscar').on('click', (e) => {
    e.preventDefault();
    getResultados();
  });

  $('#tbBusqueda tbody').on('click', 'a', function (e) {
    e.preventDefault();
    const data = table.row($(this).parents('tr')).data();
    const nif = data[1];
    const action = $(this).text();
    const Http = new XMLHttpRequest();
    let url, res;
    switch (action) {
      case "Info":
        break;
      case "Clases":
        break;
      case "Eliminar":
        url = "/eliminarProfesor/" + nif;
        res = encodeURI(url);
        Http.open("GET", res);
        Http.send();
        break;
    }
    setTimeout(getResultados, 500);
    // alert(nif + " " + action);
  });
}

function getResultados() {
  const nombre = itNombre.value();
  const nif = itNif.value();
  if (nombre.length > 0 || nif.length > 0) {
    let query = '?nombre=' + nombre + '&nif=' + nif;
    const url = '/getProfesores' + query;
    const res = encodeURI(url);
    getData(res);
  }
}

async function getData(apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  console.log("aaaaaaaaaaaaa");
  table.clear().draw();
  data.forEach(profesor => {
    table.row.add([
      profesor.nombre,
      profesor.nif,
      profesor.correo,
      profesor.telefono
    ]).draw(false);
  });
}