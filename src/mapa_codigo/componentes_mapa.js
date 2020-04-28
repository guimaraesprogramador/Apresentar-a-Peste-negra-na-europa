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
           /* 
            // constante 
            var radios = 0;
            var metade = null;
            // var circulos_localizados = [];
            var circulo = null;

            // verifica local
            var localização = e.Local == "porto de Marselha"? "porto de Marselha" : e.referencia;
            if(localização == e.Local){
            // porto de Marselha
            
            
            var marselha = L.circle([lant,long],{
                        color:"red",
                        fillColor: "#dc143c",
                        fillOpacity: 0.5,
                        radius: 5
                     }).addTo(m.map);
            console.log(marselha);
            // m.map.addTo(marselha);
            // console.log(marselha.getRadius());
            // m.estado = false;
            // e.referencia = "aumentar circulo";
            // s.mudar_voz([m.estado]);
            }
            else if(localização =="aumentar circulo" ){
            metade =  Number.parseInt(240.6 /2);
            while(radios <= metade)
            {
               radios = this.longitude == long && this.lantitude == lant
               ? radios = radios + 5 :0;
               circulo = L.circle(porto_Marselha).setRadius(radios).addTo(m.map);
               }
               e.referencia = localização;
               m.estado = false;
               s.mudar_voz([m.estado]); 
            }
        else if(localização == "norte da Itália"){
            // norte da Itália
         circulo = L.circle([lant,long],{
         color:"red",
         fillColor: "#dc143c",
         fillOpacity: 0.5,
         radius: 5
         }).addTo(this.map);
         radios = circulo.getRadius();
         metade = Math.trunc(301338 /2 );
         while(radios <= metade){
            radios = this.longitude == long && this.lantitude == lant
            ? radios = radios + 10 :radios;
            circulo.setRadius(radios).addTo(m.map);
         }
         circulos_localizados.push(circulo);
         circulo = null;
         m.estado = false;
         s.mudar_voz([m.estado]); 
         }
         else {
         // toda o continente europeu
         var area_europa = 10180000;
         circulo  = circulos_localizados[0];
         while(radios != area_europa)
         {
         if(radios == 5000000|| radios == 10090000){
            radios = this.longitude == long && this.lantitude == lant
            ? radios = radios + 90000 :radios;
         }
         else{
            radios = this.longitude == long && this.lantitude == lant
            ? radios = radios + 1000000 :radios;
         }
         circulo.setRadius(radios).addTo(m.map);
         }
         m.estado = false;
         s.mudar_voz([m.estado]); 
         }*/
       }catch(ev){
          console.log(ev);
       }
      
    }
 theads(){
       try{
            let threads_mapa = []
            var caminho_mapa = "src/mapa_codigo/mapa.js";
            if(e.Local == undefined){
               e.referencia  = "ponto inicial";
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.referencia]);
                  threads_mapa[0].onmessage = event=>{
                     e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
               
            }
            else if(e.referencia == "aumentar circulo"){
                threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.referencia,e.latitude,
                  e.longitude]);
               threads_mapa[0].onmessage = event=>{
                     e.referencia = "norte da Itália";
                     e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
            }
            else if(e.Local == "norte da Itália"){
               threads_mapa.push(new Worker(caminho_mapa));
               threads_mapa[0].postMessage([ e.referencia,e.latitude,
                  e.longitude]);
               threads_mapa[0].onmessage = event=>{
                  e.referencia = "toda a europa";
                  e.coordenadas(event.data.dados[0],event.data.dados[1]);
                  threads_mapa.pop();
               }
         } 
         else if(e.Local =="toda a europa"){
            threads_mapa.push(new Worker(caminho_mapa));
            threads_mapa[0].postMessage([ e.referencia,e.latitude,
              e.longitude]);
               threads_mapa[0].onmessage = event=>{
                  e.coordenadas(event.data.dados[0],event.data.dados[1]);
                     threads_mapa.pop();
               }
         }   
              
         
       }catch(ev){
         console.log(ev);
         if(v.IA == undefined) console.log("sintese de fala não criada");
         else  v.IA.cancel();
       }
    }
}
const e = new componentes_mapa();
window.onbeforeunload = function(){
   if(v.IA == undefined) console.log("sintese de fala não criada");
   else v.IA.cancel();
}