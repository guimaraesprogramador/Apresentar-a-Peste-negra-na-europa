var homens = {
    pessoas:class Pessoa{
        
        dados(){
            var dados_sexo_idade = [{idade:Number,sexo:"F"}]
            var homens_censo_2010 = new XMLHttpRequest();
            homens_censo_2010.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    console.log(homens_censo_2010.statusText);
                    // var data = e.target.result;
                    // var workbook = XLSX.read(data, {
                    //     type: 'binary'
                    // });

                    // workbook.SheetNames.forEach(function(sheetName) {
                    //     // Here is your object
                    //     var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    //     var json_object = JSON.stringify(XL_row_object);
                    //     console.log(json_object);

                    // })
                }
            }
            
            let pasta_homens_censo_10 = "src/censo_de_2010_do_ibge/pessoas/homens/Pessoa11_UF.xls";
            homens_censo_2010.open("GET",pasta_homens_censo_10, true);
            homens_censo_2010.send();
        }

    },
    alfabetização:class alfabetizar{
        dados(){
            var dados_sexo_idade = [{idade,sexo:"F"}]
            var mulhereses_censo_2010  = new XMLHttpRequest();
            mulhereses_censo_2010.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    console.log(mulhereses_censo_2010.responseText);
                    //dados_sexo_idade.push({idade:})
                }
            }
            let pasta_mulheres_censo_10 ="src/censo_de_2010_do_ibge/pessoas/mulheres/Pessoa12_UF.xls";
            mulhereses_censo_2010.open("GET",pasta_mulheres_censo_10,true);
            mulhereses_censo_2010.send();
        }
    }
}
var d = new homens.pessoas();
d.dados();