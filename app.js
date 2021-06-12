//input
//var username = prompt(" give me your username ");

//processing
//var welcomemessage= "this script is working" + username ;

//output
//alert(welcomemessage);

var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"



//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


//var serverURL = " https://api.funtranslations.com/translate/minion.json"


function gettranslationURL(input) {
    return serverURL +  "?" + "text=" + input
}

//function errorhandler(error){
//   console.log("error occured", error)
//}



 function clickeventhandler() {
   
    //outputdiv.innerText = " translatedtext " +  txtinput.value ;
    var inputtext = txtinput.value; // taking i nput 

    //calling server for processing
    fetch(gettranslationURL(inputtext))
        .then(response => response.json())
        .then(json => { 
            var translatedtext = json.contents.translated;
            outputdiv.innertext =  translatedtext;
        })

    //.catch(errorhandler) //(used to show where error has occured) 
    
};

btntranslate.addEventListener("click", clickeventhandler)


//btntranslate.addEventListener("input", function clickeventhandler() {
    //console.log("input", txtinput.value)
//}) 

