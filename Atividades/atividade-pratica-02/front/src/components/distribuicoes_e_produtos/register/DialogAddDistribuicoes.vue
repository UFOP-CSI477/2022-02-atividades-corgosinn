<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Distribuição
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-select label="Produto"></v-select>
            <v-select label="Unidade"></v-select>
            <v-text-field v-model="distribuicao.data" label="Data"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'DistribuiçõesEProdutos'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"DialogAddDistribuicoes",
    data(){
      return{
        dialog:true,
        distribuicao: {}
      }
    },
    methods:{
      postDistribuicao(){
        if(this.$refs.form.validate()){
          Api.DistribuicaoApi.create(this.distribuicao).then(r => {

          })
        }
      }
    }

  }
</script>