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
        <v-data-table :items="pessoas" :headers="headers">
          <template v-slot:item.endereco="{item}">
            {{item.rua}} - {{ item.complemento }} ,{{ item.numero }}
          </template>
          <template v-slot:item.tipo_sanguinio="{item}">
            {{item.tipo}} {{ item.fator }}
          </template>
          <template v-slot:item.actions="{item}">
            <v-btn icon @click="$router.push({name:'EditPessoas', params:{id:item.id}})">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="$router.push({name:'DeletePessoas', params:{id:item.id, table:'PessoaApi'}})">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import Api from '@/api/index'
  export default{
    name:"PessoasScreen",
    data(){
      return{
        headers:[
          {text:"id", value:"id" },
          {text:"Nome", value:"nome" },
          {text:"Endereço", value:"endereco" },
          {text:"Documento", value:"documento" },
          {text:"Cidade", value:"nome_cidade" },
          {text:"Tipo Sanguinio", value:"tipo_sanguinio" },
          {text:"Ações", value:"actions" },
        ],
        pessoas:[]
      }
    },
    methods:{
      getData(){
        this.getPessoas()
      },
      getPessoas(){
        Api.PessoaApi.index().then(r => {
          this.pessoas = [...r.data]
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