let nuvaFecha='';
let fechaActual = [];
let dateTask = document.querySelector('.dateTask');

//recibe la fecha, para ver si lo pone en el div Today
function htmlToday(elem){	
	let fecha = elem;
	nuvaFecha=fecha;
	fechaHoy();
	return devolverFecha();

}

//guarda la fecha de hoy
function fechaHoy(){
			const date = new Date();
			let day = date.getUTCDate();
			let month = date.getMonth()+1;
			let year = date.getUTCFullYear();
		
			fechaActual.push(day);
			fechaActual.push(month);
			fechaActual.push(year);
		}

//compara la fecha del objeto ocn la actual a ver si devuelve true o no
function devolverFecha(){
	// console.log(nuvaFecha,'nueva fecha')
			let dividir = nuvaFecha.split('-');
			// console.log(dividir,'nueva fecha')
			let dayNf = parseFloat(dividir[2]);
			let monthNf = parseFloat(dividir[1]);
			let yearNf = parseFloat(dividir[0]);

			let restarDay = parseFloat(fechaActual[0]) - dayNf;
			let restarMonth = parseFloat(fechaActual[1]) - monthNf;
			let restarYear = parseFloat(fechaActual[2]) - yearNf;
			// console.log('nueva fecha',nuvaFecha)

			if (restarYear<1&&restarYear>-1&&restarMonth<1&&restarMonth>-1&&restarDay<=1&&restarDay>=-1){	
				// console.log('esta en el if')	
				// console.log('restarDay',restarDay,'restarMonth',restarMonth,restarYear)	
				return true;			
			}
			
			// console.log('nueva fecha',nuvaFecha)
			// console.log('fecha actual',fechaActual)
			
			// console.log(dayNf,monthNf,yearNf)
			// console.log(fechaActual[2],fechaActual[1],fechaActual[0])	
		
		}


exports.htmlToday=htmlToday;