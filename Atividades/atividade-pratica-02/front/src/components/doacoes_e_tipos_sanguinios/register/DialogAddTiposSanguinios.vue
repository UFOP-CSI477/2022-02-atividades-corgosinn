<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Doação
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field v-model="tipo_sanguinio.tipo" label="Tipo"></v-text-field>
            <v-text-field v-model="tipo_sanguinio.fator"  label="Fator"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'DoacoesETiposSanguinios'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="postTipoSanguinio" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"DialogAddTiposSanguinios",
    data(){
      return{
        dialog:true,
        tipo_sanguinio: {}
      }
    },
    methods:{
      postTipoSanguinio(){
        if(this.$refs.form.validate()){
          Api.TipoSanguinioApi.create(this.tipo_sanguinio).then(r => {
            this.$router.push({name:'DoacoesETiposSanguinios'})
          })
        }
      }
    }
  }
</script>