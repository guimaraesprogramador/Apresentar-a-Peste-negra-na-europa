// responsiveVoice.


class voz{
    responsavel = "";
    introdução = "";
    
    constructor(){
        
    }
    Autor(autor){
        this.responsavel = "Meu nomé é " + autor;
        return this.responsavel;
    }
    pessoa(Genero,identidade){
        try{
            
            if(this.introdução == ""){
                var informações_atuação = {
                    quem:this.Autor(personagem.autor),
                    resposabilidade:personagem.Nome
                };
                var texto = "Bem vindo, a projeção cartografica a respeito da Pandemia de Peste bubônica\n"+
                ", meu nome é"+ informações_atuação.quem  +"sou o desenvolver,elaborado dessa apresentação \n"+
                +" para ajudar em nossa apresentação foi criado uma personagem chamada "+ informações_atuação.resposabilidade + 
                " que tem o genéro " + Genero + " que é "+identidade + " que será responval por tentar "+
                "ajudar a vocês conhecia mais a historia da Pandemia da Peste Peste bubônica."+
                "Antes de qualquer coisa preciso caso aceitem os termos imposto da apresentação, caso não precisam "+
                "se preocupado nenhuma informação pessoal não está travada essa software";
                this.msg = new SpeechSynthesisUtterance(texto);
                window.speechSynthesis.speak(this.msg);
                this.introdução = "introdução completa";
                
            }
            else this.introdução =  "introdução completa";
            return this.introdução ;
        }catch(ev){
            this.introdução = "Algo deu errado.";
        }
    }
    
    Mudar_falar(falar){
       
            var resposta = this.pessoa(personagem.Genero,personagem.identidade);
            switch (falar){
                case falar ==resposta  && personagem.fala == "":
                        document.getElementById("bloco").disabled = false;
                        document.getElementById("sim").disabled = true;
                        document.getElementById("não").disabled = true;
                                var apresentação = {
                            parte_1: "Essa historia não tem relação direta com a Pandemia de Codiv-19, mais sim com os relados\n",
                            parte_2: "que aconteceu o tempo estimado de 1346 a 1353 durante a Pandemia da Peste Bubônica(conhecida\n",
                            parte_3: "como peste negra), sendo assim não me responsabilizo por qualquer informação irregular dessa Pandemia\n",
                            parte_4: "pois, as informação são exclusimante de site ou livros referentes na documentação abaixo. Sendo assim, será realizado uma exbição\n",
                            parte_5: "da projeção cartografica da Pandemia Peste Bubônica de tempo  estimado."
                                 }
                       personagem.fala = apresentação.parte_1.toString() + apresentação.parte_2.toString() +
                        apresentação.parte_3.toString() + apresentação.parte_4.toString() + apresentação.parte_5.toString();
                        document.getElementById("texto").innerText = personagem.fala;
                        return false;
                default:
                setTimeout(function(){
                    responsiveVoice.speak(personagem.fala);
                    document.getElementById("sim").disabled = false;
                    document.getElementById("não").disabled = false;
                    personagem.fala = "";
                },2000);
                return true;
            }
        }
        
    }
const v = new voz();
onmessage = function(ev){
    var booleano = false;
    console.log(ev.data);
    switch(ev.data){
        case "introdução completa":
            v.Mudar_falar(ev);
            booleano = true;
        break;
        default:
            booleano = false;
        break;
    }
    postMessage(booleano);

}