<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>Sistemas Web</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="$router.push({name:link.page})" v-for="link in links" :key="link.text" text>{{link.text}}</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
 export default {
  name:"Header",
  data(){
    return{
      links:[
        { text:"Home", page:"Home" },
        { text:"Pessoas", page:"Pessoas" },
        { text:"Doações", page:"Doações" },
        { text:"Região", page:"Regiões" },
        { text:"Unidades e Locais", page:"Unidades e Locais" },
        { text:"Distribuições", page:"Distribuições" },
      ]
    }
  }
 }
</script>