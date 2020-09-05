function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = "#";
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return this.style.backgroundColor = color;
  }

function newBox() {
  var boxElement = document.createElement('div');

  boxElement.style.width = '100px';
  boxElement.style.height = '100px';
  boxElement.style.marginTop = '50px';
  boxElement.style.backgroundColor = '#f00';

  boxElement.addEventListener('mouseover',getRandomColor);
  document.body.appendChild(boxElement);
  
}