<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Unidade
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field v-model="unidade.nome" label="Nome"></v-text-field>
            <v-text-field v-model="unidade.numero" label="Número"></v-text-field>
            <v-text-field v-model="unidade.complemento" label="Complemento"></v-text-field>
            <v-select v-model="unidade.cidade_id" :items="cidades" item-text="nome" item-value="id" label="Cidade"></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'Unidades e Locais'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="postUnidade" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"DialogAddUnidades",
    data(){
      return{
        dialog:true,
        unidade: {},
        cidades:[],

      }
    },
    methods:{
      getData(){
        this.getCidades()
        if(this.isEditPage){
          Api.UnidadeApi.show(this.$route.params.id).then(r => {
            this.unidade = {...r.data}
          })
        }
      },
      getCidades(){
        Api.CidadeApi.index().then(r => {
          this.cidades = [...r.data]
        })
      },
      postUnidade(){
        if(this.$refs.form.validate()){
          let method = this.isEditPage ? "update" : "create"
          Api.UnidadeApi[method](this.unidade).then(r => {
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