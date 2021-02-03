window.onload = function (){

}

var app= new Vue({
    el:'#app',
    data:{
    datos: null,
    espanol:false,
    
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
        cambioIdioma: function(){
        this.espanol=!this.espanol;
        }
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

        },
        menuObtenido: function(){
            if (this.datos === null){
                return "";
            }
            if (this.espanol){
                return this.datos.espanol.menu;
            }else{
                return this.datos.ingles.menu;
            }
            
        }

        
    }

})