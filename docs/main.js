/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clases.js":
/*!***********************!*\
  !*** ./src/clases.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const edit = __webpack_require__(/*! ./edit.js */ \"./src/edit.js\");\r\nconst create = __webpack_require__(/*! ./create */ \"./src/create.js\");\r\nconst divSelect = __webpack_require__(/*! ./divSelect */ \"./src/divSelect.js\");\r\nconst projectNameEdit = document.querySelector('.projectNameEdit');\r\nconst container = document.querySelector('.container');\r\nconst containerProjectss = document.querySelector('.containerProjectss');\r\nconst containerProjectssSelect = document.querySelector('.containerProjectssSelect');\r\n// const tareaProjectDom = document.querySelector('.tareaProjectDom');\r\nconst projectName = document.querySelector('.projectName');\r\nconst tareaProjectDom = document.querySelector('.tareaProject');\r\nlet almacenar = [];\r\n\r\nlet almacenarProject=[];\r\n\r\nlet Project = class Project{\r\n\tconstructor(nameProject,numId){\r\n\t\tthis.numId = numId,\r\n\t\tthis.nameProject = nameProject\r\n\t\r\n\t}\r\n\tset setNumId(id){\r\n\t\tthis.numId = id;\r\n\t}\r\n\tset setNameProject(np){\r\n\t\tthis.nameProject = np;\r\n\t}\r\n\tget getLeer(){\r\n\t\treturn {numId : this.numId, nameProject : this.nameProject};\r\n\t}\r\n\tguardar(){\t\t\r\n\t\talmacenarProject.push(this.getLeer);\t\t\r\n\t}\r\n\t\r\n\t\r\n}\r\n\r\nlet Tarea = class Tarea{\r\n\tconstructor(numId,title, desc, dueDate,complete=false){\r\n\t\t\r\n\tthis.numId = numId,\r\n\tthis.title = title,\r\n\tthis.desc = desc,\r\n\tthis.dueDate = dueDate,\r\n\tthis.complete = complete\t\r\n\t}\r\n\tset setId(id){\r\n\t\treturn this.numId = id;\r\n\t}\r\n\tset setTitle(title){\r\n\t\treturn this.title = title;\r\n\t}\r\n\tset setDesc(desc){\r\n\t\treturn this.desc = desc;\r\n\t}\r\n\tset setDueDate(dueDate){\r\n\t\treturn this.dueDate = dueDate;\r\n\t}\r\n\tset setComplete(complete){\r\n\t\treturn this.complete = complete;\r\n\t}\r\n\tguardarInfo(){\r\n\t\t\r\n\t\t almacenar.push(this.getLeer);\r\n\t\t\r\n\t}\t\r\n\tget getLeer(){\r\n\t\treturn  {numId:this.numId,  title:this.title,desc:this.desc, dueDate:this.dueDate, complete:this.complete};\r\n\t\t\r\n\t}\r\n\t\r\n}\t\r\n\r\n\r\nlet TareaProject = class TareaProject extends Tarea{\r\n\tconstructor(numId,title, desc, dueDate, project,complete){\r\n\t\tsuper(numId,title, desc, dueDate,complete);\t\t\r\n\t\tthis.project = project\r\n\t}\r\n\tset setNameProject(project){\r\n\t\tthis.project = project;\r\n\t}\r\n\tguardar(){\t\t\r\n\t\t\r\n\t\talmacenar.push(this.getLeer);\r\n\t\t// almacenar.push(b)\r\n\t\t// console.log(almacenar)\t\r\n\t}\r\n\tget getLeer(){\r\n\t\t let c = super.getLeer;\r\n\t\t c.project = this.project;\t\r\n\t\treturn c;\r\n\t}\r\n\t\r\n}\r\n\r\n\r\nexports.almacenar = almacenar;\r\nexports.Tarea = Tarea;\r\nexports.almacenarProject = almacenarProject;\r\nexports.TareaProject =TareaProject;\r\nexports.Project = Project;\n\n//# sourceURL=webpack://09_dolist/./src/clases.js?");

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const clases = __webpack_require__(/*! ./clases.js */ \"./src/clases.js\");\r\nconst divSelect = __webpack_require__ (/*! ./divSelect */ \"./src/divSelect.js\")\r\nconst delet = __webpack_require__ (/*! ./delet */ \"./src/delet.js\")\r\nconst edit = __webpack_require__(/*! ./edit */ \"./src/edit.js\")\r\nconst menu = __webpack_require__(/*! ./menu */ \"./src/menu.js\")\r\nconst localStorage = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\")\r\nconst container = document.querySelector('.container');\r\nconst containerProjectssSelect = document.querySelector('.containerProjectssSelect');\r\nconst containerProjectss = document.querySelector('.containerProjectss');\r\nconst projectName = document.querySelector('.projectName');\r\nconst tareaProjectDom = document.querySelector('.tareaProject');\r\nconst createSection = document.querySelector('.createSection');\r\nconst createTask = document.querySelector('.createTask');\r\nconst formsPrincpales = document.querySelector('.formsPrincpales');\r\nfunction getFormulario(e){\r\n\te.preventDefault();\r\n\t\r\n\t//si es taabajo no la corre y hay quilombo \r\n\t// divSelect.mostrarTareas()\r\n\tlet infoName = this.nameTask.value;\r\n\tif (infoName=='') {return alert('nombre invalido')};\r\n\tlet infoTask = this.descTask.value;\r\n\tlet infoDate = this.dateTask.value ;\r\n\tlet numId = crearId(clases.almacenar);\r\n\t// console.log(numId);\r\n\tlet elem = new clases.Tarea();\r\n\telem.setTitle = infoName;\r\n\telem.setDesc = infoTask;\r\n\telem.setId = numId;\r\n\telem.setDueDate = infoDate;\r\n\telem.guardarInfo();\r\n\t// elem.guardarInfo();\t\t\t\r\n\t let info = elem.getLeer;\r\n\t// console.log(info)\r\n\tcontainer.prepend(mostrarDatos(elem));\r\n\tlocalStorage.guardar_LocalStorage();\r\n\t// divSelect.colocarTareaEn(info);\r\n\t\r\n\tdocument.formulario.style.visibility = 'hidden'\r\n}\r\n\r\nfunction createProject(e){\r\n\te.preventDefault();\r\n\t\t\r\n\tlet nameProject = this.nameProject.value;\r\n\tlet nameValido = verificarNombreProject(nameProject);\r\n\tif(!nameValido)return;\r\n\t\r\n\tlet project = new clases.Project();\t\r\n\tproject.setNumId = crearId(clases.almacenarProject);\r\n\tproject.setNameProject = nameProject;\r\n\tproject.guardar();\t\r\n\t\r\n\tconsole.log(project.getLeer);\r\n\t// console.log(project.createSelect())\r\n\t containerProjectssSelect.appendChild(createSelect(project.getLeer));\r\n\t localStorage.guardar_LocalStorageProject();\r\n\t document.createProject.style.visibility = 'hidden';\r\n\r\n}\r\n\r\n//recorre el array que se le pase para crear un id\r\nfunction crearId(array){\t\r\n\tlet numId;\r\n\t\tif(array.length==0){\r\n\t\t\tnumId= 0;\r\n\t\t}else{\r\n\t\t\tlet lastId = array[array.length-1];\t\t\t\r\n\t\t\tnumId = parseInt(lastId.numId) +1;\t\t\r\n\t\t}\r\n\t\t\r\n\t\treturn numId;\r\n}\r\n\r\n//verifica si el nombre del projecto existe\r\nfunction verificarNombreProject(nameProject){\r\n\tlet valido=true;\r\n\tclases.almacenarProject.forEach(elem=>{\r\n\t\tif(elem.nameProject==nameProject){\r\n\t\t\talert('ya esxiste un proyecto con ese nombre');\t\t\t\r\n\t\t\tvalido=false;\t\t\t\r\n\t\t}\r\n\t})\r\n\treturn valido;\r\n}\r\n\r\n\r\n\r\n\r\nfunction tareaProject(e){\r\n\te.preventDefault();\r\n\ttareaProjectDom.style.visibility = 'hidden'\r\n\tlet infoName = this.nameTareaProject.value;\r\n\tif (infoName=='') {return alert('nombre invalido')}\r\n\tlet infoTask = this.descTareaProject.value;\r\n\tlet infoDate = this.dateTareaProject.value;\r\n\t\r\n\t\r\n\t\r\n\tlet numId = crearId(clases.almacenar);\r\n\t\r\n\tlet elem = new clases.TareaProject();\r\n\t\t\r\n\t\telem.setTitle = infoName;\t\t\r\n\t\telem.setDesc = infoTask;\r\n\t\telem.setDueDate = infoDate;\r\n\t\telem.setNameProject = projectName.innerHTML;\r\n\t\telem.setId=numId;\r\n\telem.guardar();\t\t\t\r\n\tconsole.log(elem.getLeer);\r\n\tcontainerProjectss.appendChild(mostrarDatos(elem));\r\n\tlocalStorage.guardar_LocalStorage();\r\n\t\r\n\t\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createSelect(project){\r\n\tlet div = document.createElement('DIV');\r\n\tlet h2 = document.createElement('h2');\r\n\tdiv.classList.add('divProjectSelect')\r\n\tdiv.classList.add(project.nameProject);\r\n\th2.innerText=  project.nameProject;\r\n\tdiv.appendChild(h2);\r\n\tdiv.addEventListener('click',()=>{\t\t\r\n\t\tdivSelect.mostrarProjectss();\r\n\t\r\n\t\r\n\r\n\t\t\tshowTareaProject(project);\r\n\t\t\tmenu.showMenu();\r\n\t\t\r\n\t\tconsole.log(project);\r\n\t\t})\r\n\t\t\r\n\treturn (div);\r\n}\r\n\r\n//muestra en el dom el projecto y sus tareas\r\nfunction showTareaProject(project){\r\n\t\r\ndivSelect.mostrarProjectss();\r\nmostrarProject(project.nameProject);\r\n\r\n   clases.almacenar.forEach(elem=>{\r\n\t\r\n\t   if(elem.project==project.nameProject){\r\n\t\t   let tarea = mostrarDatos(elem);\r\n\t\t   containerProjectss.appendChild(tarea);\r\n\t   }\r\n})\r\n}\r\nfunction mostrarDatos(elem){\r\n\t// console.log(elem[0],elem[1])\r\nlet cont = document.createElement('DIV');\r\nlet miniCont = document.createElement('DIV');\r\nlet descDateDiv = document.createElement('DIV');\r\nlet btnDiv = document.createElement('DIV');\r\nlet nameTask = document.createElement('H2');\r\nlet descTask = document.createElement('P');\r\nlet dateTask = document.createElement('P');\r\nlet btnDelete = document.createElement('P');\r\nlet btnEdit = document.createElement('P');\r\nlet btnCheck = document.createElement('input');\r\nbtnCheck.setAttribute('type','checkbox');\r\ncont.classList.add('divTarea');\r\ndescDateDiv.classList.add('descDate');\r\nbtnDiv.classList.add('btnDiv');\r\nminiCont.classList.add('miniCont');\r\ndescTask.classList.add('descTask');\r\ndateTask.classList.add('dateTask');\r\n\r\nbtnDelete.innerHTML='<i class=\"fas fa-trash-alt\"></i>';\r\nbtnEdit.innerHTML = '<i class=\"fas fa-edit\"></i>';\r\nnameTask.innerText=elem.title+ '    ';\r\ndescTask.innerText = elem.desc;\r\ndateTask.innerText = elem.dueDate;\r\n\r\nbtnDiv.appendChild(btnDelete);\r\nbtnDiv.appendChild(btnEdit);\r\nnameTask.appendChild(btnCheck);\r\ndescDateDiv.appendChild(descTask);\r\ndescDateDiv.appendChild(dateTask);\r\ncont.appendChild(nameTask);\r\nminiCont.appendChild(descDateDiv);\r\nminiCont.appendChild(btnDiv);\r\ncont.appendChild(miniCont);\r\n\r\nif(elem.complete)btnCheck.checked=true\r\n\tbtnCheck.addEventListener('click',()=>{\r\n\t\tif(elem.complete){\r\n\t\t\tconsole.log('cjeck');\r\n\t\t\telem.complete=false;\r\n\t\t\tcont.classList.remove('completeTask');\r\n\t\t}else{\r\n\t\t\t\r\n\t\t\telem.complete=true;\r\n\t\t\tcont.classList.add('completeTask');\r\n\t\t}\r\n\t})\r\n\t\r\nbtnEdit.addEventListener('click',()=>{\r\n\tformularioEdit.style.visibility='visible';\r\n\tedit.editHijo(elem);\r\n\tlocalStorage.guardar_LocalStorage();\r\n})\r\nbtnDelete.addEventListener('click',()=>{\r\n\t\r\n\tdelet.eliminarElemento(cont);\r\n\tdelet.removerHijo(elem.numId);\r\n\tlocalStorage.guardar_LocalStorage();\r\n})\t\r\n\r\nreturn(cont)\r\n}\r\n\r\nfunction mostrarProject(nameProject){\r\n\t\r\n\tlet cont = document.createElement('DIV');\r\n\tlet h2 = document.createElement('H2');\r\n\tlet btnAgregar = document.createElement('DIV');\r\n\tbtnAgregar.classList.add('crateContainer');\r\n\tlet btnEliminar = document.createElement('P');\r\n\tcont.classList.add('divProject');\r\n\t// console.log('jajaj')\r\n\r\n\tbtnAgregar.innerHTML='<span class=\"createElements createTask createProjectTask\"><i class=\"fas fa-plus\"></i>New Task</span>';\r\n\tbtnEliminar.innerHTML ='<i class=\"fas fa-trash-alt\"></i>';\r\n\t// btnAgregar.setAttribute('type','submit')\r\n\tcont.setAttribute('name',nameProject);\r\n\tcont.classList.add(nameProject);\r\n\th2.innerText = nameProject;\r\n\t\r\n\tcont.appendChild(h2);\r\n\tcont.appendChild(btnEliminar);\r\n\r\n\t\r\n\t\r\n\tbtnAgregar.addEventListener('click',()=>{\r\n\t\tconsole.log('visible');\r\n\t\ttareaProjectDom.style.visibility='visible';\r\n\t\tprojectName.innerText= nameProject;\r\n\t\tlocalStorage.guardar_LocalStorage();\r\n\t\tformsPrincpales.classList.remove('formsPrincpales-oculto');\r\n\r\n\t})\r\n\tbtnEliminar.addEventListener('click',()=>{\r\n\t\t\r\n\t\tdelet.eliminarProjecto(nameProject);\r\n\t\tlocalStorage.guardar_LocalStorage();\r\n\t\tlocalStorage.guardar_LocalStorageProject();\r\n\t\trecorrerAlmacenarProject();\r\n\t})\r\n\tdivSelect.removeNewProjectTask()\r\n\r\n\tcontainerProjectss.appendChild(cont);\r\n\tconsole.log(nameProject,'asd')\r\n\tcreateSection.insertBefore(btnAgregar,createSection.firstChild);\r\n\t//remove the father (the div, not the span, looks good in front end with this)\r\n\tcreateTask.closest('div').style.display = 'none';\r\n}\r\n\r\nfunction recorrerAlmacenarProject(){\r\n\t\r\n\tcontainerProjectssSelect.innerText='';\r\n\tclases.almacenarProject.forEach(elem=>{\r\n\t\tcontainerProjectssSelect.appendChild(createSelect(elem));\r\n\t})\r\n}\r\n\r\n\r\n\r\nexports.getFormulario = getFormulario;\r\nexports.createProject = createProject;\r\n\r\nexports.showTareaProject = showTareaProject;\r\nexports.tareaProject = tareaProject;\r\n// exports.createSelect = createSelect;\r\nexports.mostrarDatos = mostrarDatos;\r\nexports.createSelect = createSelect;\r\nexports.recorrerAlmacenarProject = recorrerAlmacenarProject;\r\n\n\n//# sourceURL=webpack://09_dolist/./src/create.js?");

