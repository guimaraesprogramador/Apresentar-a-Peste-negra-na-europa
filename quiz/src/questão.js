
var verificar = await caches.has("quiz");
if(verificar == false){
    var add = await caches.open("quiz");
    add.add("../Apresentar-a-Peste-negra-na-europa/quiz/src/quiz.js");
}
