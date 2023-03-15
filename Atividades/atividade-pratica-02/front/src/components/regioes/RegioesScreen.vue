<template>
  <div>
    <router-view></router-view>
     <v-row>
       <v-col cols="12" md="6">
        <v-card height="80vh">
          <v-card-title class="title deep-purple accent-4 white--text">
            <span> Estados</span>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push({name:'AddEstados'})" small>
              <v-icon class="mr-2">mdi-map-plus</v-icon>
              Adicionar Estado
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-data-table :headers="estado_headers" :items="estados"></v-data-table>
          </v-card-text>
         </v-card>
       </v-col>
       <v-col cols="12" md="6">
        <v-card height="80vh">
          <v-card-title class="title deep-purple accent-4 white--text">
            <span> Cidades</span>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push({name:'AddCidades'})" small>
              <v-icon class="mr-2">mdi-bank-plus</v-icon>
              Adicionar Cidade
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-data-table :items="cidades" :headers="cidade_headers"></v-data-table>
          </v-card-text>
         </v-card>
       </v-col>
     </v-row>
    
  </div>
</template>

<script>
  import Api from '@/api/index'
  export default{
    name:"RegioesScreen",
    data(){
      return{
        estado_headers:[
          {text:"id", value:"id" },
          {text:"Nome", value:"nome" },
          {text:"sigla", value:"sigla" },
        ],
        cidade_headers:[
          {text:"id", value:"id" },
          {text:"Nome", value:"nome" },
          {text:"Estado", value:"nome_estado" },
        ],
        estados:[ ],
        cidades:[ ],
      }
    },
    methods:{
      getData(){
        this.getEstados()
        this.getCidades()
      },
      getEstados(){
        Api.EstadoApi.index().then(r =>{
          this.estados = [...r.data]
        })
      },
      getCidades(){
        Api.CidadeApi.index().then(r =>{
          this.cidades = [...r.data]
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