"use strict"



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

  */

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
  console.log(copiaProfunda);