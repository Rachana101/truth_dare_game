var arrayTruth = [
  "Tell us what your most embarassing moment is?",
  "Have you ever cheated on a big test?",
  "If you and another person were the last people on earth, who would that other person be?",
  "What is a job that you would not want to do?",
  "Have you ever rejected someone?",
  "Who do you hate and why?",
  "What's your biggest turn on?",
  "What's your biggest turn off?",
];

var arrayDare = [
  "Show everyone the most embarassing picture on your phone or social media",
  "Dance for 1 minute without music",
  "Tell us your worst fear",
  "Fill your mouth with water and everyone tells jokes and try not to spit out the water from laughing",
  "let someone style your hair and leave it like that whole day",
  "Fake cry as best as you can"
];

var truthButton = $('.truthbutton');
truthButton.on('click', showTruth);

var truthContainer = $('.truthcontainer')
function showTruth() {
  truthContainer.text(arrayTruth[2]);
  truthContainer.append(arrayTruth[3]);
}

var dareButton = $('.darebutton');
dareButton.on('click', showDare);
var dareContainer =$('.darecontainer')

function showDare() {
  dareContainer.text(arrayDare[2]);
  dareContainer.append(`<img src="https://cf.ltkcdn.net/dance/images/std/218447-600x450-Modern-Jazz-dancer.jpg">`);
}

var submit = $('.submit');
var secretContainer = $(`.secretContainer`);
var secretCode = $('.secretPasscode');

submit.on(`click`, checkCode);

function checkCode() {

  if (secretCode.val() === "tech,sis") {

    secretContainer.text("You have cracked the code!")
    secretContainer.append(`<img class="good" src="http://cdn.shopify.com/s/files/1/1433/9370/products/CnYZD64ABT8ngejsBhT7SxdrbY6LSy_159_compprod_grande.png?v=1527219659">`);
  }
  else{
    secretContainer.text(`Wrong Passcode!`)
    secretContainer.append(`<img class="good" src="https://i.pinimg.com/originals/5a/f5/49/5af549fb8335bf9a9f78f8572e16e9cf.jpg">`)
  }

}
