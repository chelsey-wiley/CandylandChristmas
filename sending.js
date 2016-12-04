console.log('sending');

var yes =
document.querySelector('.yes');
var no = document.querySelector('.no');

yes.addEventListener('click', function(){
console.log('yes clicked')

var yesMessage =
document.querySelector('.confirm');
yesMessage.innerHTML = '<p class="sending">sending...</p>'

setTimeout(function() {
  yesMessage.innerHTML='<p id="sent">Your message has been sent to Santa.<a href="message.html">Click here</a> to see Santa&#39;s reply. </p>';
  console.log('sent');
}, 4500);

});

no.addEventListener('click', function(){
console.log('no clicked')

var noMessage =
document.querySelector('.confirm');
noMessage.innerHTML = '<p id="nope">I want to <a href="wishlist.html">go back</a> and change my list.</p>'
});
