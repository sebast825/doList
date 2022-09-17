const clases = require('./clases.js');
const create = require('./create.js');
const fecha = require('./fecha.js')
const containerProjectss = document.querySelector('.containerProjectss');
const container = document.querySelector('.container');
const containerToday = document.querySelector('.containerToday');

const tareasSelect = document.querySelector('.tareasSelect');
const todaySelect = document.querySelector('.todaySelect');
const allProjects = document.querySelector('.allProjects');

const createTask = document.querySelector('.createTask');
const createProjectTask = document.querySelector('.createProjectTask');
const createSection = document.querySelector('.createSection');
const formsPrincpales = document.querySelector('.formsPrincpales');

function mostrar(){
	container.style.visibility='hidden';
	containerToday.style.visibility='hidden';
	containerProjectss.style.visibility = 'hidden';
}
function mostrarTareas(){
	// e.preventDefault()
	
	mostrar();
	mostrarTotalTareas();
	activeSelect('tareas')
	container.style.visibility='visible';
	removeNewProjectTask();
	createTask.closest('div').style.display = 'block';

}
function removeNewProjectTask(){
	console.log(createSection.children)
	if (createSection.children.length >= 3){
		createSection.firstChild.remove()
	}
}
function mostrarToday(){
	// e.preventDefault()
	mostrar();
	mostrarTotalToday();
	activeSelect('today');
	containerToday.style.visibility = 'visible';
	removeNewProjectTask()
	createTask.closest('div').style.display = 'block';

}
function mostrarProjectss(){
	// e.preventDefault()
	activeSelect('project');
	containerProjectss.innerText='';
	mostrar();

	containerProjectss.style.visibility = 'visible';

}

function activeSelect(elem){
	tareasSelect.firstChild.classList.remove('class');
	todaySelect.firstChild.classList.remove('class');	
	allProjects.firstChild.classList.remove('class');
	if(elem=="tareas"){
		tareasSelect.firstChild.classList.add('class');
	}else if(elem=="today"){
		todaySelect.firstChild.classList.add('class');
	}else if(elem=="project"){
		allProjects.firstChild.classList.add('class');
	}else{
		console.log('errro colorSelect');
	}
	
}

//depende el valor que retorne administra losd atos
//se usa al borrar
function colocarTareaEnActualizado(){
	if(container.style.visibility=='visible'){
		return true;
	}else if(containerToday.style.visibility=='visible'){
		return false;
	}else if(containerProjectss.style.visibility=='visible'){		
		return undefined;
	}else{
		console.log('colocarTareaEnActualizado Error')
	}
}

//muestra todas las tareas en container
function mostrarTotalTareas(){
	//si no si clickias muchas veces, repite las tareas	
	container.innerText = '';	
	clases.almacenar.forEach(elem=>{
		// console.log('mosstartareastotales')
		let tarea = create.mostrarDatos(elem);
		container.prepend(tarea);
	})
}

//al clickiar en Today muestra todas las tareas del dia
function mostrarTotalToday(){
	containerToday.innerText='';
	
	clases.almacenar.forEach(elem=>{
		let verFecha = verificarFecha(elem);
		if(verFecha){
			let obj = create.mostrarDatos(elem);
			containerToday.prepend(obj);
		}		
	})
}
//verifica la ficha a ver si entra en containerToday
function verificarFecha(elem){
	
	// console.log(elem)
	
	if(elem.dueDate!=undefined){
		// console.log(elem)
		let atr = fecha.htmlToday(elem.dueDate)
		if(atr){
			
			return true;
		}
}
}

function insertarDom(nameProject){
	let func = colocarTareaEnActualizado()
	if(func == true){
		mostrarTareas();
	}else if (func == false){
		mostrarToday()
	}else if (func == undefined){
		// console.log('hasta aca',nameProject)
		bsucarPorjecto(nameProject);
		// console.log('atr')
	}else{
		console.log('erro insertarDom');
	}
}

//busca el projeto
function bsucarPorjecto(name){
	clases.almacenarProject.forEach(elem=>{
		
		if(elem.nameProject==name){
			// console.log('buscpro',elem.nameProject)
			create.showTareaProject(elem);
		}
	})
}

module.exports={mostrarTareas,mostrarToday,mostrarProjectss,colocarTareaEnActualizado, insertarDom,removeNewProjectTask}