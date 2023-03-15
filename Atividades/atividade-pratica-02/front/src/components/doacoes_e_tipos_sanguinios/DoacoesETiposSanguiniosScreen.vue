<template>
  <div>
    <router-view></router-view>
    <v-row>
      <v-col cols="12" md="6">
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
            <v-data-table :items="doacoes" :headers="headers">
              <template v-slot:item.data="{item}">
                {{ new Date(item.data).getDate() }}/{{ new Date(item.data).getMonth() }}/{{ new Date(item.data).getFullYear() }}
              </template>
              <template v-slot:item.actions="{item}">
                <v-btn icon @click="$router.push({name:'EditDoacoes', params:{id:item.id}})">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="">
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
            <span> Tipos Sanguinios</span>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push({name:'AddTipoSanguinio'})" small>
              <v-icon class="mr-2">mdi-water-plus</v-icon>
              Adicionar Tipo Sanguinio
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-data-table :items="tipos_sanguinios" :headers="tipo_sanguinio_headers">
              <template v-slot:item.actions="{item}">
                <v-btn icon @click="$router.push({name:'EditTipoSanguinio', params:{id:item.id}})">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="">
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
    name:"DoacoesSreen",
    data(){
      return{
        headers:[
          {text:"id", value:"id" },
          {text:"Pessoa", value:"nome_pessoa" },
          {text:"Local", value:"nome_local" },
          {text:"Data", value:"data" },
          {text:"Ações", value:"actions" },
        ],
        tipo_sanguinio_headers:[
          {text:"id", value:"id" },
          {text:"Tipo", value:"tipo" },
          {text:"fator", value:"fator" },
          {text:"Ações", value:"actions" },
        ],
        doacoes:[],
        tipos_sanguinios:[]
      }
    },
    methods:{
      getData(){
        this.getDoacoes()
        this.getTiposSanguinios()
      },
      getDoacoes(){
        Api.DoacaoApi.index().then(r =>{
          this.doacoes = [...r.data]
        })
      },
      getTiposSanguinios(){
        Api.TipoSanguinioApi.index().then(r =>{
          this.tipos_sanguinios = [ ...r.data]
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