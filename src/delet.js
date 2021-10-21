const divSelect = require('./divSelect')
const clases = require('./clases')
	 
const containerProjectssSelect = document.querySelector('.containerProjectssSelect')
const containerProjectss = document.querySelector('.containerProjectss');
const containerToday = document.querySelector('.containerToday');
const container = document.querySelector('.container')

function eliminarProjecto(nameProject){
	let confirmar = confirm('Seguro que desea eliminar el proyecto?');
	if(confirmar){
		borrarTarea(nameProject);
		borrarProject(nameProject);
		
		divSelect.mostrarTareas()
}
}
function borrarTarea(nameProject){
	//borra tarea
	clases.almacenar.forEach((elem,index,object)=>{
		console.log('eliminar tarea')	
		if(elem.project==nameProject){
			console.log(elem);
			object.splice(index,1);							
		}
	})
}		
function borrarProject(nameProject){
	//borra proyecto
	clases.almacenarProject.forEach((elem,index,object)=>{
		console.log('afuasdasdasdera',elem)
	if(elem.nameProject==nameProject){
		object.splice(index,1);		
		console.log('deasd',clases.almacenarProject)
				
	}
	})
}
	



function eliminarElemento(cont){
	
		
	let func = divSelect.colocarTareaEnActualizado()
	if(func==true){
		container.removeChild(cont)
	}else if(func == false){
		containerToday.removeChild(cont)
	}else if (func == undefined){
		containerProjectss.removeChild(cont)
	}else{
		console.log('colocarTareaEnActualizado Error')
	}


}

function removerHijo(numId){

	clases.almacenar.forEach((elem,index,object)=>{
		//index es el n* de elemento, object hace refernciaal array recorrido
		if(numId==elem.numId){				
			object.splice(index,1);				
		}
	})
}

exports.eliminarProjecto = eliminarProjecto;
exports.eliminarElemento = eliminarElemento;
exports.removerHijo = removerHijo;