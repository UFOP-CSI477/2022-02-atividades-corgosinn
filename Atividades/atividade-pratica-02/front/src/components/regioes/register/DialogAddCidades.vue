<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Cidade
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field v-model="cidade.nome" label="Nome"></v-text-field>
            <v-select v-model="cidade.estado_id" :items="estados" item-text="nome" item-value="id" label="Estado"></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'Regiões'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="postCidade" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"DialogAddCidades",
    data(){
      return{
        dialog:true,
        cidade: {},
        estados:[],
      }
    },
    methods:{
      getData(){
        this.getEstados()
        if(this.isEditPage){
          Api.CidadeApi.show(this.$route.params.id).then(r => {
            this.cidade = {...r.data}
          })
        }
      },
      getEstados(){
        Api.EstadoApi.index().then(r => {
          this.estados = [...r.data]
        })
      },
      postCidade(){
        if(this.$refs.form.validate()){
          let method = this.isEditPage ? "update" : "create"
          Api.CidadeApi[method](this.cidade).then(r => {
            this.$router.push({name:'Regiões'})
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