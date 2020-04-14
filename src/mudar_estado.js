var worker_voz =  new Worker("/src/voz/voz.js");
// var worker_mapa = new Worker("/src/mudar_estado.js");
class mudar{
        observar_voz= false;
        executar_mapa = false;
        excutar_voz = false;
        observar_mapa = false;
        constructor(){
           
        }
        mudar_voz(executar)
        {  
                this.excutar_voz = executar[0];
                    if( this.executar_mapa == false){    
                        switch(this.excutar_voz){
                            case  "introdução completa":
                                Translatotron(executar[1]);
                            break;
                            case "inicio":
                                Translatotron(executar[1]);
                                break;
                        } 
                        this.executar_mapa  = true;
                    } 
        }
        mudar_mapa(observar)
        {
            this.observar_voz = observar[0]; 
            if(this.executar_mapa == true){
            switch(this.observar_voz){
                case "inicio":

                    break;
            }
                
            }
                
        }
    
    }
    var  p = new mudar();
    if (typeof(Worker) !== "undefined"){  
            worker_voz.postMessage(["introdução",personagem]);
            worker_voz.onmessage =function(event){
                p.excutar_voz = event.data.resposta;
                switch(p.excutar_voz){
                    case "introdução completa":
                        var dados = [p.excutar_voz,event.data.falar];
                        p.mudar_voz(dados);
                        worker_voz.terminate();
                        worker_voz = null;
                    break;
                    case "inicio":
                        var dados = [p.excutar_voz,event.data.falar];
                        worker_mapa.postMessage(["inicio"]);
                        p.mudar_mapa(dados);
                        break;
            }
        }
    }
