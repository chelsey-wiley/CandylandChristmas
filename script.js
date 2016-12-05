var grid = document.querySelector('.toy-box');
console.log('grid', grid);

grid.addEventListener('click', function(evt){
  console.log('clicked', evt.target);

  if (evt.target.tagName === "IMG"){

    evt.target.src = "check.gif";

  }


});
