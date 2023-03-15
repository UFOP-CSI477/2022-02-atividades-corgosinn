<template>
  <div>
    <router-view></router-view>
     <v-row>
       <v-col cols="12" md="6">
        <v-card height="80vh">
          <v-card-title class="title deep-purple accent-4 white--text">
            <span> Locais</span>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push({name:'AddLocais'})" small>
              <v-icon class="mr-2">mdi-map-marker-plus</v-icon>
              Adicionar Local
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-data-table :headers="locais_headers"></v-data-table>
          </v-card-text>
         </v-card>
       </v-col>
       <v-col cols="12" md="6">
        <v-card height="80vh">
          <v-card-title class="title deep-purple accent-4 white--text">
            <span> Unidades</span>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push({name:'AddUnidades'})" small>
              <v-icon class="mr-2">mdi-office-building-plus</v-icon>
              Adicionar Unidade
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-data-table :headers="unidades_headers"></v-data-table>
          </v-card-text>
         </v-card>
       </v-col>
     </v-row>
    
  </div>
</template>

<script>
  export default{
    name:"UnidadesELocaisScreen",
    data(){
      return{
        locais_headers:[
          {text:"id", value:"id" },
          {text:"Nome", value:"nome" },
          {text:"Endereço", value:"endereco" },
          {text:"Cidade", value:"cidade" },
        ],
        unidades_headers:[
          {text:"id", value:"id" },
          {text:"Endereço", value:"endereco" },
          {text:"Cidade", value:"cidade" },
        ],
      }
    }
  }
</script>