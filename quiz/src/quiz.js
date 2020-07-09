class perguntar{

    layort(){
  
      
        this.nome = "Teste de Conhecimento \n ";
      this.questões = document.createElement("h4");
  
      this.questões.textContent = "A pesquisa ";
      this.radio =[
      document.createElement("input"),
      document.createElement("input"),
      document.createElement("input")
      ]
      this.numero = 0;
      this.radio[0].type = "radio";
      this.radio[1].type = "radio";
      this.radio[2].type = "radio";
      this.radio[0].id = "quiz"+(this.numero++);
      this.radio[1].id = "quiz"+ (this.numero++);
      this.radio[2].id = "quiz" + (this.numero++);
       console.log(this.questões);
      var quiz = L.control({ position: "bottomright" });
      quiz.onAdd = function(map) {
        var div = L.DomUtil.create("div", "quiz");
        div.innerHTML += '<h4> '+questões.nome +' </h4>';  
        console.log(div);
        return div;
      }
      quiz.addTo(m.map);
    }
    pergunta()
    {
     
         if(window.ActiveXObject){
            var xhtml= new XMLHttpRequest();
            xhtml.open("GET","./quiz/questões/perguntas.json",true);
            xhtml.onload = function(){
                var users = JSON.parse(xhtml.responseText);
                if(xhtml.readyState == 4  && xhtml.status == "200"){
                    console.log(users);
                }
            }
            xhtml.send(null);
         }
         else{
             fetch("../Apresentar-a-Peste-negra-na-europa/quiz/questões/perguntas.json",{
                 method:"GET",
                 referrerPolicy:"origin-when-cross-origin"
             }).then(p=>{
                if(p.status == "200"){
                    p.json().then(q=>{
                        var string = JSON.parse(q);
                        console.log(string);
                    })
                }
             })
         }
    }
  }
  var questões = new perguntar();
 questões.layort();