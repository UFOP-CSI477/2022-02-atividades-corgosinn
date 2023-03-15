<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Cidade
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="cidade.nome" label="Nome"></v-text-field>
            <v-select  label="Estado"></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'Regiões'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="" color="success">Adicionar</v-btn>
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
        cidade: {}
      }
    },
    methods:{
      postCidade(){
        if(this.$refs.form.validate()){
          Api.CidadeApi.create(this.cidade).then(r => {

          })
        }
      }
    }

  }
</script>