/***/ }),

/***/ "./src/delet.js":
/*!**********************!*\
  !*** ./src/delet.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const divSelect = __webpack_require__(/*! ./divSelect */ \"./src/divSelect.js\")\r\nconst clases = __webpack_require__(/*! ./clases */ \"./src/clases.js\")\r\n\t \r\nconst containerProjectssSelect = document.querySelector('.containerProjectssSelect')\r\nconst containerProjectss = document.querySelector('.containerProjectss');\r\nconst containerToday = document.querySelector('.containerToday');\r\nconst container = document.querySelector('.container')\r\n\r\nfunction eliminarProjecto(nameProject){\r\n\tlet confirmar = confirm('Seguro que desea eliminar el proyecto?');\r\n\tif(confirmar){\r\n\t\tborrarTarea(nameProject);\r\n\t\tborrarProject(nameProject);\r\n\t\t\r\n\t\tdivSelect.mostrarTareas()\r\n}\r\n}\r\nfunction borrarTarea(nameProject){\r\n\t//borra tarea\r\n\tclases.almacenar.forEach((elem,index,object)=>{\r\n\t\tconsole.log('eliminar tarea')\t\r\n\t\tif(elem.project==nameProject){\r\n\t\t\tconsole.log(elem);\r\n\t\t\tobject.splice(index,1);\t\t\t\t\t\t\t\r\n\t\t}\r\n\t})\r\n}\t\t\r\nfunction borrarProject(nameProject){\r\n\t//borra proyecto\r\n\tclases.almacenarProject.forEach((elem,index,object)=>{\r\n\t\t// console.log('afuasdasdasdera',elem)\r\n\tif(elem.nameProject==nameProject){\r\n\t\tobject.splice(index,1);\t\t\r\n\t\t// console.log('deasd',clases.almacenarProject)\r\n\t\t\t\t\r\n\t}\r\n\t})\r\n}\r\n\t\r\n\r\n\r\n\r\nfunction eliminarElemento(cont){\r\n\t\r\n\t\t\r\n\tlet func = divSelect.colocarTareaEnActualizado()\r\n\tif(func==true){\r\n\t\tcontainer.removeChild(cont);\r\n\t}else if(func == false){\r\n\t\tcontainerToday.removeChild(cont);\r\n\t}else if (func == undefined){\r\n\t\tcontainerProjectss.removeChild(cont);\r\n\t}else{\r\n\t\tconsole.log('colocarTareaEnActualizado Error');\r\n\t}\r\n\r\n\r\n}\r\n\r\nfunction removerHijo(numId){\r\n\r\n\tclases.almacenar.forEach((elem,index,object)=>{\r\n\t\t//index es el n* de elemento, object hace refernciaal array recorrido\r\n\t\tif(numId==elem.numId){\t\t\t\t\r\n\t\t\tobject.splice(index,1);\t\t\t\t\r\n\t\t}\r\n\t})\r\n}\r\n\r\nexports.eliminarProjecto = eliminarProjecto;\r\nexports.eliminarElemento = eliminarElemento;\r\nexports.removerHijo = removerHijo;\n\n//# sourceURL=webpack://09_dolist/./src/delet.js?");

