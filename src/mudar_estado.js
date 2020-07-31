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
            function modo_tela(){
                Swal.fire({
                        title:"Deseja tela no máximo ?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                }).then((result)=>{
                        if (result.value) {
                                document.body.requestFullscreen();
                        }
                })
                    
            }
               navigator.permissions.query({name:tipo}).then(r=>{
                       if(r.state == "granted"){
                        modo_tela();
                        audio();
                       }
                        else if(r.state == "denied"){
                        modo_tela();
                        audio();
                        }
                        else if(r.state == "prompt"){
                                var cadeado , microfone,setting;
                                cadeado = document.createElement("img");
                                cadeado.src = "https://img.icons8.com/metro/26/000000/lock-2.png";
                                microfone =  document.createElement("img");
                                microfone.src = "https://img.icons8.com/android/26/000000/microphone.png";
                                setting = document.createElement("img");
                                setting.src = "https://img.icons8.com/metro/26/000000/settings.png";

                                var permissão_microphone = "<h3> Para assistir é necessario o acesso ao microfone. "+
                                "Para isso pode seguir o Exemplo abaixo: "+" </h3> " +
                                "\n 1° No link da página, no lado esqurdo tem um botão tem click e depois click na imagem abaixo: <br>"+
                                cadeado.outerHTML.toString() + " <br> "+ "\n 2° De um click essa imagem acima, depois click na imagem abaixo:      <br>"+
                                setting.outerHTML.toString() + "<br>" + "\n 3° De um click nesta imagem acima em seguia cick em  permite na imagem abaixo: <br>"+
                                microfone.outerHTML.toString();
                                Swal.fire({
                                        icon:'error',
                                        title:"Oops...",
                                        html:permissão_microphone.toString()
                                })
                                
                        }
               })
                         
            }
            else {
                m.estado = false;
                s.mudar_voz([m.estado]);
            }
}
if(navigator.onLine){
        var chrome = L.Browser.chrome;
        var opera = L.Browser.mobileOpera;
        var android  = L.Browser.android || L.Browser.android23 || L.Browser.mobileWebkit;
        if(android)
        {        
                
                        // Futuramente implentação do android ou ios.
                        var div = document.createElement("div");
                        div.innerHTML += " Aviso importante  \n";
                        div.innerHTML += " A página ainda não funciona para Android ou IOS.";
                        Swal.fire({
                                icon:'error',
                                title:"Oops...",
                                html:div.outerHTML.toString()
                        });
              
        }
        else if(chrome){
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
                                        Swal.fire({
                                                icon:'error',
                                                title:"Oops...",
                                                html:"Utilize outro navegador pois,  o " + navegador +
                                                " ainda não funciona nesta página."
                                        });
                                        
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
                                div.innerHTML += " um ruido bastate agudo na apresentação desta animação e travamento em alguns componentes.";
                                div.id = "aviso";
                                var aviso = confirm(div.innerText);
                                Swal.fire({icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes ',
                                        html:div.outerHTML.toString(),
                                        reverseButtons: true
                                }).then((result=>{
                                        if (result.value) {
                                                m.estado = false;
                                                s.mudar_voz([m.estado]);
                                        }
                                        else if( result.dismiss === Swal.DismissReason.cancel){
                                                Swal.fire(
                                                        "Melhor escolhar",
                                                        "Utilize outro dispositivo pois,"+ " para assitir a apresentação ",
                                                        'success'
                                                );
                                        }
                                }))
                                
                                
                        }
                        else{
                                m.estado = false;
                                s.mudar_voz([m.estado]);
                        }
                     
                }
        }
}
else{
        Swal.fire({icon: 'warning',
                title:"Oops...",
                text:"Sua internet não esta funcionado nesta página"
        });
}

    
