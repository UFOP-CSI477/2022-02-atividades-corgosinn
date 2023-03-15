<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Doação
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-select label="Pessoa"></v-select>
            <v-select label="Local"></v-select>
            <v-text-field label="Data"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'Doações'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"DialogAddDoacoes",
    data(){
      return{
        dialog:true,
        doacao: {}
      }
    },
    methods:{
      postDoacao(){
        if(this.$refs.form.validate()){
          Api.DoacaoApi.create(this.doacao).then(r => {

          })
        }
      }
    }
  }
</script>