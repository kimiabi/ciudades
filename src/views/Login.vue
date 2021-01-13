<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12" sm="12" md="6" lg='6'>
        <h1>Sing In</h1>
        <b-form>
          <b-button type="submit" variant="primary">Fb</b-button>
          <b-button type="reset" variant="danger">Google</b-button>
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
          <b-button type="submit" variant="primary">Ingresar</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name:'Login',
  data(){
    return {
        email:null,
        password:null
    }
  }
}
</script>
<style scoped>

</style>