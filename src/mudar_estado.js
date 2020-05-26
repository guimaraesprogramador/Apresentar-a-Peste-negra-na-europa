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
function permissão_usuario(tipo,boolaudio,boolvideo){
        
   function audio(){
                this.permissão ={
                        audio:boolaudio,
                        video:boolvideo
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
           
            if(numero_navegador != 70)
            {
               navigator.permissions.query({name:tipo}).then(r=>{
                       if(r.state == "granted")audio();
                        else if(r.state == "denied")audio();
                        else if(r.state == "prompt"){
                                alert("Para assistir é necessario o acesso ao microphone");
                                audio();
                        }
               })
                         
            }
            else {
                m.estado = false;
                s.mudar_voz([m.estado]);
            }
}
var chrome = L.Browser.chrome;
var opera = L.Browser.mobileOpera;
var android  = L.Browser.android || L.Browser.android23 || L.Browser.mobileWebkit;
if(android)
{
        var div = document.createElement("div");
        div.innerHTML += " Aviso importante  \n";
        div.innerHTML += " A página ainda não funciona para Android ou ios";
        alert(div.innerText);
}
else if(chrome || opera){
        var ia32 = parseInt(navigator.platform.slice(8))
        if(ia32 == 86){
                var div = document.createElement("div");
                div.innerHTML += " Aviso importante  \n"
                div.innerHTML  += "No "+ " navegador Chorme ou Chormium " + "o sistema  "+navigator.platform.slice(0,6) +
                  "ainda não funciona nesta página. "+" \n";
                div.id = "aviso";
                var aviso = confirm(div.innerText);
                if(aviso == true){
                        alert("Utilize outro dispositivo pois, este " + navigator.platform.slice(0,6) +
                        " ainda não funciona nesta página.");
                }
        }
         else permissão_usuario('microphone',true,false);
}
else 
{

        function error(navegador)
                        {
                                alert("Utilize outro navegador pois,  o " + navegador +
                                " ainda não funciona nesta página.");
                                console.clear();
                        }
        var internet_explore = L.Browser.ie ||  L.Browser.ie6	|| L.Browser.ie7;
        var edge = L.Browser.ielt9;
        if(internet_explore) error("Internet Explorer");     
        else if(edge) error("Edge");
        else 
        {
                var ia32 = parseInt(navigator.platform.slice(8))
                if(ia32 == 86){
                        var div = document.createElement("div");
                        div.innerHTML += " Aviso importante  \n"
                        div.innerHTML  += "No "+  navigator.platform.slice(0,6) + " pode ocasionar, "+" \n";
                        div.innerHTML += " um ruido bastate agudo na apresentação desta animação.";
                        div.id = "aviso";
                        var aviso = confirm(div.innerText);
                        if(aviso == true){
                                m.estado = false;
                                s.mudar_voz([m.estado]);
                        }
                        else {
                        alert("Utilize outro dispositivo pois,"+ " para assitir a apresentação ");
                        }
                }
                else{
                        m.estado = false;
                        s.mudar_voz([m.estado]);
                }
             
        }
}