class voz {
    
    constructor(){ 
      
    }
    transmitir(falar){
    try{
        this.IA =  speechSynthesis;
        var msg =  new SpeechSynthesisUtterance();
        msg.text = falar;
        msg.volume = 0.5;
        msg.pitch = 1;
        this.IA.getVoices()[46];
        this.IA.speak(msg);
        }catch(e){
            console.error("erro em algum lugar");
        }
}
}
const v = new voz();
self.addEventListener("message",ev=>{
    var tipo = ev.data[0];
    postMessage({resposta:tipo});
    self.close();
});