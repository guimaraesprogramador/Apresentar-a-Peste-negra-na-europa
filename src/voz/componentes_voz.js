var personagem = {
    Genero:"parecida com o Feminino",
    Nome:"Translatotron",
    autor:"Kévin Vieira Gomes Guimaraes",
    identidade:" inteligência artificial",
    fala:""
}

 function Translatotron(texto){
    var msg = new SpeechSynthesisUtterance(texto);
    msg.lang = "pt-br";
    msg.volume = 0.7;
    window.speechSynthesis.speak(msg);
}