<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Produto
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-select v-model="produto.doacao_id" :items="doacoes" item-text="nome" item-value="id" label="Doação">
              <template v-slot:item="{item}">
                {{ item.nome_pessoa }} - {{ item.nome_local }}
              </template>
              <template v-slot:selection="{item}">
                {{ item.nome_pessoa }} - {{ item.nome_local }}
              </template>
            </v-select>
            <v-text-field v-model="produto.etiqueta" label="Etiqueta"></v-text-field>
            <div class="d-flex justify-center">
              <v-date-picker v-model="produto.validade"></v-date-picker>
            </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'DistribuiçõesEProdutos'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="postProduto" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from '@/api/index'
  export default{
    name:"DialogAddProdutos",
    data(){
      return{
        dialog:true,
        produto: {},
        doacoes:[]
      }
    },
    methods:{
      getData(){
        this.getDoacoes()
      },
      getDoacoes(){
        Api.DoacaoApi.index().then(r => {
          this.doacoes = [...r.data]
        })
      },
      postProduto(){
        if(this.$refs.form.validate()){
          Api.ProdutoApi.create(this.produto).then(r => {
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