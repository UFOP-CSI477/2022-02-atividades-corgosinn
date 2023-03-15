<template>
  <div>
    <router-view></router-view>
    <v-card height="80vh">
      <v-card-title class="title deep-purple accent-4 white--text">
        <span> Pessoas</span>
        <v-spacer></v-spacer>
        <v-btn @click="$router.push({name:'AddPessoas'})" small>
          <v-icon class="mr-2">mdi-account-plus</v-icon>
          Adicionar pessoa
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
    name:"PessoasScreen",
    data(){
      return{
        headers:[
          {text:"id", value:"id" },
          {text:"Nome", value:"nome" },
          {text:"Endereço", value:"endereco" },
          {text:"Documento", value:"documento" },
          {text:"Cidade", value:"cidade" },
          {text:"Tipo Sanguinio", value:"tipo_sanguinio" },
        ]
      }
    }
  }
</script>