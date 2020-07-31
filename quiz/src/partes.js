var index_radio = 0;
var input = [ "<input type = "," value ="," id = "," </input>"," name = "];

function primeira_parte(div){

    div.innerHTML += '<h4> '+quiz.nome +' </h4>';
    quiz.button[ index_radio].setAttribute("value","Inicio");

    div.innerHTML += quiz.button[index_radio].outerHTML.toString();
    
    div.innerHTML += "</br>";
    quiz.index_input = 1;

    div.children[0].style.fontSize = "13px";
    return div.innerHTML.toString();
}

function segunda_parte(div){

    div.innerHTML += "<img src='"+quiz.img.src.toString() +"' "+
    "id = "+ quiz.img.id+" />";
    div.innerHTML += '<h4> '+ quiz.problema[0] +' </h4> ';
    quiz.input[0].setAttribute("value",quiz.problema[1]);
    quiz.input[1].setAttribute("value",quiz.problema[2]);
    quiz.input[2].setAttribute("value",quiz.problema[3]);

    var radio1 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ " ";

    index_radio = index_radio +1;

    var radio2 =   input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ " ";

    index_radio = index_radio +1;

    var radio3 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ " ";

    quiz.form.append(radio1);
    quiz.form.append(radio2);
    quiz.form.append(radio3);
    div.innerHTML += "<form action='/' id='form' > "+
    quiz.form.innerText.toString(); +"</form> </br>";

    index_radio = 0;

    quiz.button[index_radio].removeAttribute("value");   
    quiz.button[index_radio].setAttribute("value","Proxima");

    div.innerHTML += input[0] + quiz.button[index_radio].type.toString() +
    input[1] + quiz.button[index_radio].value + input[2] +
    quiz.button[index_radio].id + input[2] + "> "+ input[3];
    
    div.innerHTML += "<span id = 'numero' > "+ quiz.numero+"/5"+" </span>";
    quiz.index_input = 3;

    div.children[4].style.left = "55%";

    div.children[0].style.fontSize = "13px";

    return div.innerHTML.toString();
} 

function terceira_parte(div){
    div.innerHTML += '<h4> '+ quiz.problema[0] +' </h4> ';
    
    div.innerHTML += quiz.input[quiz.index_input].outerHTML.toString();
        
    if(dados.quizlegenda.div.children[1].type == "radio"){
        dados.quizlegenda.div.children[1].removeAttribute("type");
        dados.quizlegenda.div.children[1].setAttribute("type","text");    
        dados.quizlegenda.div.children[1].removeAttribute("value");
    }
    dados.quizlegenda.div.children[1].style.padding = "2% 2% 2% 2%";
    div.innerHTML += quiz.button[index_radio].outerHTML.toString();
    
    div.innerHTML += "<span id = 'numero' > "+ quiz.numero+"/5"+" </span>";
    div.children[2].style.left = "1%";
    div.children[3].style.left = "5%";
    quiz.index_input = 2;

    div.children[0].style.fontSize = "11px";
    

    return div.innerHTML.toString();
}

function quarta_parte(div){

    quiz.form.innerHTML = "";
    div.innerHTML += '<h4> '+ quiz.problema[0] +' </h4> ';
    quiz.input[0].setAttribute("value",quiz.problema[1]);
    quiz.input[1].setAttribute("value",quiz.problema[2]);
    quiz.input[2].setAttribute("value",quiz.problema[3]);
    quiz.input[3].setAttribute("value",quiz.problema[4]);

    var input1 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ "</br> ";

    index_radio = index_radio +1;

    var input2 =   input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ "</br> ";

    index_radio = index_radio +1;

    var input3 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ "</br> ";

    index_radio = index_radio +1;

    quiz.input[index_radio].removeAttribute("type");

    quiz.input[index_radio].setAttribute("type","radio");    
    
    var input4 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ " ";

    quiz.form.append(input1);
    quiz.form.append(input2);
    quiz.form.append(input3);
    quiz.form.append(input4);
    div.innerHTML += "<form action='/' id='form' > "+
    quiz.form.innerText.toString(); +"</form> </br>";

    index_radio = 0;

    quiz.button[index_radio].removeAttribute("value");   
    quiz.button[index_radio].setAttribute("value","Proxima");


    div.innerHTML += quiz.button[index_radio].outerHTML.toString();
    
    div.innerHTML += "<span id = 'numero' > "+ quiz.numero+"/5"+" </span>";
    div.children[3].style.left = "65%";
    div.children[1].style.marginBottom =  "  5%";
    quiz.index_input = 2;
    div.children[0].style.fontSize = "11px";

    return div.innerHTML.toString();
}

