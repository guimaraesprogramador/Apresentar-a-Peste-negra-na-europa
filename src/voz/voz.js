class voz{
    responsavel = "";
    introdução = "";
    constructor(){ 
      
    }
     Autor(autor){
        this.responsavel =  autor;
       
        return this.responsavel;
    }
  pessoa(personagem){
        try{
            if(this.introdução == ""){
                
                var informações_atuação = {
                    autor:this.Autor(personagem.autor),
                    resposabilidade:personagem.Nome
                };
                var texto ="Bem vindo " + "a projeção de cartografia " +"\n" +" a respeito" +
                "da " + "Pandemia"+" de "+ "Peste "+ "bubônica," + "\n"+
                "O  nome do responsável pelo projeto é " + informações_atuação.autor + "\n"+
                "Quem está falando  é o " + informações_atuação.resposabilidade+"\n"+
                "Sou uma "+ personagem.identidade + " criada pela "+  "empresa Google" +"\n"+
                "com uma voz " + personagem.Genero + "."+"\n"+
                "que " + " vai "+ "atuar " + "como "+ " guia " +" nesta projeção."
                personagem.fala = texto;
                this.introdução = "introdução completa";
                return this.introdução;
            }
            else return this.introdução =  "introdução completa";
            
        }catch(ev){
            this.introdução = "Algo deu errado.";
            console.log(ev);
        }
    }
   Mudar_falar(falar){
                switch (falar.toString()){
                    case "inicio" :
                                // linha 1
                                var historia =  historia + falar.apresentar.executar_linhas();
                                // linha 2 
                                historia =  historia + exibir.apresentar.executar_linhas();
                                // linha 3
                                historia =  historia + exibir.apresentar.executar_linhas();
                                // linha 4
                                historia =  historia + exibir.apresentar.executar_linhas();
                                // linha 5
                                historia =  historia + exibir.apresentar.executar_linhas();
                                // linha 6
                                historia =  historia + exibir.apresentar.executar_linhas();
                                personagem.fala = "";
                                personagem.fala = historia;
                            break;
        }
    }    
    }
var  v = new voz();
self.addEventListener("message",ev=>{
    var tipo = ev.data[0];
    var p = ev.data[1];
    switch(tipo){
        case "introdução":
            
           var inicio = v.pessoa(p);
            postMessage({resposta:inicio,falar:p.fala});
       break;
       case "inicio":
        v.Mudar_falar(tipo);
        postMessage({resposta:"inicio",falar:p.fala});
           break;
    }
});