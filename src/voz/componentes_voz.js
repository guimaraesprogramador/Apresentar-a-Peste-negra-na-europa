class  componentes_voz {
    constructor(){
        this._texto;
        this._falar;
    }
    get Genero(){
        return "parecida com o Feminino";
    }
    get Nome(){
        return "Translatotron";
    }
    get autor(){
        return "Kévin Vieira Gomes Guimaraes";
    }
    get identidade(){
        return "inteligência artificial";
    }
    Roteiro(parte){
        try{
            var texto = null;
            switch(parte){
                case "abertura":
                    var linha ="Bem vindo " + "a projeção de cartografia " +"\n" +" a respeito" +
                    "da " + "Pandemia"+" de "+ "Peste "+ "bubônica," + "\n"+
                    "O  nome do responsável pelo projeto é " + this.autor + "\n"+
                    "Quem está falando  é o " + this.Nome+"\n"+
                    "Sou uma "+ this.identidade + " criada pela "+  "empresa Google" +"\n"+
                    "com uma voz " + this.Genero + "."+"\n"+
                    "que " + " vai "+ "atuar " + "como "+ " guia " +" nesta projeção."
                    texto = linha;
                    break;
                case "introdução":
                   
                    var linha = {
                        primeira_parte:"Essa história \n não tem relação direta \n  com a Pandemia de Codiv-19, \n mais sim com \n os relados \n ",
                        segunda_linha:" que aconteceu \n no tempo estimado de 1346 a 1353 \n durante a Pandemia da Peste Bubônica \n",
                        terceira_linha: " (conhecida como peste negra), \n  sendo assim \n não me responsabilizo \n por qualquer informação \n",
                        quarta_linha:" irregular dessa Pandemia \n pois, \n as informação são exclusivamente \n de site ou livros referentes na documentação.",
                        quinta_linha:" Sendo assim, \n será realizado \n uma  projeção cartografica \n da Pandemia Peste Bubônica \n no tempo  estimado.",
                        sexta_linha:" Obrigado \n pelo compreendimento."
                    }
                    texto = linha.primeira_parte + linha.segunda_linha +
                    linha.terceira_linha + linha.quarta_linha +
                    linha.quinta_linha + linha.sexta_linha;
                    break;
            }
            return texto;
        }catch(ev){
            console.log(ev);
        }
       
    }
  theads(){
            try{
                
                    
                    let sequencia_primeira_parte = [];
                    let threads_voz = [];
                    if(sequencia_primeira_parte.length ==0){
                        sequencia_primeira_parte = ["abertura","introdução","inicio"];
                        // conteude de abertura
                        threads_voz.push(new Worker("src/voz/voz.js")); 
                        // conteude de  introdução
                        threads_voz.push(new Worker("src/voz/voz.js")); 
                        // threads_voz.push(new Worker("src/voz/voz.js")); 
                        threads_voz[0].postMessage([sequencia_primeira_parte[0],this.Roteiro(sequencia_primeira_parte[0])]);
                           threads_voz[1].postMessage([sequencia_primeira_parte[1],this.Roteiro(sequencia_primeira_parte[1])]);
                        // threads_voz[2].postMessage([sequencia_primeira_parte[2],this.Roteiro(sequencia_primeira_parte[2])]);
                       
                            return new Promise((resolve,reject)=>{
                            threads_voz[0].onmessage = event=>{
                                    this._fala = event.data.resposta;
                                    v.transmitir(this._fala);
                                    threads_voz[0].terminate();
                                    threads_voz[0] = null;
                                }
                            threads_voz[1].onmessage = event=>{
                                this._fala  = event.data.resposta;
                                v.transmitir(this._fala);
                                threads_voz[1].terminate();
                                threads_voz[1] = null;
                            }
                        });
                        
                        // threads_voz[2].onmessage = event=>{
                        //     this.fala  = event.data.resposta;
                        //      v.transmitir(resposta);
                        //      threads_voz[2].terminate();
                        //      m.carregar = false;
                        //      sequencia_primeira_parte.shift();
                        //      sequencia_primeira_parte.shift();
                        //     sequencia_primeira_parte.shift();
                        //      let sequencia_segunda_parte = ["parte_1","parte_2"];
                        //      sequencia_primeira_parte = sequencia_segunda_parte.slice();
                        //      s.mudar_mapa([m.carregar])                       
                        // }
                    }
                    else if(sequencia_primeira_parte[0] == "parte_1")
                    {
                        console.log(sequencia_primeira_parte.toString());
                        // threads_voz.push(new Worker("src/voz/voz.js")); 
                        // threads_voz.push(new Worker("src/voz/voz.js")); 
                        // threads_voz[0].postMessage([sequencia_primeira_parte[0]]);
                        // threads_voz[1].postMessage([sequencia_primeira_parte[1]]);

    
                    }
            }catch(ev){
                console.log(ev);
            }
          
        }
        
}
const  c = new componentes_voz();