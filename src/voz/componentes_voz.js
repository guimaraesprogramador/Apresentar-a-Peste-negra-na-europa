class  componentes_voz {
    constructor(){
        this.falar;
    }
    get Genero(){
        return "parecida com a voz humana";
    }
    get Nome(){
        return " voz ";
    }
    get autor(){
        return " Kévin Vieira Gomes Guimaraes ";
    }
    get identidade(){
        return " inteligência artificial" ;
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
                    var linha =" Iniciando a sessão " + "\n" +" a respeito " +
                    " da " + "Pandemia"+" de "+ "Peste "+ "bubônica," + "\n"+"sobre "+ " o \n  Continente Europeu,"+"\n"+
                    " o  nome do responsável pelo projeto é " + this.autor + "\n"+
                    " sou uma "+ this.identidade +"\n"+" que usa uma " + this.Nome
                    + this.Genero +"."+"\n"+
                    " Que " + " vai "+ "atuar " + "como "+ " guia " +" nesta projeção.";
                    
                    c.texto = linha;
                    break;
                case "introdução":
                   
                    var linha = {
                        primeira_parte:"Essa história \n não tem relação direta \n  com a Pandemia de coronavírus, \n mais sim \n os relados ",
                        segunda_linha:" que aconteceram \n no século catorze \n durante \n a Idade Média \n",
                        terceira_linha:" Sendo assim, \n será realizado \n uma apresentação de um mapa da Pandemia Peste Bubônica \n no ano de 2020  sobre o continente europeu \n ",
                        quarta_linha:"o contado\n do telefone e o E-mail está na documentação. \n",
                        quinta_linha:"Para assistir a projeção, \n não saia desta página \n",
                        sexta_linha:"sendo assim,\n obrigado pelo entendimento."
                    }
                    c.texto = linha.primeira_parte + linha.segunda_linha +
                    linha.terceira_linha + linha.quarta_linha +
                    linha.quinta_linha + linha.sexta_linha;

                    break;
            case "parte_1":
                let linhas =[
                    "a peste bubônica é uma doença \n causada pela bactéria que se encontrava em ratos contaminados. ",
                    "Seu surgimento ainda é bastante discutido, \n mas sabe-se que deu origem de um país \n na Ásia Central durante a Idade Média. ",
                    "A peste foi transportada principalmente pelas rotas marítimas da Ásia central \n como a frota genovesa \n com o destino ao continente europeu.  ",
                    "Sua primeira parada foi a cidade de Caffa, \n com o resultado a cidade foi \n sucumbida perante a peste.  ",
                    "Depois de Caffa, \n a frota passou em Sicília  que ficou  por três semanas ancorada \n com isso a bactéria ficou mais forte.  ",
                    "até a frota for expulsa de lá,\n e só conseguiu ancorar no porto de Marselha no dia primeiro de novembro de 1347. "
                ]   
                c.texto = "";
                linhas.forEach((value,index,array)=>{
                    
                   c.texto = c.texto +  value.toString();
                })
                
                    break;
                case "parte_2":
                   let linhas2 = [
                        "O desembarque da frota foi liberado \n pelas autoridades no interesse das mercadorias valiosas que a frota tinha a bordo. ",
                        " Por causa da transmissão causada pelos ratos contaminados na frota, \n a cidade foi rapidamente contagiada pela bactéria, \n torna-se  uma das entradas de Pandemia  no continente europeu. \n",
                        " Como consequência disso, \n a frota ficou muito tempo ancorada neste porto, \n  mas ninguém se aproximava dela \n embora estivesse com mercadorias valiosas e com sua tripulação morta.\n ",
                        " Com isso a bactéria não parou mais, ficou mais forte com o clima mais frio e se \n desenvolveu na forma pulmonar. \n",
                        "Depois de um ano a maioria da população de Marselha "
                   ]
                   c.texto = "";
                   linhas2.forEach((value,index,array)=>{
                    c.texto = c.texto +  value.toString();
                 });
                break;
                case "parte_2-1":
                    let linhas2_1 = "morreu pela bactéria. \n";
                    c.texto = "";
                    c.texto = linhas2_1;
                break;
                case "parte_3-1":
                    let linhas3_1 = "Em 1349 a bactéria chegou na Itália pelo Norte. \n";
                    c.texto = "";
                    c.texto = linhas3_1;
                    break;
                case "parte_3-2":
                        let linhas3_2 =[
                            "e depois passou pelo centro,",
                            "\n  por fim espalhou pelo Continente europeu. "
                        ]
                        c.texto = "";
                        linhas3_2.forEach((value,index,array)=>{
                         c.texto = c.texto +  value.toString();
                      })
                    break;
                case "parte_4":
                    let linhas4 = [
                        "Com isso essa bactéria matou mais de  um terço da população no Continente europeu até 1350. ",
                        " \n mais informação na documentação. ",
                        " Caso deseje assistir novamente, \n aperte F5 ou atualize a página \n, então obrigado."
                    ]
                    c.texto = "";
                    linhas4.forEach((value,index,array)=>{
                     c.texto = c.texto +  value.toString();
                    });
                //   var legend_1 = L.control({ position: "bottomright" });
                //     legend_1.onAdd = function(map) {
                //             var link = new URL("https://github.com/guimaraesprogramador/zonas_distancia");
                //             var div = L.DomUtil.create("div", "link");
                //             div.innerHTML  += "<h4> link da documentação abaixo: </h4>";
                //             div.innerHTML += "<span>  "+ link.href.toString() + "</span><br>";
                //         return div;
                //     }
                //     legend_1.addTo(m.map);
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
                                   this.Roteiro(event.data.resposta);               
                                   v.transmitir(c.falar);       
                                    threads_voz[0] = null;
                                    threads_voz[1].postMessage([sequencia_primeira_parte[1]]);
                                }
                            threads_voz[1].onmessage = event=>{
                               this.Roteiro(event.data.resposta);               
                               v.transmitir(c.falar);
                                threads_voz[1] = null;
                                threads_voz[2].postMessage([sequencia_primeira_parte[2]]); 
                            }
                            // reprodução a parte 1
                            
                                threads_voz[2].onmessage = event=>{    
                                    c.Roteiro(event.data.resposta);
                                    v.transmitir(c.falar);        
                                    threads_voz.pop();
                                    threads_voz.pop();
                                    this.proxima = "parte_2";
                                    }
                    }
                    else if(c.falar == "parte_2"){
                        // remover a ultima thread da parte 1
                        threads_voz.pop();
                        // reprodução parte 2
                        threads_voz.push(new Worker("src/voz/voz.js"));
                        threads_voz[0].postMessage([c.falar]); 
                        threads_voz[0].onmessage = event =>{
                            c.Roteiro(event.data.resposta);
                            v.transmitir(c.falar);   
                            this.proxima = "parte_2-1";
                        }
                    }
                    else if(c.falar =="parte_2-1"){
                        // remover a ultima thread de parte 2 inicial
                        threads_voz.pop();
                        // reprodução parte 2 primeira parte.
                        threads_voz.push(new Worker("src/voz/voz.js"));
                        threads_voz[0].postMessage([c.falar]); 
                        threads_voz[0].onmessage = event =>{
                            c.Roteiro(event.data.resposta);
                            v.transmitir(c.falar);   
                            this.proxima = "parte_3-1";
                        } 
                    }
                    else if(c.falar =="parte_3-1"){
                           // remover a ultima thread de parte 2-1
                            threads_voz.pop();
                             // reprodução parte 3 primeira parte
                            threads_voz.push(new Worker("src/voz/voz.js"));
                            threads_voz[0].postMessage([c.falar]); 
                            threads_voz[0].onmessage = event =>{
                                c.Roteiro(event.data.resposta);
                                v.transmitir(c.falar);   
                                this.proxima = "parte_3-2";
                            }
                    }
                    else if(c.falar == "parte_3-2"){
                            // remover a ultima thread de parte 3-1.
                            threads_voz.pop();
                            // reprodução parte 3 segunda parte
                            threads_voz.push(new Worker("src/voz/voz.js"));
                            threads_voz[0].postMessage([c.falar]); 
                            threads_voz[0].onmessage = event =>{
                                c.Roteiro(event.data.resposta);
                                var resposta  = c.falar;    
                                v.transmitir(resposta); 
                                this.proxima = "parte_4";
                            }
                    }
                    else if(c.falar == "parte_4"){
                            // remover a ultima thread de parte 3-2.
                            threads_voz.pop();
                            // reprodução parte 4 
                            threads_voz.push(new Worker("src/voz/voz.js"));
                            threads_voz[0].postMessage([c.falar]); 
                            threads_voz[0].onmessage = event =>{
                                c.Roteiro(event.data.resposta);
                                v.transmitir(c.falar);   
                                this.proxima = "acabou a exbição";
                            }
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
window.onload = function(){
    if(v.IA == undefined) console.log("sintese de fala não criada");
    else v.IA.cancel();
}
