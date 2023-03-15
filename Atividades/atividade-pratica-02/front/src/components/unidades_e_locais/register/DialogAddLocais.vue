<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Local
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field v-model="local.nome" label="Nome"></v-text-field>
            <v-text-field v-model="local.rua" label="Rua"></v-text-field>
            <v-text-field v-model="local.numero" label="Número"></v-text-field>
            <v-text-field v-model="local.complemento" label="Complemento"></v-text-field>
            <v-select v-model="local.cidade_id" :items="cidades" item-text="nome" item-value="id" label="Cidade"></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'Unidades e Locais'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="postLocalColeta" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"DialogAddLocais",
    data(){
      return{
        dialog:true,
        local: {},
        cidades:[],
      }
    },
    methods:{
      getData(){
        this.getCidades()
        if(this.isEditPage){
          Api.LocalColetaApi.show(this.$route.params.id).then(r => {
            this.local = {...r.data}
          })
        }
      },
      getCidades(){
        Api.CidadeApi.index().then(r => {
          this.cidades = [...r.data]
        })
      },
      postLocalColeta(){
        if(this.$refs.form.validate()){
          let method = this.isEditPage ? "update" : "create"
          Api.LocalColetaApi[method](this.local).then(r => {
            this.$router.push({name:'Unidades e Locais'})
          })
        }
      }
    },
    computed:{
      isEditPage(){
        return this.$route.params.id ? true:false
      }
    },
    mounted(){
      this.getData()
    }

  }
</script>