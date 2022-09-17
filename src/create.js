const clases = require('./clases.js');
const divSelect = require ('./divSelect')
const delet = require ('./delet')
const edit = require('./edit')
const menu = require('./menu')
const localStorage = require('./localStorage')
const container = document.querySelector('.container');
const containerProjectssSelect = document.querySelector('.containerProjectssSelect');
const containerProjectss = document.querySelector('.containerProjectss');
const projectName = document.querySelector('.projectName');
const tareaProjectDom = document.querySelector('.tareaProject');
const createSection = document.querySelector('.createSection');
const createTask = document.querySelector('.createTask');
const formsPrincpales = document.querySelector('.formsPrincpales');
const containerToday = document.querySelector('.containerToday');

function getFormulario(e){
	e.preventDefault();
	
	//si es taabajo no la corre y hay quilombo 
	// divSelect.mostrarTareas()
	let infoName = this.nameTask.value;
	if (infoName=='') {return alert('nombre invalido')};
	let infoTask = this.descTask.value;
	let infoDate = this.dateTask.value ;
	let numId = crearId(clases.almacenar);
	// console.log(numId);
	let elem = new clases.Tarea();
	elem.setTitle = infoName;
	elem.setDesc = infoTask;
	elem.setId = numId;
	elem.setDueDate = infoDate;
	elem.guardarInfo();
	// elem.guardarInfo();			
	 let info = elem.getLeer;
	// console.log(info)
	container.prepend(mostrarDatos(elem));
	localStorage.guardar_LocalStorage();
	// divSelect.colocarTareaEn(info);
	
	document.formulario.style.visibility = 'hidden'
}

function createProject(e){
	e.preventDefault();
		
	let nameProject = this.nameProject.value;
	let nameValido = verificarNombreProject(nameProject);
	if(!nameValido)return;
	
	let project = new clases.Project();	
	project.setNumId = crearId(clases.almacenarProject);
	project.setNameProject = nameProject;
	project.guardar();	
	
	console.log(project.getLeer);
	// console.log(project.createSelect())
	 containerProjectssSelect.appendChild(createSelect(project.getLeer));
	 localStorage.guardar_LocalStorageProject();
	 document.createProject.style.visibility = 'hidden';

}

//recorre el array que se le pase para crear un id
function crearId(array){	
	let numId;
		if(array.length==0){
			numId= 0;
		}else{
			let lastId = array[array.length-1];			
			numId = parseInt(lastId.numId) +1;		
		}
		
		return numId;
}

//verifica si el nombre del projecto existe
function verificarNombreProject(nameProject){
	let valido=true;
	clases.almacenarProject.forEach(elem=>{
		if(elem.nameProject==nameProject){
			alert('ya esxiste un proyecto con ese nombre');			
			valido=false;			
		}
	})
	return valido;
}




function tareaProject(e){
	e.preventDefault();
	tareaProjectDom.style.visibility = 'hidden'
	let infoName = this.nameTareaProject.value;
	if (infoName=='') {return alert('nombre invalido')}
	let infoTask = this.descTareaProject.value;
	let infoDate = this.dateTareaProject.value;
	
	
	
	let numId = crearId(clases.almacenar);
	
	let elem = new clases.TareaProject();
		
		elem.setTitle = infoName;		
		elem.setDesc = infoTask;
		elem.setDueDate = infoDate;
		elem.setNameProject = projectName.innerHTML;
		elem.setId=numId;
	elem.guardar();			
	console.log(elem.getLeer);
	containerProjectss.appendChild(mostrarDatos(elem));
	localStorage.guardar_LocalStorage();
	
	
}








function createSelect(project){
	let div = document.createElement('DIV');
	let h2 = document.createElement('h2');
	div.classList.add('divProjectSelect')
	div.classList.add(project.nameProject);
	h2.innerText=  project.nameProject;
	div.appendChild(h2);
	div.addEventListener('click',()=>{		
		divSelect.mostrarProjectss();
	
	

			showTareaProject(project);
			menu.showMenu();
		
		console.log(project);
		})
		
	return (div);
}

