if (window.Worker){  
    class mudar{
        observar_voz= false;
        executar_mapa = false;
        excutar_voz = false;
        observar_mapa = false;
        estado = null;
        constructor(){
            this.estado = new Worker("src/mapa_codigo/mapa.js");
        }
        mudar_voz(executar)
        {

        }
        mudar_mapa(observar){

        }
    }
     
    
   
    // estado.onmessage = function(ev){

    // }
    
    //             mapa.ponto_inicial(exbir.latitude,exbir.longitude);
    // estado.postMessage("começar");
    // estado.terminate();
}
