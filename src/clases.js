const edit = require('./edit.js');
const create = require('./create');
const divSelect = require('./divSelect');
const projectNameEdit = document.querySelector('.projectNameEdit');
const container = document.querySelector('.container');
const containerProjectss = document.querySelector('.containerProjectss');
const containerProjectssSelect = document.querySelector('.containerProjectssSelect');
// const tareaProjectDom = document.querySelector('.tareaProjectDom');
const projectName = document.querySelector('.projectName');
const tareaProjectDom = document.querySelector('.tareaProject');
let almacenar = [];

let almacenarProject=[];

let Project = class Project{
	constructor(nameProject,numId){
		this.numId = numId,
		this.nameProject = nameProject
	
	}
	set setNumId(id){
		this.numId = id;
	}
	set setNameProject(np){
		this.nameProject = np;
	}
	get getLeer(){
		return {numId : this.numId, nameProject : this.nameProject};
	}
	guardar(){		
		almacenarProject.push(this.getLeer);		
	}
	
	
}

let Tarea = class Tarea{
	constructor(numId,title, desc, dueDate,complete=false){
		
	this.numId = numId,
	this.title = title,
	this.desc = desc,
	this.dueDate = dueDate,
	this.complete = complete	
	}
	set setId(id){
		return this.numId = id;
	}
	set setTitle(title){
		return this.title = title;
	}
	set setDesc(desc){
		return this.desc = desc;
	}
	set setDueDate(dueDate){
		return this.dueDate = dueDate;
	}
	set setComplete(complete){
		return this.complete = complete;
	}
	guardarInfo(){
		
		 almacenar.push(this.getLeer);
		
	}	
	get getLeer(){
		return  {numId:this.numId,  title:this.title,desc:this.desc, dueDate:this.dueDate, complete:this.complete};
		
	}
	
}	


let TareaProject = class TareaProject extends Tarea{
	constructor(numId,title, desc, dueDate, project,complete){
		super(numId,title, desc, dueDate,complete);		
		this.project = project
	}
	set setNameProject(project){
		this.project = project;
	}
	guardar(){		
		
		almacenar.push(this.getLeer);
		// almacenar.push(b)
		// console.log(almacenar)	
	}
	get getLeer(){
		 let c = super.getLeer;
		 c.project = this.project;	
		return c;
	}
	
}


exports.almacenar = almacenar;
exports.Tarea = Tarea;
exports.almacenarProject = almacenarProject;
exports.TareaProject =TareaProject;
exports.Project = Project;