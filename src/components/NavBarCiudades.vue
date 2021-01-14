<template>
  <div class="mb-4" style="border-bottom: 1px solid #e0dcdc;">
    <b-navbar class="toolbar" type="light">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" style="padding-right:5px; margin-top:5px">
          <strong>{{user.data.email}}</strong>
        </b-nav-item>            
      </b-navbar-nav>      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" style="padding-right:5px; margin-top:5px">
              <strong @click="cerrarSesion">Cerrar sesion</strong>
            </b-nav-item>           
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters}from "vuex"
import firebase from "firebase";
export default {
    name:"NavBarciudades",
    computed:{
      ...mapGetters({user:"user"})
    },
    methods:{
      cerrarSesion(){
        firebase.auth().signOut()
        .then(()=>{
          this.$router.replace({
            name:"Login"
          });
        })
      }
    }
}
</script>