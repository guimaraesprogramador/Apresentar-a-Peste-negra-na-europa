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
                     // O resultado da subtração do zoom é 10.
                     var diminir_zoom = m.map.getZoom() - 3;
                     m.map.setZoom(diminir_zoom);
                     var raiz = Math.sqrt(2406).toFixed(2);
                     var metros = parseInt(raiz)*1000;
                     metade =  parseInt(metros)/100;
                     var num = 2;
                     while(radios <= metade){
                        var novo_raio = parseInt((Math.sqrt(num)) * radios);
                        radios = novo_raio;
                        this.porto_marselha.setRadius(radios);
                     }
                       m.estado = false;
                     // referencia ao inicio em Turim na Itália.
                       e.referencia = "inicio Turim";
                     // Inicio na cidade Turim na Itália.
                     s.mudar_mapa([m.estado]); 
            }
                  else if(localização == "inicio Turim"){
                     // O resultado da subtração do zoom é 7.
                     var diminir_zoom = m.map.getZoom() - 3;
                     m.map.setZoom(diminir_zoom);
                     /* resultado da distancia entre porto de Marselha na França 
                     com a cidade de Turim na Itália, que é  370 km.*/
                     metade = parseInt(370 * 1000);
                     var num = 2;
                     while(radios <= metade){
                        var novo_raio = parseInt((Math.sqrt(num)) * radios);
                        radios = novo_raio;
                        this.porto_marselha.setRadius(radios);
                     }
                     m.estado = false;
                     e.referencia = "até o centro da itália";
                     s.mudar_mapa([m.estado]); 
         }
         else if(localização == "até o centro da itália"){
                     // O resultado da subtração do zoom é 4.
                     var diminir_zoom = m.map.getZoom() - 3; 
                     m.map.setZoom(diminir_zoom);
                     /* resultado da distancia entre Turm na Itália
                     com a cidade de Terni na Itália, que é  291.1 km.*/
                     metade = parseInt(291.1 * 1000);
                    
                     var num = 2;
                     while(radios <= metade){
                        var novo_raio = parseInt((Math.sqrt(num)) * radios);
                        radios = novo_raio;
                        this.porto_marselha.setRadius(radios);
                     }
                     e.referencia = "toda a europa";
                     m.estado = false;
                     s.mudar_mapa([m.estado]); 
         }
         else {
                     console.log(m.map.getZoom());
                     //  A Área do Continente da Europa 10.180.000 km².
                     var raiz = Math.sqrt(10180000).toFixed(2);
                     var distancia = parseInt(raiz)*1000;
                     var num = 2;
                     while(radios <= distancia){
                        var novo_raio = parseInt((Math.sqrt(num)) * radios);
                        radios = novo_raio;
                        this.porto_marselha.setRadius(radios);
                     }
                     
                     m.estado = false;
                     s.mudar_voz([m.estado]); 
                     e.referencia = "acabou a exbição";
                     /* Fim da historia*/
         }
         
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