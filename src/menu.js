const formsPrincpales = document.querySelector('.formsPrincpales');



const container = document.querySelector('.container');
const formsBarra = document.querySelector('.barra');
const containerProjectss = document.querySelector('.containerProjectss');
const containerToday = document.querySelector('.containerToday');
function showMenu(){
	console.log('menu')
	formsPrincpales.classList.toggle('formsPrincpales-oculto');
	formsBarra.classList.toggle('barraColor');
	container.classList.toggle('colorActive');
	containerProjectss.classList.toggle('colorActive');	
	containerToday.classList.toggle('colorActive');
	
}

exports.showMenu = showMenu;