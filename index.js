window.onload = function (){

}

var app= new Vue({
    el:'#app',
    data:{
    datos: null
    },
    mounted(){
            axios.get('datos.json')
            .then((response)=> {
                this.datos=response.data;
                console.log(this.datos)
            })
            .catch(function (error){
                console.log("Error al cargar el JSON" +error);
            });
    },
    methods:{

        
    },
    computed:{
        nombreObtenido: function(){
             if (this.datos === null){
                 return "";
             }
             return this.datos.espanol.sobremi.nombre;

         },

         apellidoObtenido: function(){
            if (this.datos === null){
                return "";
            }
            return this.datos.espanol.sobremi.apellidos;

        }
        
    }

})