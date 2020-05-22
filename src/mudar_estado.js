class mudar {

        constructor(){
        }
        mudar_voz(mudança)
        {          
                if(mudança[0]==false){
                        c.theads();
                        var tempo = window.setInterval(function(){
                                if(v.IA == undefined)clearInterval(tempo);
                                else if(v.IA != undefined){
                                        if(v.IA.pending == false && v.IA.speaking == false){
                                                m.estado = true;
                                                c.texto = c.proxima;
                                                s.mudar_mapa([m.estado]);
                                                clearInterval(tempo);
                                        }
                                }
                        },2000);
                }         
        }
        mudar_mapa(mudança)
        {
                if(mudança[0] == true)
                {
                        e.theads();
                }
                else s.mudar_voz(mudança);    
        }   
    }
const s = new mudar();
m.inicial();
 
async function permissão_usuario(){
        
      async  function audio_microfone(){
                this.permissão ={
                        audio:true,
                        video:true
                }
               navigator.mediaDevices.getUserMedia(this.permissão).then(stream=>{
                      var error =   stream.getAudioTracks()[0].label;
                        if(error == "OverconstrainedError"){
                                return new OverconstrainedError("Erro em OverconstrainedError");
                         }
                         else if(error == "SecurityError"){
                                return new SecurityError("Erro em SecurityError");
                         }
                         else if(error == "TypeError"){
                                return new TypeError("Erro em TypeError");
                         }
                         else if(error == "AbortError"){
                                return new AbortError("Erro em AbortError")
                         }
                         else if(error == "NotAllowedError"){
                        return new NotAllowedError("Erro em NotAllowedError");
                         }
                         else if(error == "NotFoundError"){
                                return new NotFoundError("Erro em NotFoundError");
                         }
                         else if(error == "NotReadableError"){
                                return new NotReadableError("Erro em NotReadableError")
                         }
                        
                        m.estado = false;
                        s.mudar_voz([m.estado]);
                
                })
               
        }
            var numero_navegador = parseInt(navigator.appVersion.slice(91,112).slice(7));
           
            if(numero_navegador != 70){
               
                    
                var stream =  await navigator.permissions.query({name:"microphone"});              
                        if(stream.state == "granted"){
                                audio_microfone()
                        }
                         else if(stream.state == "denied"){
                                audio_microfone();
                         }
                         else {
                                audio_microfone();
                         }
                
            }
}
var chrome=  L.Browser.chrome;
var opera = L.Browser.mobileOpera;
if(chrome || opera)  permissão_usuario(); 
else 
{

        function error(navegador)
                        {
                                alert("Utilize outro navegador pois,  o " + navegador +
                                " ainda não funciona nesta página.");
                                console.clear();
                        }
        var internet_explore= L.Browser.ie;
        var edge = L.Browser.ielt9;
        if(internet_explore) error("Internet Explorer");     
        else if(edge) error("Edge");
        else 
        {
                m.estado = false;
                s.mudar_voz([m.estado]);
        }
}
// modo tela cheia
// var f11 = confirm("Deseja o modo tela cheia ?");
// if(f11 == true){
//      async function  full(){
//         if(chrome){
//                 document.documentElement.requestFullscreen();
//         }
//         else if( opera){
//                 document.documentElement.webkitRequestFullscreen();
//         }
//                 }
//         return new Promise((re))
//         full();
	
// 	// if (element.requestFullscreen) {
// 	// 	
// 	// } else if (element.mozRequestFullScreen) {
// 	// 	element.mozRequestFullScreen();
// 	// } else if (element.webkitRequestFullscreen) {
// 	// 	element.webkitRequestFullscreen();
// 	// } else if (element.msRequestFullscreen) {
// 	// 	element.msRequestFullscreen();
// 	// }
// }
// else {
//         alert("obrigado pela prefencia ");
// }



       