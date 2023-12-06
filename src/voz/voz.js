
class voz {
    
    constructor(){ 
      this.volume = 0.9;
      this.rate = 1.9;
    }
    transmitir(falar){
    try{
        var msg =  new SpeechSynthesisUtterance();
        msg.text = falar;
        msg.volume = this.volume;
        msg.lang = "pt-BR";
        msg.rate = this.rate;
        this.IA = window.speechSynthesis;
        this.IA.speak(msg);
        o.texto.avançar.push([msg.text,v.IA]);
        msg.onstart = function(ev){
            var string  = ev.utterance.text;
           
            if(string.indexOf("Caffa") !=  -1){
                o.ordem_contada();
            }
            o.texto.voltar.push([string,v.IA]);
        }
        msg.onerror = function(){
           
            Swal.fire({
                icon:'error',
                title:"Oops...",
                text:"Desculpe o incômodo, estamos trabalhando para conserta o problema"
            });
            location.reload(true);
        }
        msg.onend = function(ev){
            var inicio = ev.utterance.text;
            if(inicio.lastIndexOf("Sicília")!= -1){
                o.ordem_contada();
            }
            if( inicio.lastIndexOf("1347") != -1){
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
