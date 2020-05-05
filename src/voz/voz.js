class voz {
    
    constructor(){ 
      
    }
    transmitir(falar){
    try{
        var msg =  new SpeechSynthesisUtterance();
        msg.lang = "pt-br";
        msg.volume = 0.7;
        msg.text = falar;
        this.IA =  window.speechSynthesis;
          this.IA.speak(msg);
        }catch(ev){
            console.error(ev);
           // console.clear();
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