/***/ }),

/***/ "./src/divSelect.js":
/*!**************************!*\
  !*** ./src/divSelect.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const clases = __webpack_require__(/*! ./clases.js */ \"./src/clases.js\");\r\nconst create = __webpack_require__(/*! ./create.js */ \"./src/create.js\");\r\nconst fecha = __webpack_require__(/*! ./fecha.js */ \"./src/fecha.js\")\r\nconst containerProjectss = document.querySelector('.containerProjectss');\r\nconst container = document.querySelector('.container');\r\nconst containerToday = document.querySelector('.containerToday');\r\n\r\nconst tareasSelect = document.querySelector('.tareasSelect');\r\nconst todaySelect = document.querySelector('.todaySelect');\r\nconst allProjects = document.querySelector('.allProjects');\r\n\r\nconst createTask = document.querySelector('.createTask');\r\nconst createProjectTask = document.querySelector('.createProjectTask');\r\nconst createSection = document.querySelector('.createSection');\r\nconst formsPrincpales = document.querySelector('.formsPrincpales');\r\n\r\nfunction mostrar(){\r\n\tcontainer.style.visibility='hidden';\r\n\tcontainerToday.style.visibility='hidden';\r\n\tcontainerProjectss.style.visibility = 'hidden';\r\n}\r\nfunction mostrarTareas(){\r\n\t// e.preventDefault()\r\n\t\r\n\tmostrar();\r\n\tmostrarTotalTareas();\r\n\tactiveSelect('tareas')\r\n\tcontainer.style.visibility='visible';\r\n\tremoveNewProjectTask();\r\n\tcreateTask.closest('div').style.display = 'block';\r\n\r\n}\r\nfunction removeNewProjectTask(){\r\n\tconsole.log(createSection.children)\r\n\tif (createSection.children.length >= 3){\r\n\t\tcreateSection.firstChild.remove()\r\n\t}\r\n}\r\nfunction mostrarToday(){\r\n\t// e.preventDefault()\r\n\tmostrar();\r\n\tmostrarTotalToday();\r\n\tactiveSelect('today');\r\n\tcontainerToday.style.visibility = 'visible';\r\n\tremoveNewProjectTask()\r\n\tcreateTask.closest('div').style.display = 'block';\r\n\r\n}\r\nfunction mostrarProjectss(){\r\n\t// e.preventDefault()\r\n\tactiveSelect('project');\r\n\tcontainerProjectss.innerText='';\r\n\tmostrar();\r\n\r\n\tcontainerProjectss.style.visibility = 'visible';\r\n\r\n}\r\n\r\nfunction activeSelect(elem){\r\n\ttareasSelect.firstChild.classList.remove('class');\r\n\ttodaySelect.firstChild.classList.remove('class');\t\r\n\tallProjects.firstChild.classList.remove('class');\r\n\tif(elem==\"tareas\"){\r\n\t\ttareasSelect.firstChild.classList.add('class');\r\n\t}else if(elem==\"today\"){\r\n\t\ttodaySelect.firstChild.classList.add('class');\r\n\t}else if(elem==\"project\"){\r\n\t\tallProjects.firstChild.classList.add('class');\r\n\t}else{\r\n\t\tconsole.log('errro colorSelect');\r\n\t}\r\n\t\r\n}\r\n\r\n//depende el valor que retorne administra losd atos\r\n//se usa al borrar\r\nfunction colocarTareaEnActualizado(){\r\n\tif(container.style.visibility=='visible'){\r\n\t\treturn true;\r\n\t}else if(containerToday.style.visibility=='visible'){\r\n\t\treturn false;\r\n\t}else if(containerProjectss.style.visibility=='visible'){\t\t\r\n\t\treturn undefined;\r\n\t}else{\r\n\t\tconsole.log('colocarTareaEnActualizado Error')\r\n\t}\r\n}\r\n\r\n//muestra todas las tareas en container\r\nfunction mostrarTotalTareas(){\r\n\t//si no si clickias muchas veces, repite las tareas\t\r\n\tcontainer.innerText = '';\t\r\n\tclases.almacenar.forEach(elem=>{\r\n\t\t// console.log('mosstartareastotales')\r\n\t\tlet tarea = create.mostrarDatos(elem);\r\n\t\tcontainer.prepend(tarea);\r\n\t})\r\n}\r\n\r\n//al clickiar en Today muestra todas las tareas del dia\r\nfunction mostrarTotalToday(){\r\n\tcontainerToday.innerText='';\r\n\t\r\n\tclases.almacenar.forEach(elem=>{\r\n\t\tlet verFecha = verificarFecha(elem);\r\n\t\tif(verFecha){\r\n\t\t\tlet obj = create.mostrarDatos(elem);\r\n\t\t\tcontainerToday.prepend(obj);\r\n\t\t}\t\t\r\n\t})\r\n}\r\n//verifica la ficha a ver si entra en containerToday\r\nfunction verificarFecha(elem){\r\n\t\r\n\t// console.log(elem)\r\n\t\r\n\tif(elem.dueDate!=undefined){\r\n\t\t// console.log(elem)\r\n\t\tlet atr = fecha.htmlToday(elem.dueDate)\r\n\t\tif(atr){\r\n\t\t\t\r\n\t\t\treturn true;\r\n\t\t}\r\n}\r\n}\r\n\r\nfunction insertarDom(nameProject){\r\n\tlet func = colocarTareaEnActualizado()\r\n\tif(func == true){\r\n\t\tmostrarTareas();\r\n\t}else if (func == false){\r\n\t\tmostrarToday()\r\n\t}else if (func == undefined){\r\n\t\t// console.log('hasta aca',nameProject)\r\n\t\tbsucarPorjecto(nameProject);\r\n\t\t// console.log('atr')\r\n\t}else{\r\n\t\tconsole.log('erro insertarDom');\r\n\t}\r\n}\r\n\r\n//busca el projeto\r\nfunction bsucarPorjecto(name){\r\n\tclases.almacenarProject.forEach(elem=>{\r\n\t\t\r\n\t\tif(elem.nameProject==name){\r\n\t\t\t// console.log('buscpro',elem.nameProject)\r\n\t\t\tcreate.showTareaProject(elem);\r\n\t\t}\r\n\t})\r\n}\r\n\r\nmodule.exports={mostrarTareas,mostrarToday,mostrarProjectss,colocarTareaEnActualizado, insertarDom,removeNewProjectTask}\n\n//# sourceURL=webpack://09_dolist/./src/divSelect.js?");

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const container = document.querySelector('.container');\r\nconst clases = __webpack_require__(/*! ./clases.js */ \"./src/clases.js\");\r\nconst create = __webpack_require__(/*! ./create */ \"./src/create.js\");\r\nconst divSelect = __webpack_require__(/*! ./divSelect */ \"./src/divSelect.js\");\r\nconst projectNameEdit = document.querySelector('.projectNameEdit');\r\nconst localStorage = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\")\r\nconst showProject = document.querySelector('.showProject');\r\n\r\nlet projectId = undefined;\r\n\r\nfunction editHijo(elem){\r\nconsole.log(elem)\r\n\t//si la tarea tiene un Projecto aparece el nombre del projecto\r\n\tprojectNameEdit.innerText= elem.project;\r\n\tif(elem.project == undefined){\r\n\t\tshowProject.innerHTML = 'Edit'\r\n\t\tprojectNameEdit.style.display = 'none';\r\n\r\n\t}else{\r\n\t\tshowProject.innerHTML = 'Project:'\r\n\t\tprojectNameEdit.style.display = 'flex';\r\n\t}\r\n\tlet form = document.formularioEdit;\r\n\tprojectId = elem.numId;\r\n\tform.nameTaskEdit.value = elem.title;\r\n\tform.descTaskEdit.value = elem.desc;\r\n\tform.dateTaskEdit.value = elem.dueDate;\r\n}\r\n\r\n//recibe los datos del formulario de edicion, \r\n//edita el elemento guardado\r\nfunction actualziarDatos(e){\r\n\tlet form = document.formularioEdit;\r\n\tconsole.log(e)\r\n\te.preventDefault();\r\n\tclases.almacenar.forEach(elem=>{\r\n\t\tconsole.log(elem)\r\n\t\t\r\n\t\tif(elem.numId==projectId){\r\n\t\t\telem.title = form.nameTaskEdit.value;\r\n\t\t\telem.desc = form.descTaskEdit.value;\r\n\t\t\telem.dueDate = form.dateTaskEdit.value;\r\n\t\t\t// console.log(elem.getLeer)\r\n\t\t\r\n\t\t\tdivSelect.insertarDom(elem.project);\r\n\t}}\r\n\t\r\n\r\n\t\r\n)\r\nlocalStorage.guardar_LocalStorage()\r\n\r\ndocument.formularioEdit.style.visibility = 'hidden';\r\n\r\n\r\n}\r\nexports.actualziarDatos = actualziarDatos;\r\n\r\nexports.editHijo=editHijo;\n\n//# sourceURL=webpack://09_dolist/./src/edit.js?");

