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
            console.error(" Erro na sintese de voz");
        }
}
}
const v = new voz();
self.addEventListener("message",ev=>{
    var tipo = ev.data[0];
    postMessage({resposta:tipo});
    self.close();
});