function quinta_parte(div){

    quiz.form.innerHTML = "";
    div.innerHTML += '<h4> '+ quiz.problema[0] +' </h4> ';
    quiz.input[0].setAttribute("value",quiz.problema[1]);
    quiz.input[1].setAttribute("value",quiz.problema[2]);
    quiz.input[2].setAttribute("value",quiz.problema[3]);
    quiz.input[3].setAttribute("value",quiz.problema[4]);

    var input1 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ "</br> ";

    index_radio = index_radio +1;

    var input2 =   input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ "</br> ";

    index_radio = index_radio +1;

    var input3 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ "</br> ";

    index_radio = index_radio +1;

    quiz.input[index_radio].removeAttribute("type");

    quiz.input[index_radio].setAttribute("type","radio");    
    
    var input4 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ " ";

    quiz.form.append(input1);
    quiz.form.append(input2);
    quiz.form.append(input3);
    quiz.form.append(input4);
    div.innerHTML += "<form action='/' id='form' > "+
    quiz.form.innerText.toString(); +"</form> </br>";

    index_radio = 0;

    quiz.button[index_radio].removeAttribute("value");   
    quiz.button[index_radio].setAttribute("value","Proxima");


    div.innerHTML += quiz.button[index_radio].outerHTML.toString();
    
    div.innerHTML += "<span id = 'numero' > "+ quiz.numero+"/5"+" </span>";
    
    div.children[3].style.left = "65%";
    
    div.children[1].style.marginBottom =  "  5%";
    
    quiz.index_input = 2;

    div.children[0].style.fontSize = "11px";

    return div.innerHTML.toString();
}

function sexta_parte(div){
    quiz.form.innerHTML = "";
    div.innerHTML += '<h4> '+ quiz.problema[0] +' </h4> ';
    quiz.input[0].setAttribute("value",quiz.problema[1]);
    quiz.input[1].setAttribute("value",quiz.problema[2]);
    quiz.input[2].setAttribute("value",quiz.problema[3]);
    quiz.input[3].setAttribute("value",quiz.problema[4]);

    var input1 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ "</br> ";

    index_radio = index_radio +1;

    var input2 =   input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ "</br> ";

    index_radio = index_radio +1;

    var input3 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ "</br> ";

    index_radio = index_radio +1;

    quiz.input[index_radio].removeAttribute("type");

    quiz.input[index_radio].setAttribute("type","radio");    
    
    var input4 =  input[0] + quiz.input[index_radio].type.toString() +
    input[1] + quiz.input[index_radio].value +input[2] +
    quiz.input[index_radio].id +input[4] + quiz.input[index_radio].name +" > "+
    quiz.input[index_radio].value +input[3]+ " ";

    quiz.form.append(input1);
    quiz.form.append(input2);
    quiz.form.append(input3);
    quiz.form.append(input4);
    div.innerHTML += "<form action='/' id='form' > "+
    quiz.form.innerText.toString(); +"</form> </br>";

    index_radio = 0;

    quiz.button[index_radio].removeAttribute("value");   
    quiz.button[index_radio].setAttribute("value","Proxima");


    div.innerHTML += quiz.button[index_radio].outerHTML.toString();
    
    div.innerHTML += "<span id = 'numero' > "+ quiz.numero+"/5"+" </span>";
    
    div.children[3].style.left = "65%";
    
    div.children[1].style.marginBottom =  "  5%";
    
    quiz.index_input = 2;

    div.children[0].style.fontSize = "11px";

    return div.innerHTML.toString();
}

function resultado(div){
quiz.nome = "";
quiz.form.innerHTML = "";
quiz.nome = "Pontuação:";
div.innerHTML += '<h4> '+ quiz.nome +' </h4> ';
var total_fracasso = quiz.fracasso.length;
var total_sucesso = quiz.sucesso.length;
var calculofracasso = (total_fracasso *100)/5;
var calculosucesso = (total_sucesso*100)/5;
quiz.button[index_radio].removeAttribute("value");   
quiz.button[index_radio].setAttribute("value","Recomeçar");

div.innerHTML +=" <h3> "+ "Acertos: "+ calculosucesso +" %"+" </h3> ";
div.innerHTML += " <h3> "+ "Errados: "+ calculofracasso +" %" +" </h3> ";
div.innerHTML += quiz.button[index_radio].outerHTML.toString();


quiz.index_input = 3;
quiz.nome = "Teste de Conhecimento";
while(quiz.sucesso.length >0)quiz.sucesso.pop();
while(quiz.fracasso.length >0) quiz.fracasso.pop();
 
   
return div.innerHTML.toString(); 
}