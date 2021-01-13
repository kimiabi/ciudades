<template>
  <b-container>
    <NavBarciudades></NavBarciudades>
    <h1>Hola mundo soy la pagina ciudades</h1>
    <b-card>
      <b-card-body>
        <datatable :data="data" :columns="columns" :actions="actions" :loading="spinner" :index="false"></datatable>
      </b-card-body>
    </b-card>
  </b-container>
    
</template>
<script>
import NavBarciudades from '@/components/NavBarCiudades.vue'
import axios from "axios"
require("bootstrap-vue-datatable")
export default {
    name:"Ciudades",
    components:{
      NavBarciudades
    },
    data(){
      return{
        data:null,
        fichaPais:null,
        columns:[
          {name:"name", th:"name"},
          {name:"alpha3Code", th:"alpha3Code"},
          {name:"capital", th:"capital"},
          {name:"region", th:"region"},
          {name:"subregion", th:"subregion"},
          {name:"population", th:"population"},
        ],
        actions:[
          { text:"Ver Ficha",color:"primary",action:(row)=>{this.getFichaCiudad(row.alpha3Code);}}
        ]
      }
    },
    mounted(){
      this.getCiudades();
    },
    methods:{
      getCiudades(){
        var self = this;
        const options = {
          method: 'GET',
          url: 'https://restcountries-v1.p.rapidapi.com/all',
          headers: {
            'x-rapidapi-key': '3ec7cba7c7msh40aa2fdd63bba9fp1e761djsn1732358e0c81',
            'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com'
          }
        };

        axios.request(options).then(function (response) {
          self.data = response.data;
          console.log("ciudades "+self.data);
        }).catch(function (error) {
          console.error(error);
        });        
      },
      getFichaCiudad(countryCode){
        var self = this;
        const options = {
          method: 'GET',
          url: 'https://restcountries-v1.p.rapidapi.com/alpha/'+countryCode,
          headers: {
            'x-rapidapi-key': '3ec7cba7c7msh40aa2fdd63bba9fp1e761djsn1732358e0c81',
            'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com'
          }
        };
        axios.request(options).then(function (response) {
          self.fichaPais = response.data;
          console.log("Pais "+self.fichaPais);
        }).catch(function (error) {
          console.error(error);
        });
      }
    }
}
</script>
<style scoped>

</style>