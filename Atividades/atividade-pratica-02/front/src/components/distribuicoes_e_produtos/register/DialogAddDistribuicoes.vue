<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Distribuição
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-select v-model="distribuicao.produto_id" :items="produtos" item-text="etiqueta" item-value="id" label="Produto"></v-select>
            <v-select v-model="distribuicao.unidade_id" :items="unidades" item-text="nome" item-value="id" label="Unidade"></v-select>
            <div class="d-flex justify-center">
              <v-date-picker v-model="distribuicao.data"></v-date-picker>
            </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'DistribuiçõesEProdutos'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="postDistribuicao" color="success">Adicionar</v-btn>
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
        distribuicao: {},
        produtos: [],
        unidades: []
      }
    },
    methods:{
      getData(){
        this.getProdutos()
        this.getUnidades()
      },
      getProdutos(){
        Api.ProdutoApi.index().then(r => {
          this.produtos = [...r.data]
        })
      },
      getUnidades(){
        Api.UnidadeApi.index().then(r => {
          this.unidades = [...r.data]
        })
      },
      postDistribuicao(){
        if(this.$refs.form.validate()){
          Api.DistribuicaoApi.create(this.distribuicao).then(r => {
            this.$router.push({name:'DistribuiçõesEProdutos'})
          })
        }
      }
    },
    mounted(){
      this.getData()
    }

  }
</script>