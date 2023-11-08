
// ===== navbar-toggler
let navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener('click', function () {
	navbarToggler.classList.toggle("active");
});

//===== Page Rutas, Oculta Welcome
ruta_opcion1 = document.getElementById("ruta_option1");
ruta_opcion2 = document.getElementById("ruta_option2");
ruta_opcion3 = document.getElementById("ruta_option3");
ruta_welcome = document.querySelector(".ruta_welcome");
ruta_welcome_logo = document.querySelector(".ruta_logo");

ruta_opcion1.addEventListener('click', function () {
	ruta_welcome.classList.add("d-none");
	ruta_welcome_logo.classList.add("d-none");
});

ruta_opcion2.addEventListener('click', function () {
	ruta_welcome.classList.add("d-none");
	ruta_welcome_logo.classList.add("d-none");
});


ruta_opcion3.addEventListener('click', function () {
	ruta_welcome.classList.add("d-none");
	ruta_welcome_logo.classList.add("d-none");
});




//===== btn_opciones
let btnOpciones = document.querySelector(".btnOpciones");
btnOpciones.addEventListener('click', function () {
	btnOpciones.classList.toggle("active");
});


// //===== Carousel-Capa

var items = document.querySelectorAll('.carousel .carousel-item')
items.forEach((e) => {
	const slide = 4;
	let next = e.nextElementSibling;
	for (vari = 0; i < slide; i++) {
		if (!next) {
			next = items[0]
		}
		let clonechild = next.cloneNode(true)
		e.appendChild(clonechild.children[0])
		next = nextElementSibling
	}
})
