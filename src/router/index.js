import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
require('firebase/auth')
import Login from '../views/Login.vue'
import Ciudades from '../views/Ciudades.vue'
import FichaCiudad from '../views/FichaCiudad.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{guestOnly:true}
  },
  {
    path: '/paises',
    name: 'Ciudades',
    component: Ciudades,
    meta:{requiresAuth:true}
  },
  {
    path: '/paises/countrycode=:countryCode',
    name: 'FichaCiudad',
    component: FichaCiudad,
    meta:{requiresAuth:true}
  },
  { 
    path: '*', 
    redirect: '/paises'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async(to, from, next) => {

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const guestOnly = to.matched.some(record => record.meta.guestOnly);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('login');
  }
  else if(guestOnly && await firebase.getCurrentUser()){
    next('/');
  }
  else{
    next();
  }
})

export default router
