class voz {
    
    constructor(){ 
      
    }
    transmitir(falar){
    var msg =  new SpeechSynthesisUtterance();
    msg.lang = "pt-br";
    msg.volume = 0.7;
    msg.text = falar;
    var isChrome =  window.chrome == undefined ? false:true;
    if(isChrome){
        if(window.speechSynthesis !== undefined ){
            
            window.speechSynthesis.speak(msg);
        }
        else{
            console.clear();
            alert("por favor login na sua conta google. \n Caso não queria utilize Firefox ou Microsft Edge");
        }
    }
    else
        {
        window.speechSynthesis.speak(msg);
        }
    }
}
const v = new voz();
self.addEventListener("message",ev=>{
    var tipo = ev.data[0];
    switch(tipo){
        case "abertura":
           var abertura = ev.data[1];
            postMessage({resposta:abertura});
       break;
       case "introdução":
           var introdução = ev.data[1];
           postMessage({resposta:introdução});
           break;
        case "inicio":
            var inicio =  ev.data[1];
            postMessage({resposta:inicio});
            break;
    }
});