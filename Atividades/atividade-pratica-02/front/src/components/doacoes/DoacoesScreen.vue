<template>
  <div>
    <router-view></router-view>
    <v-card height="80vh">
      <v-card-title class="title deep-purple accent-4 white--text">
        <span> Doações</span>
        <v-spacer></v-spacer>
        <v-btn @click="$router.push({name:'AddDoacoes'})" small>
          <v-icon class="mr-2">mdi-plus-box</v-icon>
          Adicionar Doação
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-data-table :headers="headers"></v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default{
    name:"DoacoesSreen",
    data(){
      return{
        headers:[
          {text:"id", value:"id" },
          {text:"Pessoa", value:"pessoa" },
          {text:"Local", value:"local" },
          {text:"Data", value:"data" },
        ]
      }
    }
  }
</script>