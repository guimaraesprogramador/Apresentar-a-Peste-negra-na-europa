class voz {
    
    constructor(){ 
      
    }
    transmitir(falar){
    try{
        this.IA =  window.speechSynthesis;
        var msg =  new SpeechSynthesisUtterance();
        msg.volume = 0.7;
        msg.text = falar;
        var voice = this.IA.getVoices();
        for(var i = 0;i<voice.length;i++){
            if(voice[i].lang == "pt"){
                msg.voice = voice[i];
                msg.lang = voice[i].lang;
            }
        }
        
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