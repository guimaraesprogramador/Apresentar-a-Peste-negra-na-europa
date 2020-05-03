class  componentes_voz {
    constructor(){
        this.falar;
    }
    get Genero(){
        return "parecida com o Feminino";
    }
    get Nome(){
        return "Sistema do navegador";
    }
    get autor(){
        return "Kévin Vieira Gomes Guimaraes";
    }
    get identidade(){
        return "inteligência artificial";
    }
    get texto(){
        return this.falar;
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
                    "Sou uma "+ this.identidade +"\n"+
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
                        quinta_linha:"Para assistir a projeção, \n não saia desta página \n",
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
                    "Sua primeira parada foi a cidade de Caffa, \n com o resultado a cidade foi \n sucumbida perante a peste.  ",
                    "Depois de Caffa, \n a frota passou em Sicília  que ficou  por três semanas ancorada \n com isso a bactéria ficou mais forte.  ",
                    "até a frota for expulsa de lá,\n e só conseguir ancorar no porto de Marselha no dia primeiro de novembro de 1347. "
                ]   
                c.texto = "";
                linhas.forEach((value,index,array)=>{

                   c.texto = c.texto +  value.toString();
                })
                   
                    break;
                case "parte_2":
                    let linhas = [];
                break;
            }
        }catch(ev){
            console.log(ev);
        }
       
    }
  theads(){
            try{

                    
                    let threads_voz = [];
                    if(c.falar == undefined){
                        var sequencia_primeira_parte = ["abertura","introdução","parte_1"];
                        // conteudo de abertura
                        threads_voz.push(new Worker("src/voz/voz.js")); 
                        // conteudo de  introdução
                        threads_voz.push(new Worker("src/voz/voz.js")); 
                        /// começo da história
                        threads_voz.push(new Worker("src/voz/voz.js")); 
                        threads_voz[0].postMessage([sequencia_primeira_parte[0]]);
                            // abertura
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
                            
                                threads_voz[2].onmessage = event=>{    
                                    c.Roteiro(sequencia_primeira_parte[2]); 
                                    var resposta  = c.falar;   
                                    v.transmitir(resposta);     
                                    threads_voz.pop();
                                    threads_voz.pop();
                                   
                                    }
                                    while(m.estado == false){
                                        // se não tem reproduzindo e não tem fala para reproduzir.
                                        if(v.IA.speaking == false && v.IA.pending == false ){
                                            m.estado = true;
                                            s.mudar_mapa([m.estado]);
                                            c.texto =  "parte_2";
                                        }
                                    /*var tempo = window.setInterval(function(){
                                       
                                    },150);
                                   window.setTimeout(function(){
                                       if(m.estado)clearInterval(tempo);
                                    },450)*/
                                };
                            
                    }
                    else if(c.falar == "parte_2"){
                        // reprodução parte 2
                        threads_voz.pop();
                        console.log(c.falar);
                    }
                    else if(c.falar =="parte_3"){
                            // reprodução parte 2
                            console.log(c.falar);
                    }
                    else if(c.falar == "parte_4"){
                            // reprodução parte 2
                            console.log(c.falar);
                    }
            }catch(ev){
                
                if(v.IA == undefined) console.error(ev);
                else v.IA.cancel();
            }
          
        }
        
}
const c = new componentes_voz();
window.onbeforeunload = function(){
    if(v.IA == undefined) console.log("sintese de fala não criada");
    else v.IA.cancel();
}
    