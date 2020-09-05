var inputElement = document.querySelector('input[name=user]');
var buttonElement = document.querySelector('div#app button');
var divElement = document.querySelector('div#error');

var listElement = document.createElement('ul');
document.body.appendChild(listElement);

function getUser() {
  listElement.innerHTML = '';	//deleta todos os elementos em tela
  divElement.innerHTML = '';

  var loadingElement = document.createElement('li');
  loadingElement.appendChild(document.createTextNode('Carregando'));
  listElement.appendChild(loadingElement);

  axios.get('https://api.github.com/users/' + inputElement.value + '/repos')
    .then(function(response){
      listElement.innerHTML = '';	//deleta todos os elementos em tela					

      for (var obj of response.data) {						
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', obj.html_url);
        var textElement = document.createTextNode(obj.name);
        linkElement.appendChild(textElement);

        var reposElement = document.createElement('li');
        reposElement.appendChild(linkElement);
        listElement.appendChild(reposElement);
      }

      inputElement.value = '';
    })
    .catch(function(error) {
      console.warn(error);

      listElement.innerHTML = '';	//deleta todos os elementos em tela

      var textElement = document.createElement('p');
      textElement.appendChild(document.createTextNode('Error 404: Usuário não encontrado!'));
      divElement.appendChild(textElement);

      inputElement.value = '';
    }); 			
}