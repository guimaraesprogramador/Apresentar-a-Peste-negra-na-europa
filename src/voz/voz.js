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
            var resposta = this.pessoa(personagem.Genero,personagem.identidade);
                switch (falar.toString()){
                    case "introdução completa" :
                        if (window.File && window.FileReader && window.FileList && window.Blob) {
                            document.getElementById("bloco").disabled= true;
                                // var parte_1_historia = 
                                // var apresentação = 
                                document.getElementById("texto").innerText = personagem.fala;
                                personagem.fala = new SpeechSynthesisUtterance(apresentação);
                              setTimeout(function(){
                                window.speechSynthesis.speak(personagem.fala);
                                personagem.fala = "";
                              },2000)
                        }

                            break;
        }
    }
        
    }
const v = new voz();
function mensagem(tipo){
    
    switch(tipo){
        case "introdução completa":
                v.Mudar_falar(tipo)
                postMessage(tipo);
                
       break;
    }   

       
}