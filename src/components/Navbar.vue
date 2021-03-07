<template>
  <nav>
    <v-toolbar flat app>
        <v-btn depressed flat depresed @click="drawer = !drawer"> 
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
    <v-navigation-drawer v-model="drawer" app temporary class="primary">
        <v-list>
            <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text">
                        {{ link.icon }}
                    </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">
                        {{ link.text }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
                {icon: 'mdi-folder', text: 'My Project', route: '/projects'},
                {icon: 'mdi-account-supervisor', text: 'Team', route: '/team'},
            ]
        }
    },
};
</script>

<style>
</style>