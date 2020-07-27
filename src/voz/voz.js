
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
        this.msg.onstart = function(ev){
            var string  =ev.utterance.text;
            console.log(string.indexOf("Caffa"));
            if(string.indexOf("Caffa") !=  -1){
                o.ordem_contada();
            }
            else if(string.indexOf("desembarque") !=  -1){
                o.ordem_contada();
            }
        }
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
