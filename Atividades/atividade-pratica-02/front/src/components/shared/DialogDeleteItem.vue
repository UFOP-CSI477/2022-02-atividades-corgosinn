<template>
  <v-dialog v-model="dialog" persistent max-width="400px">
    <v-card>
      <v-card-title>
        <v-icon class="mr-2">mdi-alert</v-icon>
        Exclusão de item
      </v-card-title>
      <v-card-text class="d-flex flex-column">
        <span class="title font-weight-regular">
          Deseja realmente excluir este item?
        </span>
        <span class="red--text">{{ err }}</span>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="$router.go(-1)" text>Cancelar</v-btn>
        <v-btn @click="deleteItem" color="red white--text">Deletar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import Api from '@/api/index'
  export default{
    name:"DialogDeleteItem",
    data(){
      return{
        dialog:true,
        err:''
      }
    },
    methods:{
      deleteItem(){
        let table = this.$route.params.table
        let id = this.$route.params.id
        if(table && id){
          Api[table].delete(id).then(r => {
            this.$router.go(-1)
          }).catch(err =>{
            this.err = "Item não pode ser excluido, exclua itens que referênciam esta tabela primeiro."
          })
        }
      }
    }
  }
</script>