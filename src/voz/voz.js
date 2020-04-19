class voz {
    
    constructor(){ 
      
    }
//   quem(){
//         try{
//             return c.texto;
//         }catch(ev){
//             console.log("Algo deu errado.");
//         }
//     }
 
    transmitir(falar){
    var msg = new SpeechSynthesisUtterance(falar);
    msg.lang = "pt-br";
    msg.volume = 0.7;
    window.speechSynthesis.speak(msg);
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