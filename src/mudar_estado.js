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
                                                v.IA.pause();
                                                m.estado = true;
                                                c.texto = c.falar != undefined ? c.proxima  :"parte_2" ;
                                                console.log(c.falar);
                                                s.mudar_voz([m.estado]);
                                                clearInterval(tempo);
                                        }
                                }
                        },2000);
                }else s.mudar_mapa(mudança);                    
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
window.onload = function(){
        var isChrome =  window.chrome == undefined ? false:true;
        if(isChrome){
            if(window.speechSynthesis.speaking){
                m.estado = false;
                s.mudar_voz([m.estado])
            }
            else {
                alert("por favor Faça o login na conta google. \n  Se não utilize o Firefox ou Edge");
                console.clear();
            
            }
        }
        else
        {
                m.estado = false;
                s.mudar_voz([m.estado])
        }
        
       
    }
       