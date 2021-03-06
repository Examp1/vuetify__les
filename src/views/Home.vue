<template>
  <div class="home">
    <h1>Home page</h1>
   
    <v-btn
      class="pink white--text"
    >click me</v-btn>
    <v-btn
      depressed
      color="pink"
    >click me again</v-btn>

    <v-btn
      flat
      color="pink"
    >
      click me 
    </v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email: me</span>
    </v-btn>
    <v-btn depressed small class="pink white--text">
      <v-icon left small>mdi-email</v-icon>
      <span>email: me</span>
    </v-btn>
    <v-btn depressed large class="pink white--text">
      <span>email: me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>mdi-delete</v-icon>
    </v-btn>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
 
}
</script>
