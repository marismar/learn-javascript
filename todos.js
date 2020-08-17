var inputElement = document.querySelector('#app input');	//referencia o elemnto input definido na div app do html 
var btnElement = document.querySelector('#app button');		//referencia o elemento button definido na div app do html

var listElement = document.createElement('ul');	//cria um elemento ul

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];	//inicializa a lista de todos com os valores da localStorage

function render(){
	listElement.innerHTML = '';	//deleta todos os elementos em tela
	
	for (var todo of todos){	//para cada item da lista de todos

		var linkElement = document.createElement('a');		//cria um elemento a
		linkElement.setAttribute('href','#');			//altera o atributo href do elemento a
		var linkText = document.createTextNode('Excluir');	//cria um novo elemento de texto
		linkElement.appendChild(linkText);			//adiciona o texto excluir ao elemento a href
		
		var pos = todos.indexOf(todo);					//salva a posicao de cada item da lista todo para informar a função deleteTodo
		linkElement.setAttribute('onclick','deleteTodo('+ pos +')');	//adiciona a função onclick deleteTodo para o elemento a href

		var todoElement = document.createElement('li');		//cria um elemento li
		var textElement = document.createTextNode(todo);	//cria um elemento de texto para o todo

		todoElement.appendChild(textElement);	//adiciona o texto ao elemento li
		todoElement.appendChild(linkElement);	//adiciona o link a href ao elemento li
		listElement.appendChild(todoElement);	//adiciona o elemento li à ul
	}
		document.body.appendChild(listElement);	//adiciona a lista ul ao corpo do html
}

render();

function addTodo(){
	var newTodo = inputElement.value;	
	todos.push(newTodo);		//adiciona o texto do input à lista de todos
	inputElement.value = '';	//limpa o campo de texto
	
	render();		//renderiza novamente os elementos em tela
	saveToStorage();	//salva os dados na localStorage
}

btnElement.onclick = addTodo;	//adiciona o novo elemento a lista de todos

function deleteTodo(pos){
	todos.splice(pos,1); 	//deleta o elemento da posição especificada

	render();		//renderiza novamente os elementos em tela
	saveToStorage();	//salva os dados na localStorage

}

function saveToStorage(){	
	localStorage.setItem('list_todos', JSON.stringify(todos)); //atualiza os todos na localStorage
}
