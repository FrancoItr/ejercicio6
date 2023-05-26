// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["azucar", "frutas", "queso", "agua", "verduras"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("aceite de girasol");
console.log(listaCompra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const películasFavoritas = [
    { titulo: "Avatar", director: "James Cameron", fecha: new Date(2009, 11, 18) },
    { titulo: "El secreto de sus ojos", director: "Juan José Campanella", fecha: new Date(2009, 07, 13) },
    { titulo: "Relatos salvajes", director: "Damián Szifron", fecha: new Date(2014, 07, 21) }
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const posterior2010 = películasFavoritas.filter(peli => peli.fecha > new Date(2010, 00, 01))
console.log(posterior2010);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = películasFavoritas.map(direc => direc.director);
console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = películasFavoritas.map(titu => titu.titulo);
console.log(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directoresYPeliculas = directores.concat(titulos);
console.log(directoresYPeliculas);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directoresYPeliculas2 = [...directores, ...titulos];
console.log(directoresYPeliculas2);
