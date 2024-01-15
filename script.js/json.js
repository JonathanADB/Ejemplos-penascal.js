"use strict"

/*Este código crea un objeto JSON llamado libro que representa información sobre un libro.
 Luego, convierte ese objeto a una cadena JSON usando JSON.stringify(), muestra la cadena en la 
 consola y en el cuerpo del documento HTML, y finalmente, crea un nuevo objeto a partir de la cadena 
 JSON usando JSON.parse() para demostrar cómo se puede trabajar con la información JSON en 
 JavaScript.*/

 // Definimos un objeto JSON que representa información sobre libros
 let libro = {
  "titulo": "El Principito",
  "autor": "Antoine de Saint-Exupéry",
  "anioPublicacion": 1943,
  "genero": "Fábula",
  "editorial": "Reynal & Hitchcock"
};

// Convertimos el objeto JSON a una cadena JSON
let libroJSON = JSON.stringify(libro, null, 2);

// Mostramos la cadena JSON en la consola y en el cuerpo del documento
console.log(libroJSON);

// Creamos un nuevo objeto a partir de la cadena JSON
let nuevoLibro = JSON.parse(libroJSON);

// Mostramos el nuevo objeto en la consola
console.log(nuevoLibro);


// Obtener el elemento section existente
const sectionElement = document.getElementById("section"); 

// Asegurarnos de que el elemento section exista antes de agregar contenido
if (sectionElement) {
  // Crear párrafos con la información del libro y añadirlos al section
  sectionElement.innerHTML += `<p><strong>Título:</strong> ${nuevoLibro.titulo}</p>`;
  sectionElement.innerHTML += `<p><strong>Autor:</strong> ${nuevoLibro.autor}</p>`;
  sectionElement.innerHTML += `<p><strong>Año de Publicación:</strong> ${nuevoLibro.anioPublicacion}</p>`;
  sectionElement.innerHTML += `<p><strong>Género:</strong> ${nuevoLibro.genero}</p>`;
  sectionElement.innerHTML += `<p><strong>Editorial:</strong> ${nuevoLibro.editorial}</p>`;
} else {
  console.error("El elemento section no fue encontrado.");
}



/*document.body.innerHTML = "<h2>Información del Libro</h2>";
document.body.innerHTML += "<p><strong>Título:</strong> " + nuevoLibro.titulo + "</p>";
document.body.innerHTML += "<p><strong>Autor:</strong> " + nuevoLibro.autor + "</p>";
document.body.innerHTML += "<p><strong>Año de Publicación:</strong> " + nuevoLibro.anioPublicacion + "</p>";
document.body.innerHTML += "<p><strong>Género:</strong> " + nuevoLibro.genero + "</p>";
document.body.innerHTML += "<p><strong>Editorial:</strong> " + nuevoLibro.editorial + "</p>"; */




/*
//copia profunada java script
const objetoOriginal = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
      calle: 'Calle Real, 1',
      ciudad: 'A Coruña'
    },
    hobbies: ['cine', 'lectura', 'deporte']
  };
  
  // Creamos una copia superficial con el spread operator
  const copiaSuperficial = { ...objetoOriginal };
  
  // Si modificamos un objeto en la copia superficial...
  copiaSuperficial.direccion.calle = 'Calle Galera, 21';
  
  // ... el objeto original también se modifica
  console.log(objetoOriginal.direccion.calle); // 'Calle Galera, 21'
  
  console.log(copiaSuperficial.direccion.calle); // 'Calle Galera, 21'

  

  //copia profunda json
  const objetoOriginal = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
      calle: 'Calle Real, 1',
      ciudad: 'A Coruña'
    },
    hobbies: ['cine', 'lectura', 'deporte']
  };
  
  // Creamos una copia profunda utilizando JSON.stringify() y JSON.parse()
  const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));
  
  // Podemos modificar la copia profunda
  copiaProfunda.nombre = 'María';
  copiaProfunda.direccion.ciudad = 'Madrid';
  
  // Comprobamos que la copia profunda y el objeto original son independientes
  console.log(objetoOriginal);
  console.log(copiaProfunda); */