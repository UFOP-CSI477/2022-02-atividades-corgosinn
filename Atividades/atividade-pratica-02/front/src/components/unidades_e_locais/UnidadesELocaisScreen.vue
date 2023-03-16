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
            <v-data-table :items="locais" :headers="locais_headers">
              <template v-slot:item.endereco="{item}">
                {{item.rua}} - {{ item.complemento }} ,{{ item.numero }}
              </template>
              <template v-slot:item.actions="{item}">
                <v-btn icon @click="$router.push({name:'EditLocais', params:{id:item.id}})">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="$router.push({name:'DeleteLocais', params:{id:item.id, table:'LocalColetaApi'}})">
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
            <span> Unidades</span>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push({name:'AddUnidades'})" small>
              <v-icon class="mr-2">mdi-office-building-plus</v-icon>
              Adicionar Unidade
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-data-table :items="unidades"  :headers="unidades_headers">
              <template v-slot:item.endereco="{item}">
                {{ item.complemento }} ,{{ item.numero }}
               </template>
               <template v-slot:item.actions="{item}">
                  <v-btn icon @click="$router.push({name:'EditUnidades', params:{id:item.id}})">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon @click="$router.push({name:'DeleteUnidades', params:{id:item.id, table:'UnidadeApi'}})">
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
    name:"UnidadesELocaisScreen",
    data(){
      return{
        locais_headers:[
          {text:"id", value:"id" },
          {text:"Nome", value:"nome" },
          {text:"Endereço", value:"endereco" },
          {text:"Cidade", value:"nome_cidade" },
          {text:"Ações", value:"actions" },
        ],
        unidades_headers:[
          {text:"id", value:"id" },
          {text:"Nome", value:"nome" },
          {text:"Endereço", value:"endereco" },
          {text:"Cidade", value:"nome_cidade" },
          {text:"Ações", value:"actions" },
        ],
        locais:[],
        unidades:[],
      }
    },
    methods:{
      getData(){
        this.getLocais()
        this.getUnidades()
      },
      getLocais(){
        Api.LocalColetaApi.index().then(r => {
          this.locais = [...r.data]
        })
      },
      getUnidades(){
        Api.UnidadeApi.index().then(r => {
          this.unidades = [...r.data]
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