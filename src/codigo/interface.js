var principal = {
    Sql:function(){
        this.criar_banco = function(){
            alasql("create table homens")
            alasql("create table mulheres")
            alasql("create table criança")
            alasql("create table idosos")
        }
        this.carregar_banco = function(){

        }
    },
    envio_mensagem:function(){

    },
    receber_mensagem:function(){

    }
}