function validacion() {
  var name = document.getElementById("name").value;
  var apellido = document.getElementById("apellido").value;
  var mail = document.getElementById("mail").value;
  var asunto = document.getElementById("asunto").value

  if (name == "" || apellido == "" || /^\s+$/.test(apellido) || mail == "" || asunto == "") {
    alert("Necesitamos los siguientes datos para podes atenderte mejor. Gracias.");
    return false;
  }

}

function getData() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
}