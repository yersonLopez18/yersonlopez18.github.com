
//DOM
//querySelector / querySelectorAll

/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link);
})
*/
/*
let celdas = document.querySelectorAll("td");
  
celdas.forEach(function(td){
	td.addEventListener('click', function(){
		console.log(this)
	})
})
*/

//Obtener elementos de la clase .close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
	// Agregar un evento click a cada uno de ellos 
	link.addEventListener('click', function(evento){
		evento.preventDefault();

		let contenido=document.querySelector(".contenido");
		
		//Quitarle las clases de animacion al contenido
		contenido.classList.remove("fadeInDown");
		contenido.classList.remove("animated")

		//Agregar clases para animar su salida fadeOutUp
		contenido.classList.add("fadeOutUp");
		contenido.classList.add("animated");

		
		setTimeout(function(){
			location.href = "/";
		},600);
		//setInterval

		return false;

	});
}); 

