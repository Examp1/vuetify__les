<template>
  <nav>
    <v-toolbar flat app>
        <v-btn fab flat depresed @click="drawer = !drawer"> 
            <v-icon>
                mdi-menu
            </v-icon>
        </v-btn>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">
                Todo
            </span>
            <span>
            vue app
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat >
            <span>
                Sing Out
                <v-icon right>mdi-exit-to-app</v-icon>
            </span>
        </v-btn>
    </v-toolbar>


    <!-- проп temporary нужен для оверлея -->
    <v-navigation-drawer v-model="drawer" absolute temporary class="primary">
        <p class="success">test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    },
};
</script>

<style>
</style>