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
const containerProjectssSelect = document.querySelector('.containerProjectssSelect')
const formsPrincipales = document.querySelector('.formsPrincipales');


document.formulario.addEventListener('submit',create.getFormulario);
document.formularioEdit.addEventListener('submit',edit.actualziarDatos);

document.createProject.addEventListener('submit',create.createProject);

document.tareaProject.addEventListener('submit',create.tareaProject);
formsBarra.addEventListener('click',menu.showMenu)

//para esconde el menu
vemosTexto.addEventListener('click',ocultarMenu,capture=true)

function ocultarMenu(e){
	if(formsPrincipales.classList.contains('formsPrincpales-oculto')){
		e.stopPropagation()
		menu.showMenu()
	}
	
	
}
tareasSelect.addEventListener('click',function(){	
	divSelect.mostrarTareas();
	menu.showMenu();
} )
todaySelect.addEventListener('click',()=>{
	divSelect.mostrarToday();
	menu.showMenu();
} )


localStorage.recuperar_LocalSotrage()


//carga lo del local sotrage
create.recorrerAlmacenarProject()
divSelect.mostrarTareas();
