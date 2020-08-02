function play(){
            
    if(v.IA != undefined){
        v.IA.resume();
    }
}
function stop(){
        if(v.IA != undefined){
            v.IA.pause();
        }
}
function voltar(){
          if(v.IA != undefined){
                v.IA.cancel();
                           var texto_atual =  c.proxima;
                           var verifica;
                               var nova_parte = texto_atual.replace("parte_","");
                               var antes_trassinho = Number.parseInt(texto_atual.replace("parte_",""));
                               var localizar =texto_atual.indexOf(nova_parte);
                            if(localizar != -1){
                               switch(nova_parte){

                                   case "1":
                                       c.texto = "introdução";
                                       verifica = "ok";
                                    break;
                                   case  "2-1":
                                        c.texto = "parte_" + (antes_trassinho - 1).toString();
                                        verifica = "ok";
                                    break;
                                    case "3-1":
                                        c.texto = "parte_" + (antes_trassinho - 1).toString() + "-1";
                                        verifica = "ok";
                                    break;
                                    case "3-2":
                                        c.texto = "parte_" + antes_trassinho.toString() + "-1";
                                        verifica = "ok";
                                    break;
                                    case  "4":
                                        c.texto = "parte_" + (antes_trassinho - 1).toString() + "-2";
                                        verifica = "ok";
                                        
                                    break;
                                    case "acabou a exbição":
                                        c.texto = "parte_" +"4";
                                        verifica = "ok";
                                    break;
                               }
                              
                            }
                            if(texto_atual == "introdução"){
                                c.texto = "abertura";
                                verifica = "ok";
                            }
                            if(texto_atual == "abertura"){
                                c.texto = undefined;
                                verifica = undefined;
                            }
                            
                               while(o.nome.voltar.length != 0)o.nome.voltar.pop();
                               
                              
                               if(verifica != undefined){
                                c.proxima = c.falar;
                                c.Roteiro(c.falar);
                               v.transmitir(c.falar);
                               }
                               else location.reload(true);
                               
                }
        
}
function avançar()
{
    if(v.IA != undefined){
       
            v.IA.cancel();
                
                       var texto_atual =  c.proxima;
                       var verifica;
                           var nova_parte = texto_atual.replace("parte_","");
                           var antes_trassinho = Number.parseInt(texto_atual.replace("parte_",""));
                           var localizar =texto_atual.indexOf(nova_parte);
                        if(localizar != -1){
                           switch(nova_parte){

                               case "1":
                                c.texto = "parte_" +  "2    "
                                   verifica = "ok";
                                break;

                               case  "2-1":
                                    c.texto = "parte_" + (antes_trassinho + 1).toString() +"-1";
                                    verifica = "ok";
                                break;
                                case "3-1":
                                    c.texto = "parte_" + antes_trassinho.toString() +"-"+(antes_trassinho - 1).toString() 
                                    verifica = "ok";
                                break;
                                case "3-2":
                                    c.texto = "parte_" + (antes_trassinho + 1).toString();
                                    verifica = "ok";
                                break;
                                case  "4":
                                    c.texto = "acabou a exbição";
                                    verifica = "ok";
                                    
                                break;
                                case "acabou a exbição":
                                    c.texto = "parte_" +"4";
                                    verifica = "ok";
                                break;
                           }
                          
                        }
                        console.log(texto_atual);
                        if(texto_atual == "introdução"){
                            c.texto = "parte_1";
                            verifica = "ok";
                        }
                        if(texto_atual == "abertura"){
                            c.texto = "introdução";
                            verifica = "ok";
                        }
                        
                           while(o.nome.avançar.length != 0)o.nome.avançar.pop();
                           
                           if(verifica != undefined){
                            c.proxima = c.falar;
                            c.Roteiro(c.falar);
                           v.transmitir(c.falar);
                           }
                          
                           
            
    }
}