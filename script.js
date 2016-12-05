var grid = document.querySelector('.toy-box');
console.log('grid', grid);

grid.addEventListener('click', function(evt){
  console.log('clicked', evt.target);

  if (evt.target.tagName === "IMG"){

    if (evt.target.classList.contains('picked-it')) {
      evt.target.classList.remove('picked-it');
      console.log(evt.target.attributes);
      evt.target.src = evt.target.attributes['data-src'].value;
    }
    else {
      evt.target.classList.add('picked-it');
      evt.target.src = 'check.gif';
    }

  }
});
