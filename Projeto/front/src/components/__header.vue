<template>
  <div>
    <v-app-bar height="70" class="primary" app>
      <div class="d-flex align-center">
        <v-avatar size="45" class="grey lighten-4 ml-5">
          <v-icon>mdi-account</v-icon>
        </v-avatar>
        <span class="ml-2 white--text title font-weight-bold">Olá, Thiago</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="$router.push({name:'Home'})" text color="white">Inicio</v-btn>
      <v-btn @click="$router.push({name:'AddRate'})" text color="white">Adicionar avaliação</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  export default{
    name:"Header",
    data(){
      return {

      }
    }
  }
</script>