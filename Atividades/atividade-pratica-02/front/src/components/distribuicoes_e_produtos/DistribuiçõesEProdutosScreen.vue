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
            <v-data-table :items="distribuicoes" :headers="distribuicoes_headers">
              <template v-slot:item.data="{item}">
                {{ new Date(item.data).getDate() }}/{{ new Date(item.data).getMonth() }}/{{ new Date(item.data).getFullYear() }}
              </template>
              <template v-slot:item.actions="{item}">
                <v-btn icon @click="$router.push({name:'EditDistribuicoes', params:{id:item.id}})">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="$router.push({name:'DeleteDistribuicoes', params:{id:item.id, table:'DistribuicaoApi'}})">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-data-table>
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
            <v-data-table :items="produtos" :headers="produtos_headers">
              <template v-slot:item.validade="{item}">
                {{ new Date(item.validade).getDate() }}/{{ new Date(item.validade).getMonth() }}/{{ new Date(item.validade).getFullYear() }}
              </template>
              <template v-slot:item.actions="{item}">
                <v-btn icon @click="$router.push({name:'EditProdutos', params:{id:item.id}})">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="$router.push({name:'DeleteProdutos', params:{id:item.id, table:'ProdutoApi'}})">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
         </v-card>
       </v-col>
     </v-row>
    
  </div>
</template>

<script>
  import Api from '@/api/index'
  export default{
    name:"DistribuiçõesEProdutosScreen",
    data(){
      return{
        produtos:[],
        distribuicoes:[],
        distribuicoes_headers:[
          {text:"id", value:"id" },
          {text:"Produto", value:"etiqueta" },
          {text:"Unidade", value:"nome_unidade" },
          {text:"Data", value:"data" },
          {text:"Ações", value:"actions" },
        ],
        produtos_headers:[
          {text:"id", value:"id" },
          {text:"Etiqueta", value:"etiqueta" },
          {text:"Doação ID", value:"doacao_id" },
          {text:"Validade", value:"validade" },
          {text:"Ações", value:"actions" },
        ],
      }
    },
    methods:{
      getData(){
        this.getProdutos()
        this.getDistribuicoes()

      },
      getProdutos(){
        Api.ProdutoApi.index().then(r => {
          this.produtos = [...r.data]
        })
      },
      getDistribuicoes(){
        Api.DistribuicaoApi.index().then(r => {
          this.distribuicoes = [...r.data]
        })
      }

    },
    mounted(){
      this.getData()
    },
    watch:{
      $route(){
        this.getData()
      }
    }
  }
</script>