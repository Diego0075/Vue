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
        },

        educacionObtenido: function(){
            if (this.datos === null){
                return "";
            }
            if (this.espanol){
                return this.datos.espanol.educacion;
            }else{
                return this.datos.ingles.educacion;
            }

        },

        destrezasObtenido: function(){
            if (this.datos === null){
                return "";
            }
            if (this.espanol){
                return this.datos.espanol.destrezas;
            }else{
                return this.datos.ingles.destrezas;
            }

        },
        
        idiomasObtenido: function(){
            if (this.datos === null){
                return "";
            }
            if (this.espanol){
                return this.datos.espanol.idiomas;
            }else{
                return this.datos.ingles.idiomas;
            }

        },

        formObtenido: function(){
            if (this.datos === null){
                return "";
            }
            if (this.espanol){
                return this.datos.espanol.form;
            }else{
                return this.datos.ingles.form;
            }

        },

        proyectosObtenido: function(){
            if (this.datos === null){
                return "";
            }
            if (this.espanol){
                return this.datos.espanol.proyectos;
            }else{
                return this.datos.ingles.proyectos;
            }

        },

        referenciasObtenido: function(){
            if (this.datos === null){
                return "";
            }
            if (this.espanol){
                return this.datos.espanol.referencias;
            }else{
                return this.datos.ingles.referencias;
            }

        }
        
    }

})