<template>
    <b-container>
      <NavBarciudades></NavBarciudades>
      <b-card no-body>
        <template #header>
          <h2 class="mb-0">{{ fichaPais.name }} :: {{ fichaPais.alpha3Code }}</h2>
        </template>

        <b-list-group flush>
          <b-list-group-item><strong>Capital: </strong>{{ fichaPais.capital }}</b-list-group-item>
          <b-list-group-item><strong>Region: </strong>{{ fichaPais.region }}</b-list-group-item>
          <b-list-group-item><strong>Subregion: </strong>{{ fichaPais.subregion }}</b-list-group-item>
          <b-list-group-item><strong>Population: </strong>{{ fichaPais.population }}</b-list-group-item>
          
        </b-list-group>

        <b-card-body>
          <strong>Borders: </strong><br>
          <b-button
            class="ml-2" 
            size="sm"
            v-for="(borde,index) in fichaPais.borders" 
            :key="index"
            @click="getFichaCiudad(borde)">
            {{borde}}
          </b-button><br>
        </b-card-body>
      </b-card>
    </b-container>
</template>
<script>
import NavBarciudades from '@/components/NavBarCiudades.vue'
import axios from "axios"
export default {
    name:"FichaCiudad",
    components:{
      NavBarciudades
    },
    data(){
      return{
        fichaPais:null,
        countryCode:this.$route.params.countryCode
      }
    },
    mounted(){
        this.getFichaCiudad(this.countryCode);
    },
    methods:{
      getFichaCiudad(countryCode){
        var self = this;
        let code = null
        if(countryCode===null){
          code = this.$route.params.countryCode
        }else{
          code = countryCode
          this.$router.push({name:"FichaCiudad",params:{countryCode:countryCode}})
        }
        const options = {
          method: 'GET',
          url: 'https://restcountries-v1.p.rapidapi.com/alpha/'+code,
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
      },
      verFichaCiudad(countryCode){
        this.$router.push({name:"FichaCiudad",params:{countryCode:countryCode}})
        this.$forceUpdate();
      }
    }
    
}
</script>