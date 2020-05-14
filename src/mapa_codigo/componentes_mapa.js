// dados primarios
class componentes_mapa {
   constructor(){
        this.referencia;
        this.eixo_principal_terra;
        this.linha_imaginada;
   }
     get ANO (){
        return this.ANO;
     }
     set ANO(data){
        this.ANO = data;
     }
     get Local(){
         return this.referencia;
     }
     set Local(referencia){
         this.referencia = referencia
     }
     get latitude(){
        return this.eixo_principal_terra;
     }
     set latitude(numero){
        this.eixo_principal_terra = numero;
     }
     get longitude(){
        return  this.linha_imaginada;;
     }
     set longitude(numero){
      this.linha_imaginada = numero;
     }
    coordenadas(lant,long){
       try{
           
            // constante 
            var radios = 5;
            var metade;
            // verifica local
            var localização = e.Local == "porto de Marselha"? "porto de Marselha" : e.Local;
            if(localização == "porto de Marselha"){
            // porto de Marselha
           this.porto_marselha  = L.circle([lant,long],radios,{
                        color:"red",
                        fillColor: "#dc143c",
                        fillOpacity: 0.5,
                     }).addTo(m.map);
                     m.estado = false;
                     e.referencia = "aumentar circulo";
                     s.mudar_mapa([m.estado]); 
            }
            // aumenta a contaminazação no porto de Marselha
            else if(localização =="aumentar circulo" ){
                     metade =  parseInt(2406*50)/100;
                     var num = 2;
                     while(radios < metade){
                        var novo_raio = parseInt(Math.sqrt(num) * radios);
                        radios = novo_raio;
                        this.porto_marselha.setRadius(radios)
                        num = num + 1;
                     }
                       m.estado = false;
                       // nome da cidade a inicio Turim. 
                       e.referencia = "inicio Turim";
                       // latitude e longitude da Turim.
                      e.eixo_principal_terra = 45.0702388;
                      e.linha_imaginada = 7.6350677;
                     s.mudar_mapa([m.estado]); 
            }
                  else if(localização == "inicio Turim"){
                     // variavel referente do nome da cidade no norte da Itália. 
                     this.turim = L.circle([lant,long],radios,{
                        color:"red",
                        fillColor: "#dc143c",
                        fillOpacity: 0.5,
                     }).addTo(m.map);
                     console.log(this.turim);
                     m.estado = false;
                     e.referencia = "até o centro da itália";
                     s.mudar_mapa([m.estado]); 
         }
         else if(localização == "até o centro da itália"){
                     /* resultado da distancia entre Turm na itaiia 
                     com a cidade de Terni na itaiia, que é  291.1 km.*/
                     metade = parseInt(291.1 * 1000);
                     var num = 2;
                     while(radios <= metade){
                        var novo_raio = parseInt(Math.sqrt(num) * radios);
                        radios = novo_raio;
                        this.turim.setRadius(radios)
                        num = num + 1;
                     }
                     e.referencia = "toda a europa";
                     m.estado = false;
                     s.mudar_mapa([m.estado]); 
         }
         else {
                     // toda o continente europeu
                     var zona_contaminação = this.porto_marselha.getRadius() + 
                     this.turim.getRadius();
                     /*var num = 2;
                     while(radios <= zona_contaminação){
                        var novo_raio = parseInt(Math.sqrt(num) * radios);
                        radios = novo_raio;
                        this.porto_marselha.setRadius(radios)
                        num = num + 1;
                     }
                     m.estado = false;
                     s.mudar_voz([m.estado]); */
                     e.referencia = "acabou a exbição";
         }
         /* Fim da historia*/
       }catch(ev){
          console.log(ev);
       }
      
    }
 theads(){
       try{
            let threads_mapa = []
            var caminho_mapa = "src/mapa_codigo/mapa.js";
            if(e.Local == undefined){
               e.referencia  = "porto de Marselha";
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.Local]);
                  threads_mapa[0].onmessage = event=>{
                     e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
               
            }
           else if(e.Local != "acabou a exbição" ){
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.Local,e.latitude,
                  e.longitude]);
               threads_mapa[0].onmessage = event=>{
                     e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
           }
       }catch(ev){
         if(v.IA == undefined)  console.error(ev);
         else  v.IA.cancel();
       }
    }
}
const e = new componentes_mapa();
window.onbeforeunload = function(){
   if(v.IA == undefined) console.log("sintese de fala não criada");
   else v.IA.cancel();
}