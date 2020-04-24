class mudar {

        constructor(){
        }
        mudar_voz(mudança)
        {          
                if(mudança[0]==false){
                        c.theads().then(r=>{
                                
                        }).catch(e=>{
                                console.log("erro na thread de componentes_voz");
                        })
                }
                else this.mudar_mapa(mudança[0]);                           
        }
        mudar_mapa(mudança)
        {
                if(mudança[0] == true){
                        e.theads().then(r=>{

                        }).catch(e=>{
                                console.log("erro na thread do componentes do mapa");
                        })
                }
                else this.mudar_voz(mudança[0]);
        }   
    }
    const s = new mudar();

    
