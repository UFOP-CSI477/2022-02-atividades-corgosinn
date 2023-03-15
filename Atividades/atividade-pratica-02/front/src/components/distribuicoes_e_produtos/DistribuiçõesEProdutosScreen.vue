<template>
  <div>
    <router-view></router-view>
     <v-row>
       <v-col cols="12" md="6">
        <v-card height="80vh">
          <v-card-title class="title deep-purple accent-4 white--text">
            <span> Distribuições</span>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push({name:'AddDistribuicoes'})" small>
              <v-icon class="mr-2">mdi-plus-circle-multiple-outline</v-icon>
              Adicionar Distribuições
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-data-table :headers="distribuicoes_headers"></v-data-table>
          </v-card-text>
         </v-card>
       </v-col>
       <v-col cols="12" md="6">
        <v-card height="80vh">
          <v-card-title class="title deep-purple accent-4 white--text">
            <span> Produtos</span>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push({name:'AddProdutos'})" small>
              <v-icon class="mr-2">mdi-office-building-plus</v-icon>
              Adicionar Produto
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-data-table :headers="produtos_headers"></v-data-table>
          </v-card-text>
         </v-card>
       </v-col>
     </v-row>
    
  </div>
</template>

<script>
  export default{
    name:"DistribuiçõesEProdutosScreen",
    data(){
      return{
        distribuicoes_headers:[
          {text:"id", value:"id" },
          {text:"Produto", value:"produto" },
          {text:"Unidade", value:"unidade" },
          {text:"Data", value:"data" },
        ],
        produtos_headers:[
          {text:"id", value:"id" },
          {text:"Etiqueta", value:"etiqueta" },
          {text:"Doação", value:"doacao" },
          {text:"Validade", value:"validade" },
        ],
      }
    }
  }
</script>