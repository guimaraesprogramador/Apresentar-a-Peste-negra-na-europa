class voz{
    responsavel = "";
    introdução = "";
    constructor(){ 
    }
    Autor(autor){
        this.responsavel =  autor;
        return this.responsavel;
    }
    pessoa(Genero,identidade){
        try{
            
            if(this.introdução == ""){
                
                var informações_atuação = {
                    autor:this.Autor(personagem.autor),
                    resposabilidade:personagem.Nome
                };
                personagem.fala = "";
                var texto ="Bem vindo " + "a projeção de cartografia " +"\n" +" a respeito" +
                "da " + "Pandemia"+" de "+ "Peste "+ "bubônica," + "\n"+
                "O  nome do responsável pelo projeto é " + informações_atuação.autor + "\n"+
                "Quem está falando  é o " + informações_atuação.resposabilidade+"\n"+
                "Sou uma "+ identidade + " criada pela "+  "empresa Google" +"\n"+
                "com uma voz " + Genero + "."+"\n"+
                "que " + " vai "+ "atuar " + "como "+ " guia " +" nesta projeção."
                var msg = new SpeechSynthesisUtterance(texto);
                msg.lang = "pt-br";
                msg.volume = 0.7;
                window.speechSynthesis.speak(msg);
                this.introdução = "introdução completa";
                return this.introdução;
            }
            else return this.introdução =  "introdução completa";
            
        }catch(ev){
            this.introdução = "Algo deu errado.";
        }
    }
   Mudar_falar(falar){
                switch (falar.toString()){
                    case "introdução completa" :
                                // linha 1
                                var historia = exibir.apresentar.executar_linhas();
                                // linha 2 
                                historia += exibir.apresentar.executar_linhas();
                                // linha 3
                                historia += exibir.apresentar.executar_linhas();
                                // linha 4
                                historia += exibir.apresentar.executar_linhas();
                                // linha 5
                                historia += exibir.apresentar.executar_linhas();
                                // linha 6
                                historia += exibir.apresentar.executar_linhas();
                                personagem.fala = new SpeechSynthesisUtterance(historia);
                                historia = exibir.apresentar.executar_linhas();
                                window.speechSynthesis.speak(personagem.fala);
                            break;
        }
    }
        
    }
const v = new voz();
v.pessoa(personagem.Genero,personagem.identidade);
function mensagem(tipo){
    
    switch(tipo){
        case "introdução completa":
                v.Mudar_falar(tipo)
                postMessage(tipo);
                
       break;
    }   

       
}