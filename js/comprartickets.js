//defina valor de ticket
const valorTicket = 200;

//defina porcentajes de descuentos según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

//elementos en variables
let nombre          = document.getElementById('nombre');
let apellido        = document.getElementById('apellido');
let mail             = document.getElementById('mail');
let cantidadTickets  = document.getElementById('cantidadTIckets');
let categoria        = document.getElementById('categoriaSelect');

//funcion para quitar el estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.lenght; i++) {
        x[i].classList.remove('is-invalid');
        }
}

// Cálculo total a pagar
function total_a_pagar() {

    // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieran
   quitarClaseError();
   
   // Verifico si se llenaron los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se determine
   if (nombre.value === "") {
    alert("Por favor, esribí tu nombre.");
    nombre.classList.add("is-invalid");
    nombre.focus();
    return;
   }
  
   if (apellido.value === "") {
    alert("Por favor, esribí tu apellido.");
    nombre.classList.add("is-invalid");
    nombre.focus();
    return;
   }

   if (mail.value === "") {
    alert("Por favor, esribí tu email.");
    nombre.classList.add("is-invalid");
    nombre.focus();
    return;
   }

   //para determinar si el correo electrónico es válido o no
   const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
   }

   if (!emailValido(mail.value)) {
    alert("Por favor, escribí un correo electrónico válido.");
    mail.classList.add("is-invalid");
    mail.focus();
    return;
  }

  //Verifico si está ingresado al menos un ticket, sino que aplique un estilo de error, haga foco en el campo y
if ((cantidadTickets.value == 0)  || (isNaN(cantidadTickets.value)) ) {
    alert("Por favor, ingresá correctamente la cantidad de tickets.");
    cantidadTickets.classList.add("is-invalid");
    cantidadTickets.focus();
    return;
}

//Verifico que haya seleccionado una categoría, sino que aplique un estilo de error
if (categoriaSelect.value == "") {
    alert("Por favor, selecciona una categoría.");
    categoriaSelect.classList.add("is-invalid");
    categoriaSelect.focus();
    return;
}
   
// Multiplica cantidad de tickets por el valor
let totalValorTickets = (cantidadTickets.value) * valorTicket;

// Aplicación de descuentos según categoría
if (categoriaSelect.value == 0) {
    totalValorTickets = totalValorTickets ;
    }
    if (categoriaSelect.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
}
if (categoriaSelect.value == 2) {
    totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
 }
 if (categoriaSelect.value == 3) {
    totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
 }

// Inserto el valor en el html
totalPago.innerHTML = totalValorTickets;
}

// Botón Resumen recibe un escuchador y la función del cálculo
btnResumen.addEventListener('click', total_a_pagar);

// Función para el botón Borrar para que se borre el valor
function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}
bntBorrar.addEventListener('click', reset_total_a_pagar);
