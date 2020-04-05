if (window.Worker){
    var estado = new Worker("mapa.js");
    
    estado.addEventListener("message",function(e){
        switch(e.data){
            case "começando":
                mapa.ponto_inicial(exbir.latitude,exbir.longitude);
            break;
        }
                
    })
    estado.postMessage("começar");
    estado.terminate();
}
