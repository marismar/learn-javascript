var names = ["Diego", "Lucas", "Danilo", "Mirele"];
var listElements = document.createElement('ul');
for (var obj of names){
  var listElement = document.createElement('li');
  var textElement = document.createTextNode(obj);
  listElement.appendChild(textElement);
  listElements.appendChild(listElement);
}

document.body.appendChild(listElements);

function add(){
  var inputElement = document.querySelector('input[name=nome]');
  var text = inputElement.value;
  names.push(text);

  var listElement = document.createElement('li');
  var textElement = document.createTextNode(text);
  listElement.appendChild(textElement);
  listElements.appendChild(listElement);

  inputElement.value = '';
}