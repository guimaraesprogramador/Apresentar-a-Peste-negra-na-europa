class  componentes_voz {
    constructor(){
        this.falar;
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
                    c.texto = linha;
                    break;
                case "introdução":
                   
                    var linha = {
                        primeira_parte:"Essa história \n não tem relação direta \n  com a Pandemia de Covid-19, \n mais sim \n os relados ",
                        segunda_linha:" que aconteceram \n naquela época \n durante \n a Idade Média \n",
                        terceira_linha:" Sendo assim, \n será realizado \n uma projeção cartografica \n bidimensional da Pandemia Peste Bubônica \n com o mapa de 2020 \n ",
                        quarta_linha:"O contado\n do telefone e o E-mail está na documentação. \n",
                        quinta_linha:"Para assistir a projeção, \n não saia desta página",
                        sexta_linha:"Sendo assim obrigado pelo compreendimento."
                    }
                    c.texto = linha.primeira_parte + linha.segunda_linha +
                    linha.terceira_linha + linha.quarta_linha +
                    linha.quinta_linha + linha.sexta_linha;
                    break;
            case "parte_1":
                let linhas =[
                    "a peste bubônica é a doença \n causada pela bactéria que se encontrava em ratos contaminados. ",
                    "Seu surgimento ainda é bastante discutido, \n mas sabe-se que deu origem de um país \n na Ásia Central durante a Idade Média. ",
                    "A peste foi transportada principalmente pelas rotas marítimas da Ásia central \n como a frota genovesa \n com o destino ao continente europeu.  ",
                    "Sua primeira parada foi a cidade de Caffa, \n com o resultado a cidade foi \n sucumbida perante a peste.",
                    "Depois a frota passou em Sicília \n que ficou  por três semanas ancorada \n com isso a bactéria ficou mais forte.",
                    "tanto que a frota foi expulsa de lá,\n e só conseguir ancorar no porto de Marselha no dia primeiro de novembro de 1347. "
                ]   
                c.texto = "";
                linhas.forEach((value,index,array)=>{
                    if(index == array.length -1){
                        linhas.pop();
                        linhas.pop();
                        linhas.pop();
                        linhas.pop();
                          // reprodução a parte 1 completa
                        break;
                    }
                    else c.texto = c.texto +  value.toString();
                })
                   
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
                    if(sequencia_primeira_parte.length == 0){
                        sequencia_primeira_parte = ["abertura","introdução","parte_1"];
                        // conteudo de abertura
                        threads_voz.push(new Worker("src/voz/voz.js")); 
                        // conteudo de  introdução
                        threads_voz.push(new Worker("src/voz/voz.js")); 
                        /// começo da história
                        threads_voz.push(new Worker("src/voz/voz.js")); 
                        threads_voz[0].postMessage([sequencia_primeira_parte[0]]);
                           
                            threads_voz[0].onmessage = event=>{ 
                                this.Roteiro(sequencia_primeira_parte[0]);    
                                var resposta  = c.falar;                    
                                    v.transmitir(resposta);               
                                    threads_voz[0] = null;
                                    threads_voz[1].postMessage([sequencia_primeira_parte[1]]);
                                }
                            threads_voz[1].onmessage = event=>{
                                this.Roteiro(sequencia_primeira_parte[1]);    
                                var resposta  = c.falar;           
                                v.transmitir(resposta);     
                                threads_voz[1] = null;
                                threads_voz[2].postMessage([sequencia_primeira_parte[2]]); 
                            }
                            // reprodução a parte 1
                            var tempo = window.setInterval(function(){
                                threads_voz[2].onmessage = event=>{    
                                    c.Roteiro(sequencia_primeira_parte[2]); 
                                    var resposta  = c.falar;   
                                    v.transmitir(resposta);     
                                    threads_voz.pop();
                                    threads_voz.pop();
                                    sequencia_primeira_parte.shift();
                                    sequencia_primeira_parte.shift();
                                   m.estado = true;
                                    s.mudar_mapa([m.estado ]);            
                                };
                            },200);
                           window.setTimeout(function(){
                                clearInterval(tempo);
                            },350)
                    }
                    // else if(sequencia_primeira_parte[0] == "parte_1")
                    // {
                    //         threads_voz.pop();
                    //         threads_voz.push(new Worker("src/voz/voz.js")); 
                    //         threads_voz.push(new Worker("src/voz/voz.js")); 
                    //         threads_voz.push(new Worker("src/voz/voz.js")); 
                    //         threads_voz.push(new Worker("src/voz/voz.js")); 
                    //         threads_voz.push(new Worker("src/voz/voz.js")); 

                    //         threads_voz[0].postMessage([sequencia_primeira_parte[0]]);
                          
                    //             threads_voz[0].onmessage = event=>{
                    //                 this.Roteiro(sequencia_primeira_parte[0])
                    //                 var resposta  = c.falar;   
                    //                 v.transmitir(resposta);               
                    //                 threads_voz[0] = null;
                    //                 threads_voz[1].postMessage([sequencia_primeira_parte[0]]);
                    //             }
                    //             threads_voz[1].onmessage = event=>{
                    //                 this.Roteiro(sequencia_primeira_parte[0])
                    //                 var resposta  = c.falar;     
                    //                 v.transmitir(resposta);               
                    //                 threads_voz[1] = null;
                    //                 threads_voz[2].postMessage([sequencia_primeira_parte[0]]);
                    //             }
                    //             threads_voz[2].onmessage = event=>{
                    //                 this.Roteiro(sequencia_primeira_parte[0])
                    //                 var resposta  = c.falar;     
                    //                 v.transmitir(resposta);               
                    //                 threads_voz[2] = null;
                    //                 threads_voz[3].postMessage([sequencia_primeira_parte[0]]);
                    //             }
                    //             threads_voz[3].onmessage = event=>{
                    //                 this.Roteiro(sequencia_primeira_parte[0])
                    //                 var resposta  =c.falar;   
                    //                 v.transmitir(resposta);               
                    //                 threads_voz[3] = null;
                    //                 threads_voz[4].postMessage([sequencia_primeira_parte[0]]);
                    //             }
                    //             threads_voz[4].onmessage = event=>{
                    //                 this.Roteiro(sequencia_primeira_parte[0])
                    //                 var resposta  = c.falar;   
                    //                 v.transmitir(resposta);               
                    //                 threads_voz[4] = null;
                    //                 threads_voz.pop();
                    //                 threads_voz.pop();
                    //                 threads_voz.pop();
                    //                 threads_voz.pop();
                    //                 m.estado  = true;
                    //                 sequencia_primeira_parte.push("parte_2");
                    //                 sequencia_primeira_parte.shift();
                    //                 s.mudar_mapa([m.estado ]);      
                    //             }

                    // }
                    // else if(sequencia_primeira_parte[0] == "parte_2"){
                    //     console.log(sequencia_primeira_parte.toString());
                    // }
            }catch(ev){
                console.log(ev);
                v.IA.cancel();
            }
          
        }
        
}
const c = new componentes_voz();