var grid = document.querySelector('.toy-box');
console.log('grid', grid);

grid.addEventListener('click', function(evt){
console.log('clicked', evt.target);

var checkMark =
document.querySelector('.check-mark');

if (evt.target !==null) {
  console.log('removed image', evt.target);

// var theCheck =
// document.querySelector('.check-mark');
// theCheck.innerHTML = '<img src="check.gif" alt ="check mark">'
//
// theCheck.classList.remove('checkMark');
}
});
