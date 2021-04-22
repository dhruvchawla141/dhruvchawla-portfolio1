//input
//var username = prompt(" give me your username ");

//processing
//var welcomemessage= "this script is working" + username ;

//output
//alert(welcomemessage);

var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");


 function clickeventhandler() {
     outputdiv.innerText = "akajdskd"+  txtinput.value ;
   
};

btntranslate.addEventListener("click", clickeventhandler)


//btntranslate.addEventListener("input", function clickeventhandler() {
    //console.log("input", txtinput.value)
//}) 

