var theMessage = [
  '<p>Thanks for sending in your list early! I will ask the elves to start making your gifts soon.Just so you know: My favorite kind of cookie is chocolate chip!<br><Merry Christmas,</p>',

  '<p>You have been very good this year! Keep up the good work. I got your list. I will check it twice before I come on Christmas</br>Happy Holidays,</p>',

  '<p>Thank you for your list! You picked some good toys. I know the elves are excited to make it for you! </br> Remember to keep being good,</p>',

  '<p>What a great list! Rudolph thinks so too.</br> Remember to keep being good,</p>',

  '<p>Great lsit! You are luck you came to Christmas in Candyland, that way I am sure to get it! </br> Remember: I know if you are naughty or nice.</p>',

  '<p>Thanks for sending you list. Tomorrow I am helping Rudolph train the reindeer in training. I hope you do something fun tomrrow too.</br> I will be there on Christmas,</p>',

  '<p>Nice list! The elves really like it too! So you know: My favorite drink is hot chocolate!<br>Be good,</p>',

  '<p>I got your list. Next week I will help my elves paint my sled. I hope you help out around the house too. Helping your family makes sure you get on the nice list!<br>Merry Christmas,</p>',

  '<p>What a great list! Rudolph thinks so too.</br> Remember to keep being good,</p>',

  '<p>Wow, I am busy tonight. But not too busy. I already looked at your list! Those toys look pretty cool!<br>Remember: I know who has been naughy or nice,</p>',

  '<p>Cool List! Mrs. Claus really likes your first choice! Enjoy Christmas in Candyland!</br>Ho Ho Ho,</p>',

  '<p>Tis the season to be jolly. You must be jolly because this list is really cool! Remember: Helping your family gets you on the nice list,</p>',

  '<p>Thanks for sending your list! It looks great!</br> Remember I wont come to your house if you are awake on Christmas, so get to bed early that night! <br> Ho Ho Ho,</p>',

  '<p>I got your list! You picked some really super stuff! Rememeber to leave some vegetables for the Reindeer!<br> Happy Holidays</p>',

  '<p>Thanks for sending your list early! Turning it in early means the elves have time to make your presents.</br> Remember to keep being good. I know who has been naughty or nice!<br> Merry Christmas</p>',

  '<p>Ho Ho Ho! Nice List! The elves will begin working on your presents soon!<br>Remember to leave me some cookies and milk!</p>',




];
var randomMsg = [];

var theMessageIndex = Math.random();
theMessageIndex = theMessageIndex * theMessage.length;
theMessageIndex = Math.floor(theMessageIndex);

var singleMsg = theMessage.splice(theMessageIndex, 1);




var MsgFromSanta =
document.querySelector('.msg-from-santa');

MsgFromSanta.innerHTML = singleMsg;

///Users/ChelseyW/Dev/Candyland/message.html
