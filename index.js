// $(document).ready(function(){
//     $("#tooltipex").tooltip({
        
//     });
// });

window.onload = function (){

}

var app= new Vue({
    el:'#app',
    data:{
    datos: null,
    espanol:true,
    
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
        },
        onOpen() {
            this.$refs.tooltip.$emit('open')
          },
          onClose() {
            this.$refs.tooltip.$emit('close')
          }
    },
    
    computed:{
       

        sobremiObtenido: function(){
             if (this.datos === null){
                 return "";
             }
             if(this.espanol){
             return this.datos.espanol.sobremi;
             }else{
                 return this.datos.ingles.sobremi;
             }

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
            
        },

        experienciaObtenido: function(){
            if (this.datos === null){
                return "";
            }
            if (this.espanol){
                return this.datos.espanol.experiencia;
            }else{
                return this.datos.ingles.experiencia;
            }
        }

        
    }

})