/***/ }),

/***/ "./src/fecha.js":
/*!**********************!*\
  !*** ./src/fecha.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("let nuvaFecha='';\r\nlet fechaActual = [];\r\nlet dateTask = document.querySelector('.dateTask');\r\n\r\n//recibe la fecha, para ver si lo pone en el div Today\r\nfunction htmlToday(elem){\t\r\n\tlet fecha = elem;\r\n\tnuvaFecha=fecha;\r\n\tfechaHoy();\r\n\treturn devolverFecha();\r\n\r\n}\r\n\r\n//guarda la fecha de hoy\r\nfunction fechaHoy(){\r\n\t\t\tconst date = new Date();\r\n\t\t\tlet day = date.getUTCDate();\r\n\t\t\tlet month = date.getMonth()+1;\r\n\t\t\tlet year = date.getUTCFullYear();\r\n\t\t\r\n\t\t\tfechaActual.push(day);\r\n\t\t\tfechaActual.push(month);\r\n\t\t\tfechaActual.push(year);\r\n\t\t}\r\n\r\n//compara la fecha del objeto ocn la actual a ver si devuelve true o no\r\nfunction devolverFecha(){\r\n\t// console.log(nuvaFecha,'nueva fecha')\r\n\t\t\tlet dividir = nuvaFecha.split('-');\r\n\t\t\t// console.log(dividir,'nueva fecha')\r\n\t\t\tlet dayNf = parseFloat(dividir[2]);\r\n\t\t\tlet monthNf = parseFloat(dividir[1]);\r\n\t\t\tlet yearNf = parseFloat(dividir[0]);\r\n\r\n\t\t\tlet restarDay = parseFloat(fechaActual[0]) - dayNf;\r\n\t\t\tlet restarMonth = parseFloat(fechaActual[1]) - monthNf;\r\n\t\t\tlet restarYear = parseFloat(fechaActual[2]) - yearNf;\r\n\t\t\t// console.log('nueva fecha',nuvaFecha)\r\n\r\n\t\t\tif (restarYear<1&&restarYear>-1&&restarMonth<1&&restarMonth>-1&&restarDay<=1&&restarDay>=-1){\t\r\n\t\t\t\t// console.log('esta en el if')\t\r\n\t\t\t\t// console.log('restarDay',restarDay,'restarMonth',restarMonth,restarYear)\t\r\n\t\t\t\treturn true;\t\t\t\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t// console.log('nueva fecha',nuvaFecha)\r\n\t\t\t// console.log('fecha actual',fechaActual)\r\n\t\t\t\r\n\t\t\t// console.log(dayNf,monthNf,yearNf)\r\n\t\t\t// console.log(fechaActual[2],fechaActual[1],fechaActual[0])\t\r\n\t\t\r\n\t\t}\r\n\r\n\r\nexports.htmlToday=htmlToday;\n\n//# sourceURL=webpack://09_dolist/./src/fecha.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const menu = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\r\nconst create = __webpack_require__(/*! ./create.js */ \"./src/create.js\");\r\nconst clases = __webpack_require__(/*! ./clases */ \"./src/clases.js\");\r\nconst divSelect = __webpack_require__(/*! ./divSelect */ \"./src/divSelect.js\")\r\nconst edit = __webpack_require__(/*! ./edit */ \"./src/edit.js\")\r\nconst localStorage = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\")\r\nconst formsBarra = document.querySelector('.barra');\r\nconst formularioEditBtn = document.querySelector('.formularioEdit-btn');\r\nconst vemosTexto = document.querySelector('.vemosTexto');\r\nconst tareasSelect = document.querySelector('.tareasSelect');\r\nconst todaySelect = document.querySelector('.todaySelect');\r\nconst containerProjectssSelect = document.querySelector('.containerProjectssSelect');\r\nconst container = document.querySelector('.container');\r\nconst createTask = document.querySelector('.createTask');\r\nconst createProjec = document.querySelector('.createProjec');\r\nconst closeForm = document.querySelectorAll('.closeForm');\r\nconst crateContainer = document.querySelectorAll('.crateContainer');\r\nconst formsPrincpales = document.querySelector('.formsPrincpales ');\r\n\r\ncrateContainer.forEach(elem=>{\r\n\telem.addEventListener('click',()=>{\r\n\t\tformsPrincpales.classList.remove('formsPrincpales-oculto')\r\n\t})\r\n})\r\n\r\ncloseForm.forEach(crose =>{\r\n\tcrose.addEventListener('click',()=>{\r\n\t\tdocument.formulario.style.visibility = 'hidden';\r\n\t\tdocument.formularioEdit.style.visibility = 'hidden';\r\n\t\tdocument.createProject.style.visibility = 'hidden';\r\n\t\tdocument.tareaProject.style.visibility = \"hidden\";\r\n\t})\r\n\r\n})\r\n\r\ncreateProjec.addEventListener('click',()=>{\r\n\tdocument.createProject.style.visibility = 'visible'\r\n})\r\ncreateTask.addEventListener('click',()=>{\r\n\tdocument.formulario.style.visibility = 'visible'\r\n})\r\n\r\ndocument.formulario.addEventListener('submit',create.getFormulario);\r\ndocument.formularioEdit.addEventListener('submit',edit.actualziarDatos);\r\n\r\ndocument.createProject.addEventListener('submit',create.createProject);\r\n\r\ndocument.tareaProject.addEventListener('submit',create.tareaProject);\r\nformsBarra.addEventListener('click',menu.showMenu)\r\ncontainer.addEventListener('click',menu.hideMenu)\r\n\r\n\r\ntareasSelect.addEventListener('click',function(){\t\r\n\tdivSelect.mostrarTareas();\r\n\tmenu.showMenu();\r\n} )\r\ntodaySelect.addEventListener('click',()=>{\r\n\tdivSelect.mostrarToday();\r\n\tmenu.showMenu();\r\n} )\r\n\r\n\r\nlocalStorage.recuperar_LocalSotrage();\r\n\r\n\r\n//carga lo del local sotrage\r\ncreate.recorrerAlmacenarProject();\r\ndivSelect.mostrarTareas();\r\n\n\n//# sourceURL=webpack://09_dolist/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const clases = __webpack_require__(/*! ./clases */ \"./src/clases.js\");\r\n\r\n//queda guardado en la pc que lo creo\r\nfunction recuperar_LocalSotrage(){\r\n\tconsole.log('entro')\r\n\tlet tarea = JSON.parse(localStorage.getItem('tarea'));\r\n\tlet project = JSON.parse(localStorage.getItem('project'));\r\n\t// console.log(tarea)\r\n\t// console.log(project)\r\n\t\r\n\t\ttarea.forEach(element => {\r\n\t\t\tclases.almacenar.push(element);\r\n\t\t});\r\n\t\r\n\t\r\n\t\r\n\t\tproject.forEach(elem => {\r\n\t\t\tclases.almacenarProject.push(elem)\r\n\t\t})\r\n\t\t\r\n\t}\r\n\r\n  \r\n  \r\n \r\n  \r\n  function guardar_LocalStorage(){\t \r\n\tlocalStorage.setItem('tarea',JSON.stringify(clases.almacenar))\t\r\n  }\r\n\r\n  function guardar_LocalStorageProject(){\t \r\n\tlocalStorage.setItem('project',JSON.stringify(clases.almacenarProject))\r\n  }\r\n \r\n  \r\n\r\n  exports.guardar_LocalStorage = guardar_LocalStorage;\r\n  exports.recuperar_LocalSotrage = recuperar_LocalSotrage;\r\n  exports.guardar_LocalStorageProject = guardar_LocalStorageProject;\n\n//# sourceURL=webpack://09_dolist/./src/localStorage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("const formsPrincpales = document.querySelector('.formsPrincpales');\r\n\r\n\r\n\r\nconst container = document.querySelector('.container');\r\nconst formsBarra = document.querySelector('.barra');\r\nconst containerProjectss = document.querySelector('.containerProjectss');\r\nconst containerToday = document.querySelector('.containerToday');\r\nfunction showMenu(){\r\n\tconsole.log('menu')\r\n\tformsPrincpales.classList.toggle('formsPrincpales-oculto');\r\n\tformsBarra.classList.toggle('barraColor');\r\n\tcontainer.classList.toggle('colorActive');\r\n\tcontainerProjectss.classList.toggle('colorActive');\t\r\n\tcontainerToday.classList.toggle('colorActive');\r\n\t\r\n}\r\n\r\nfunction hideMenu(){\r\n\tif(formsPrincpales.classList.contains('formsPrincpales-oculto')){\r\n\t\tshowMenu()\r\n\t}\r\n}\r\nexports.showMenu = showMenu;\r\nexports.hideMenu = hideMenu;\n\n//# sourceURL=webpack://09_dolist/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;