const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let username = document.querySelector('#username').value
  let email = document.querySelector('#email').value;
  let tel = document.querySelector('#tel').value;
  console.log(username, email, tel);

});




let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");




form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Este campo es obligatorio")
  engine(email, 1, "Este campo es obligatorio");
  engine(tel, 2, "Este campo es obligatorio");
});


//  =  igual transformar  /  == comparar   /  === comparar segun valor funciona en IF

let engine = (id, serial, message) => {

  // y = &  /  o = ||
  // if (condicion1 & condicion =="8" || ) {
  //     //code q sucedera   
  // }else{
  //   //code q sucedera
  // }

  if (id.value.trim() === "") {

    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid orange";


  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    alert("Gracias por Completar el Formulario");

  }
}


// enviar(CloseEvent){

//   window.location("google.com");
// }


const formulario = document.getElementById("form");

const userName = document.getElementById("username");
const userEmail = document.getElementById("userEmail");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");



const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];

    let datos = new FormData(formulario)

    peticion = {
        method: 'POST',
        body:datos,
    }



    // validar nombre
    if (!userName.value || !userName.value.trim()) {
        userName.classList.add("is-invalid");

        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
        
    }


    // validar email
    if (!userEmail.value || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");

    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }


    
    pintarMensajeExito();
    
    fetch('recibe.php', peticion)
        .then(respuesta => respuesta.json())
        .then( respuesta => {
        
            console.log("Formulario enviado con éxito");
        }).catch( error => console.log('error', error))

   
});

//Para mostrar solo un msj en la pantalla
const pintarMensajeExito = () => {
  alertSuccess.classList.remove("d-none");
  alertSuccess.textContent = "Mensaje enviado con éxito";
};