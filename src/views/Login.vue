<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12" sm="12" md="12" lg='6'>
        <b-card class="mt-5">
          <template #header>
          <h1>Ingreso</h1>
          </template>
          <b-card-body>
          <b-form @submit.stop.prevent @submit="autenticar">
            <div class="mb-4">
              <b-button type="submit" variant="primary">Iniciar con Facebook</b-button>
              <b-button class="ml-2" type="submit" variant="danger">Iniciar con Google</b-button>
            </div>
            <b-form-group
              id="input-group-1"
              label="Email"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                type="email"
                v-model="email"
                placeholder="Ingresar email"
                required
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Contrasena"
              label-for="input-contrasena"
            >
              <b-form-input
                id="input-contrasena"
                v-model="password"
                type="password"

                placeholder="Ingresar tu contrasena"
                required
              >
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="secondary">Iniciar sesion</b-button>   
        </b-form>
          </b-card-body> 
        </b-card>
      </b-col>
    </b-row>  
  </b-container>
</template>
<script>
import firebase from "firebase"
import "@/firebase.js"
export default {
  name:'Login',
  data(){
    return {
        email:null,
        password:null
    }
  },
  methods:{
    autenticar(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(data =>{
        console.log("Exito! "+data.user);
        this.$router.push({name:"Ciudades"});
      })
      .catch(err =>{
        console.log("Error "+err);
      })
    }
  }
}
</script>
<style scoped>

</style>