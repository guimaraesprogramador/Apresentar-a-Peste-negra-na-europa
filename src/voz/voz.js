
class voz {
    
    constructor(){ 
      
    }
    transmitir(falar){
    try{
        this.msg =  new SpeechSynthesisUtterance();
        this.msg.text = falar;
        this.msg.volume = 0.7;
        this.msg.lang = "pt-BR";
        this.IA = window.speechSynthesis;
        this.IA.speak(this.msg);
        
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
