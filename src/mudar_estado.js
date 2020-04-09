if (window.Worker){  
    class mudar{
        observar_voz= false;
        executar_mapa = false;
        excutar_voz = false;
        observar_mapa = false;
        constructor(){
            this.estado = new Worker("src/voz/voz.js");
        }
    mudar_voz(executar)
    {
            this.excutar_voz = executar;
            if(  this.excutar_voz == false && this.executar_mapa == false){
               
                
                    mensagem("introdução completa")
                        this.estado.onmessage = function(ev){
                            this.excutar_voz = ev.data;
                         }
                             this.estado.terminate();
                
                
            }
        
    }
    mudar_mapa(observar)
    {
           this.observar_voz = observar; 
           if(this.observar_voz == false && this.executar_mapa == true){
            while(this.excutar_voz ==false){
               this.estado.postMessage("exbir circulos  parte I");
               this.excutar_voz =  exibição_circulos();
            }

           }
            
    }
    }
    const p = new mudar(); 
    p.mudar_voz(false);   
    function avança(){
        var aceito = document.getElementById("sim").value;
        if(aceito == "Aceito"){
            p.mudar_mapa(false);
        }
    }
    
}
