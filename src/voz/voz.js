
class voz {
    
    constructor(){ 
      
    }
    transmitir(falar){
    try{
        this.msg =  new SpeechSynthesisUtterance();
        this.msg.text = falar;
        this.msg.volume = 0.7;
        this.msg.lang = "pt-BR";
        this.msg.rate = 1.5;
        this.IA = window.speechSynthesis;
        this.IA.speak(this.msg);
        this.msg.onstart = function(ev){
            var string  = ev.utterance.text;
           
            if(string.indexOf("Caffa") !=  -1){
                o.ordem_contada();
            }
            o.texto.voltar.push([string,v.IA]);
        }
        this.msg.onerror = function(){
           
            Swal.fire({
                icon:'error',
                title:"Oops...",
                text:"Desculpe o incômodo, estamos trabalhando para conserta o problema"
            });
            location.reload(true);
        }
        this.msg.onend = function(ev){
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
