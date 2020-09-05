//-------------------- PROBLEMA 1 ----------------------------------
var endereco = {
  rua: 'Rua dos pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP',
};

function exibeEndereco(endereco) {
  console.log('O usuário mora em '+ endereco.cidade + '/' + endereco.uf + ', no bairro ' 
      + endereco.bairro + ', na rua "' + endereco.rua + '" com nº ' + endereco.numero + '.');
}

exibeEndereco(endereco);


//-------------------- PROBLEMA 2 ----------------------------------
function pares(x, y) {
  if(x <= y) {    //verifica qual o maior e o menor número passados como parâmetro
      var menor = x, maior = y;
  } else {
      var menor = y, maior = x;
  }

  while(menor <= maior) {     //percorre todos os números do menor ao maior
      if (menor % 2 == 0) {   
          console.log(menor); //exibe o número, caso seja par
      }
      menor++;
  }
}

pares(0, 10);


//-------------------- PROBLEMA 3 ----------------------------------
var skills = ['Javascript', 'ReactJS', 'React Native'];

function temHabilidade(skills) {
  var resultado = skills.indexOf('Javascript'); //indexOf retorna a posição de um elemento no array ou -1 caso não exista
  return ((resultado != -1) ? true : false);
}

console.log(temHabilidade(skills));


//-------------------- PROBLEMA 4 ----------------------------------
function experiencia(anos) {
  if(anos >= 0 && anos < 1){
      console.log('Iniciante');
  } else if(anos >= 1 &&  anos < 3) {
      console.log('Intermediário');
  } else if(anos >= 3 && anos < 7) {
      console.log('Avançado');
  } else if(anos >= 7) {
      console.log('Jedi Master');
  } else {
      console.log('Experiência desconhecida');
  }
}

experiencia(3);


//-------------------- PROBLEMA 5 ----------------------------------
var usuarios = [
  {
      nome: 'Diego',
      habilidades: ['Javascript','ReactJS', 'Redux']
  },
  {
      nome: 'Gabriel',
      habilidades: ['Vue','Ruby on Rails','Elixir']
  }
];

function exibeUsuarios(usuarios){
  for (var obj of usuarios){
      console.log('O ' + obj.nome + ' possui as habilidades ' + obj.habilidades.join() + '.');
  }
}

exibeUsuarios(usuarios);