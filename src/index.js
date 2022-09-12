const menu = require('./menu.js');
const create = require('./create.js');
const clases = require('./clases');
const divSelect = require('./divSelect')
const edit = require('./edit')
const localStorage = require('./localStorage')
const formsBarra = document.querySelector('.barra');
const formularioEditBtn = document.querySelector('.formularioEdit-btn');
const vemosTexto = document.querySelector('.vemosTexto');
const tareasSelect = document.querySelector('.tareasSelect');
const todaySelect = document.querySelector('.todaySelect');
const containerProjectssSelect = document.querySelector('.containerProjectssSelect');
const container = document.querySelector('.container');
const createTask = document.querySelector('.createTask');
const createProjec = document.querySelector('.createProjec');
const closeForm = document.querySelectorAll('.closeForm');

closeForm.forEach(crose =>{
	crose.addEventListener('click',()=>{
		document.formulario.style.visibility = 'hidden';
		document.formularioEdit.style.visibility = 'hidden';
		document.createProject.style.visibility = 'hidden';
	})

})

createProjec.addEventListener('click',()=>{
	document.createProject.style.visibility = 'visible'
})
createTask.addEventListener('click',()=>{
	document.formulario.style.visibility = 'visible'
})

document.formulario.addEventListener('submit',create.getFormulario);
document.formularioEdit.addEventListener('submit',edit.actualziarDatos);

document.createProject.addEventListener('submit',create.createProject);

document.tareaProject.addEventListener('submit',create.tareaProject);
formsBarra.addEventListener('click',menu.showMenu)
container.addEventListener('click',menu.hideMenu)


tareasSelect.addEventListener('click',function(){	
	divSelect.mostrarTareas();
	menu.showMenu();
} )
todaySelect.addEventListener('click',()=>{
	divSelect.mostrarToday();
	menu.showMenu();
} )


localStorage.recuperar_LocalSotrage();


//carga lo del local sotrage
create.recorrerAlmacenarProject();
divSelect.mostrarTareas();
