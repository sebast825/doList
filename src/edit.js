const container = document.querySelector('.container');
const clases = require('./clases.js');
const create = require('./create');
const divSelect = require('./divSelect');
const projectNameEdit = document.querySelector('.projectNameEdit');
const localStorage = require('./localStorage')
const showProject = document.querySelector('.showProject');

let projectId = undefined;

function editHijo(elem){
console.log(elem)
	//si la tarea tiene un Projecto aparece el nombre del projecto
	projectNameEdit.innerText= elem.project;
	if(elem.project == undefined){
		showProject.innerHTML = 'Edit'
		projectNameEdit.style.display = 'none';

	}else{
		showProject.innerHTML = 'Project:'
		projectNameEdit.style.display = 'flex';
	}
	let form = document.formularioEdit;
	projectId = elem.numId;
	form.nameTaskEdit.value = elem.title;
	form.descTaskEdit.value = elem.desc;
	form.dateTaskEdit.value = elem.dueDate;
}



//recibe los datos del formulario de edicion, 
//edita el elemento guardado
function actualziarDatos(e){
	let form = document.formularioEdit;
	console.log(e)
	e.preventDefault();
	clases.almacenar.forEach(elem=>{
		console.log(elem)
		
		if(elem.numId==projectId){
			elem.title = form.nameTaskEdit.value;
			elem.desc = form.descTaskEdit.value;
			elem.dueDate = form.dateTaskEdit.value;
			// console.log(elem.getLeer)
		
			divSelect.insertarDom(elem.project);
	}}	
)

localStorage.guardar_LocalStorage()

document.formularioEdit.style.visibility = 'hidden';

}



exports.actualziarDatos = actualziarDatos;

exports.editHijo=editHijo;

