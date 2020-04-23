class  componentes_voz {
    constructor(){
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
    get falar(){
        return this.falar;
    }
    get texto(){
        return this.texto;
    }
    set texto(tipo){
        this.falar = tipo;
    }
    Roteiro(parte){
        try{
            
            switch(parte){
                case "abertura":
                    var linha ="Bem vindo " + "a projeção de cartografia " +"\n" +" a respeito" +
                    "da " + "Pandemia"+" de "+ "Peste "+ "bubônica," + "\n"+"com"+ " o foco \n no Continente Europeu,"+"\n"+
                    "O  nome do responsável pelo projeto é " + this.autor + "\n"+
                    "Quem está falando  é o " + this.Nome+"\n"+
                    "Sou uma "+ this.identidade + " criada pela "+  "empresa Google" +"\n"+
                    "com uma voz " + this.Genero + "."+"\n"+
                    "que " + " vai "+ "atuar " + "como "+ " guia " +" nesta projeção."
                    this.texto = linha;
                    break;
                case "introdução":
                   
                    var linha = {
                        primeira_parte:"Essa história \n não tem relação direta \n  com a Pandemia de Covid-19, \n mais sim \n os relados ",
                        segunda_linha:" que aconteceram \n naquela época \n durante \n a Idade Média \n",
                        terceira_linha: "sendo assim \n não me responsabilizo \n por qualquer informação \n",
                        quarta_linha:" incorreta dessa Pandemia \n pois, \n as informação são exclusivamente \n do site ou livro referentes na documentação.",
                        quinta_linha:" Sendo assim, \n será realizado \n uma projeção cartografica \n bidimensional da Pandemia Peste Bubônica \n com o mapa de 2020 \n ",
                        sexta_linha:"Caso queria \n o contado de  WhatsApp e o E-mail está na documentação. \n",
                        setima_linha:"Caso queria assistir a projeção, \n não saia desta página após \n três segundos desta divulgação. \n",
                        oitava_linha:"Sendo assim obrigado pelo compreendimento."
                    }
                    this.texto = linha.primeira_parte + linha.segunda_linha +
                    linha.terceira_linha + linha.quarta_linha +
                    linha.quinta_linha + linha.sexta_linha + linha.setima_linha +
                    linha.oitava_linha; 
                    break;
            case "parte_1":
                let parte_1 = [
                    {
                        index:0,
                        linhas:[
                            "a peste bubônica é a doença causada pela bactéria que se encontrava em ratos contaminados. ",
                            "Seu surgimento ainda é bastante discutido mais sim sabe se deu em um pais na Ásia Central durante a Idade Média.",
                            "Através das frotas genovesas que passam na Ásia central se deslocavam para continente europeu. ",
                            "Sua primeira parada foi a cidade de Caffa, com o resultado a cidade sucumbir perante a peste",
                            "Depois a frota passou em Sicília que ficou por três semanas com isso a bactéria ficou mais forte.",
                            "tanto que a frota foi expulsar de lá, e só conseguir ancoram no porto de martilhas no dia primeiro de novembro de 1347. "
                        ]   
                    }
                ]
                    var index =  parte_1[0].index;
                    this.texto = parte_1[0].linhas[index];
                    parte_1[0].linhas.shift();
                    parte_1[0].linhas.length !=0 ?  
                    parte_1[0].index =  parte_1[0].index  + 1 :  parte_1[0].index  = 0;
                    break;
            }
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
                        // conteudo de abertura
                        threads_voz.push(new Worker("src/voz/voz.js")); 
                        // conteudo de  introdução
                        threads_voz.push(new Worker("src/voz/voz.js"));  
                        threads_voz[0].postMessage([sequencia_primeira_parte[0]]);
                           threads_voz[1].postMessage([sequencia_primeira_parte[1]]);
                       
                            return new Promise((resolve,reject)=>{
                            threads_voz[0].onmessage = event=>{     
                                var resposta  = event.data.resposta == sequencia_primeira_parte[0] + 
                                    " completo" ? resposta = this.falar  :null;                    
                                    v.transmitir(resposta);               
                                    threads_voz[0].terminate();
                                    threads_voz[0] = null;
                                }
                            threads_voz[1].onmessage = event=>{
                                var resposta  = event.data.resposta == sequencia_primeira_parte[1] + 
                                    " completo" ? resposta = this.falar  :null;                    
                                v.transmitir(resposta);     
                                threads_voz[1].terminate();
                                threads_voz[1] = null;
                                threads_voz.pop();
                                threads_voz.pop();
                                sequencia_primeira_parte.shift();
                                sequencia_primeira_parte.shift();
                                let sequencia_segunda_parte = ["parte_1"];
                                sequencia_primeira_parte = sequencia_segunda_parte.slice();
                                sequencia_segunda_parte.pop();
                            }
                        });
                    }
                    else if(sequencia_primeira_parte[0] == "parte_1")
                    {
                        setTimeout(function(){
                            threads_voz.push(new Worker("src/voz/voz.js")); 
                            threads_voz.push(new Worker("src/voz/voz.js")); 
                            threads_voz.push(new Worker("src/voz/voz.js")); 
                            threads_voz.push(new Worker("src/voz/voz.js")); 
                            threads_voz.push(new Worker("src/voz/voz.js")); 
                             // linha 1 ate 6
                            threads_voz[0].postMessage([sequencia_primeira_parte[0], this.Roteiro(sequencia_primeira_parte[0])]);
                            threads_voz[1].postMessage([sequencia_primeira_parte[0], this.Roteiro(sequencia_primeira_parte[0])]);
                            threads_voz[2].postMessage([sequencia_primeira_parte[0], this.Roteiro(sequencia_primeira_parte[0])]);
                            threads_voz[3].postMessage([sequencia_primeira_parte[0], this.Roteiro(sequencia_primeira_parte[0])]);
                            threads_voz[4].postMessage([sequencia_primeira_parte[0], this.Roteiro(sequencia_primeira_parte[0])]);
                            threads_voz[5].postMessage([sequencia_primeira_parte[0], this.Roteiro(sequencia_primeira_parte[0])]);
                            return new Promise(((resulte,reject)=>{
                                threads_voz[0].onmessage = event=>{
                                    var resposta  = event.data.resposta == sequencia_primeira_parte[0] + 
                                    " completo" ? this.falar  :null;  
                                    v.transmitir(resposta);               
                                    threads_voz[0].terminate();
                                    threads_voz[0] = null;
                                }
                                threads_voz[1].onmessage = event=>{
                                    var resposta  = event.data.resposta == sequencia_primeira_parte[0] + 
                                    " completo" ? this.falar  :null;    
                                    v.transmitir(resposta);               
                                    threads_voz[1].terminate();
                                    threads_voz[1] = null;
                                }
                                threads_voz[2].onmessage = event=>{
                                    var resposta  = event.data.resposta == sequencia_primeira_parte[0] + 
                                    " completo" ? resposta = this.falar  :null;  
                                    v.transmitir(resposta);               
                                    threads_voz[2].terminate();
                                    threads_voz[2] = null;
                                }
                                threads_voz[3].onmessage = event=>{
                                    var resposta  = event.data.resposta == sequencia_primeira_parte[0] + 
                                    " completo" ? this.falar  :null;  
                                    v.transmitir(resposta);               
                                    threads_voz[3].terminate();
                                    threads_voz[3] = null;
                                }
                                threads_voz[4].onmessage = event=>{
                                    var resposta  = event.data.resposta == sequencia_primeira_parte[0] + 
                                    " completo" ? this.falar  :null;
                                    v.transmitir(resposta);               
                                    threads_voz[4].terminate();
                                    threads_voz[4] = null;
                                }
                                threads_voz[5].onmessage = event=>{
                                    var resposta  = event.data.resposta == sequencia_primeira_parte[0] + 
                                    " completo" ? this.falar  :null;  
                                    v.transmitir(resposta);               
                                    threads_voz[5].terminate();
                                    threads_voz[5] = null;
                                    threads_voz.pop();
                                    threads_voz.pop();
                                    threads_voz.pop();
                                    threads_voz.pop();
                                    threads_voz.pop();
                                    sequencia_primeira_parte.shift();
                                    sequencia_primeira_parte.shift();
                                    sequencia_primeira_parte.shift();
                                    sequencia_primeira_parte.shift();
                                    sequencia_primeira_parte.shift();
                                    sequencia_primeira_parte.shift();
                                    let sequencia_segunda_parte = ["parte_2"];
                                    sequencia_primeira_parte = sequencia_segunda_parte.slice();
                                    sequencia_segunda_parte.pop();
                                    m.estado = true;
                                    s.mudar_mapa([m.estado]);
                                }
                            }))
                            
                        },3000);
                    }
                    // else if(sequencia_primeira_parte[0] == "parte_2"){

                    // }
            }catch(ev){
                console.log(ev);
            }
          
        }
        
}
const  c = new componentes_voz();