class perguntar{
  constructor(){
    this.layort();
  }
  layort(){
    var cache = window.caches;
    var div = document.createElement("div");
    this.nome = "quiz-peste-negra";
    var input = [3];
    input[0] = document.createElement("input");
    input[1] = document.createElement("input");
    input[2] = document.createElement("input");
    div.appendChild(input[0]);
    div.appendChild(input[1]);
    div.appendChild(input[2]);
 		document.body.appendChild(div); 
    /*cache.open(this.nome).then(r=>{
      r.add
    })*/
  }
  primeira(){

  }
  segunda(){

  }
  terceira(){

  }
  quarta(){

  }
  quinta(){

  }
  sexta(){

  }
  sete(){

  }
  oito(){

  }
  nove(){

  }
  dez(){

  }
}
var questões = new perguntar();

