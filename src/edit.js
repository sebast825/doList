const container = document.querySelector('.container');
const clases = require('./clases.js');
const create = require('./create');
const divSelect = require('./divSelect');
const projectNameEdit = document.querySelector('.projectNameEdit');
const localStorage = require('./localStorage')


function editHijo(elem){
	
	//si la tarea tiene un Projecto aparece el nombre del projecto
	projectNameEdit.innerText= elem.numId;
	let form = document.formularioEdit;
	// guardarId= elem.numId
	form.nameTaskEdit.value = elem.title;
	form.descTaskEdit.value = elem.desc;
	form.dateTaskEdit.value = elem.dueDate;
}

//recibe los datos del formulario de edicion, 
//edita el elemento guardado
function actualziarDatos(e){
	let form = document.formularioEdit;
	e.preventDefault();
	//  console.log(clases.almacenar);
	clases.almacenar.forEach(elem=>{
		if(elem.numId==projectNameEdit.innerHTML){
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