//muestra en el dom el projecto y sus tareas
function showTareaProject(project){
	
divSelect.mostrarProjectss();
mostrarProject(project.nameProject);

   clases.almacenar.forEach(elem=>{
	
	   if(elem.project==project.nameProject){
		   let tarea = mostrarDatos(elem);
		   containerProjectss.appendChild(tarea);
	   }
})
}
function mostrarDatos(elem){
	// console.log(elem[0],elem[1])
let cont = document.createElement('DIV');
let miniCont = document.createElement('DIV');
let descDateDiv = document.createElement('DIV');
let btnDiv = document.createElement('DIV');
let nameTask = document.createElement('H2');
let descTask = document.createElement('P');
let dateTask = document.createElement('P');
let btnDelete = document.createElement('P');
let btnEdit = document.createElement('P');
let btnCheck = document.createElement('input');
btnCheck.setAttribute('type','checkbox');
cont.classList.add('divTarea');
descDateDiv.classList.add('descDate');
btnDiv.classList.add('btnDiv');
miniCont.classList.add('miniCont');
descTask.classList.add('descTask');
dateTask.classList.add('dateTask');

btnDelete.innerHTML='<i class="fas fa-trash-alt"></i>';
btnEdit.innerHTML = '<i class="fas fa-edit"></i>';
nameTask.innerText=elem.title+ '    ';
descTask.innerText = elem.desc;
dateTask.innerText = elem.dueDate;

btnDiv.appendChild(btnDelete);
btnDiv.appendChild(btnEdit);
nameTask.appendChild(btnCheck);
descDateDiv.appendChild(descTask);
descDateDiv.appendChild(dateTask);
cont.appendChild(nameTask);
miniCont.appendChild(descDateDiv);
miniCont.appendChild(btnDiv);
cont.appendChild(miniCont);

if(elem.complete){
	btnCheck.checked=true;
	cont.classList.add('completeTask');
}else{
	cont.classList.remove('completeTask');

}
	btnCheck.addEventListener('click',()=>{
		
		if(elem.complete){
			console.log('cjeck');
			elem.complete=false;
			cont.classList.remove('completeTask');
		}else{
			
			elem.complete=true;
			cont.classList.add('completeTask');
		}
		localStorage.guardar_LocalStorage()

})
	
btnEdit.addEventListener('click',()=>{
	formularioEdit.style.visibility='visible';
	edit.editHijo(elem);
	localStorage.guardar_LocalStorage();
})
btnDelete.addEventListener('click',()=>{
	
	delet.eliminarElemento(cont);
	delet.removerHijo(elem.numId);
	localStorage.guardar_LocalStorage();
})	

if(containerToday.style.visibility == 'visible'){
	divSelect.mostrarToday()
}

return(cont)
}

function mostrarProject(nameProject){
	
	let cont = document.createElement('DIV');
	let h2 = document.createElement('H2');
	let btnAgregar = document.createElement('DIV');
	btnAgregar.classList.add('crateContainer');
	let btnEliminar = document.createElement('P');
	cont.classList.add('divProject');
	// console.log('jajaj')

	btnAgregar.innerHTML='<span class="createElements createTask createProjectTask"><i class="fas fa-plus"></i>New Task</span>';
	btnEliminar.innerHTML ='<i class="fas fa-trash-alt"></i>';
	// btnAgregar.setAttribute('type','submit')
	cont.setAttribute('name',nameProject);
	cont.classList.add(nameProject);
	h2.innerText = nameProject;
	
	cont.appendChild(h2);
	cont.appendChild(btnEliminar);

	
	
	btnAgregar.addEventListener('click',()=>{
		console.log('visible');
		tareaProjectDom.style.visibility='visible';
		projectName.innerText= nameProject;
		localStorage.guardar_LocalStorage();
		formsPrincpales.classList.remove('formsPrincpales-oculto');

	})
	btnEliminar.addEventListener('click',()=>{
		
		delet.eliminarProjecto(nameProject);
		localStorage.guardar_LocalStorage();
		localStorage.guardar_LocalStorageProject();
		recorrerAlmacenarProject();
	})
	divSelect.removeNewProjectTask()

	containerProjectss.appendChild(cont);
	console.log(nameProject,'asd')
	createSection.insertBefore(btnAgregar,createSection.firstChild);
	//remove the father (the div, not the span, looks good in front end with this)
	createTask.closest('div').style.display = 'none';
}

function recorrerAlmacenarProject(){
	
	containerProjectssSelect.innerText='';
	clases.almacenarProject.forEach(elem=>{
		containerProjectssSelect.appendChild(createSelect(elem));
	})
}



exports.getFormulario = getFormulario;
exports.createProject = createProject;

exports.showTareaProject = showTareaProject;
exports.tareaProject = tareaProject;
// exports.createSelect = createSelect;
exports.mostrarDatos = mostrarDatos;
exports.createSelect = createSelect;
exports.recorrerAlmacenarProject = recorrerAlmacenarProject;
