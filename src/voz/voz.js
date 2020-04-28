class voz {
    
    constructor(){ 
      
    }
    transmitir(falar){
    var msg =  new SpeechSynthesisUtterance();
    msg.lang = "pt-br";
    msg.volume = 0.7;
    msg.text = falar;
    this.IA =  window.speechSynthesis;
    var isChrome =  window.chrome == undefined ? false:true;
    if(isChrome){
        if(this.IA.speaking){
           this.IA.speak(msg);
        }
        else{
            console.clear();
            alert("por favor Faça o login na conta google. \n  Se não utilize o Firefox ou Edge");
        }
    }
    else
        {
      this.IA.speak(msg);
        }
    }
}
const v = new voz();
self.addEventListener("message",ev=>{
    var tipo = ev.data[0];
    switch(tipo){
        case "abertura":
          postMessage({resposta:tipo});
          self.close();
       break;
       case "introdução":
            postMessage({resposta:tipo});
            self.close();
           break;
        case "parte_1":
            postMessage({resposta:tipo});
            self.close();
            break;
    }
});