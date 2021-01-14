<template>
  <b-container>
    <NavBarciudades></NavBarciudades>
    <b-card>
      <template #header>
        <h2 class="mb-0">Paises</h2>
      </template>
      <b-card-body>
        <datatable :data="data" :columns="columns" :actions="actions" :size="sm" :index="false"></datatable>
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
          { text:"Ver Ficha",color:"secondary",size:"sm",action:(row)=>{this.verFichaCiudad(row.alpha3Code);}}
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
        }).catch(function (error) {
          console.error(error);
        });        
      },
      verFichaCiudad(countryCode){
        this.$router.push({name:"FichaCiudad",params:{countryCode:countryCode}})
      }
    }
}
</script>
<style scoped>

</style>