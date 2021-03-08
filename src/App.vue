<template>
  <v-app>
   <Navbar></Navbar>
    <v-main class="grey lighten-4 mx-4 px-2 py-2 mb-2">
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
