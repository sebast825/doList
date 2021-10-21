const clases = require('./clases');

//queda guardado en la pc que lo creo
function recuperar_LocalSotrage(){
	console.log('entro')
	let tarea = JSON.parse(localStorage.getItem('tarea'));
	let project = JSON.parse(localStorage.getItem('project'));
	// console.log(tarea)
	// console.log(project)
	
		tarea.forEach(element => {
			clases.almacenar.push(element);
		});
	
	
	
		project.forEach(elem => {
			clases.almacenarProject.push(elem)
		})
		
	}

  
  
 
  
  function guardar_LocalStorage(){	 
	localStorage.setItem('tarea',JSON.stringify(clases.almacenar))	
  }

  function guardar_LocalStorageProject(){	 
	localStorage.setItem('project',JSON.stringify(clases.almacenarProject))
  }
 
  

  exports.guardar_LocalStorage = guardar_LocalStorage;
  exports.recuperar_LocalSotrage = recuperar_LocalSotrage;
  exports.guardar_LocalStorageProject = guardar_LocalStorageProject;