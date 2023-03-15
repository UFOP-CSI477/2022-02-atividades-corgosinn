<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Produto
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-select label="Doação"></v-select>
            <v-text-field v-model="produto.etiqueta" label="Etiqueta"></v-text-field>
            <v-text-field v-model="produto.validade" label="Validade"></v-text-field>
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
  export default{
    name:"DialogAddProdutos",
    data(){
      return{
        dialog:true,
        produto: {}
      }
    },
    methods:{
      postProduto(){
        if(this.$refs.form.validate()){
          Api.ProdutoApi.create(this.produto).then(r => {

          })
        }
      }
    }

  }
</script>