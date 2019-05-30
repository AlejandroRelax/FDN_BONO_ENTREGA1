//Se define un arreglo de objetos.
let cursos = [{
	id: 1,
	nombre: 'Curso Basico, Intermedio y Avanzado de JavaScript',
	duracion: 120,
	valor: 600000	
},
{
	id: 2,
	nombre: 'Curso Basico de Node.JS, Express y Mongo DB',
	duracion: 60,
	valor: 300000	
},
{	
	id: 3,
	nombre: 'Curso Intermedio de Node.JS, Express y Mongo DB',
	duracion: 60,
	valor: 300000
},
{
	id: 4,
	nombre: 'Curso Avanzado de Node.JS, Express y Mongo DB',
	duracion: 60,
	valor: 300000
} 
];

//Variable obligatorias
const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'		
	},
	cedula:{
		demand: true,
		alias: 'c'
	}	
}

const argv = require ('yargs')
			 .command ('inscribir', 'Inscribirme en curso', opciones)
			 .argv			 

let recorrerArreglo = (cursos) => {
	let texto2='';
	for(let i= 0; i < cursos.length; i++){
		texto2+= 'El curso con ID '+ cursos[i].id + '\r\n' + 'de nombre '+ cursos[i].nombre + '\r\n' +'tiene una duración de ' + cursos[i].duracion 	+ ' Horas' + '\r\n' + 'el valor del curso es ' + cursos[i].valor + ' pesos' + '</br>'
	}
	return texto2;	
}

let crearArchivo = () => {
	found = cursos.find(cursos => cursos.id == argv.id)
//Si la busqueda es exitosa
	if (found){
	texto = 'El aspirante ' + argv.n + '\r\n' + 'con cedula de ciudadania ' + argv.c + '\r\n' + 'se ha inscrito en el curso ' + found.nombre + '\r\n' + 'con una duración de ' + found.duracion + ' horas ' + '\r\n' + 'por un valor de ' + found.valor + ' COP';
	return texto;
   }	else if ( argv.id != undefined || argv.id != null) {
		texto = 'El curso con id ' + argv.id + ' no se encuentra en el listado, a continuación se lista los cursos disponibles <br>';
		texto+= recorrerArreglo(cursos);
		return texto;
	} else if ( argv.id == undefined ){
		return recorrerArreglo(cursos);
	}
};

module.exports = { crearArchivo};	