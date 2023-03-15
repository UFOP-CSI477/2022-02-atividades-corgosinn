<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Local
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="local.nome" label="Nome"></v-text-field>
            <v-text-field v-model="local.rua" label="Rua"></v-text-field>
            <v-text-field v-model="local.numero" label="Número"></v-text-field>
            <v-text-field v-model="local.complemento" label="Complemento"></v-text-field>
            <v-select label="Cidade"></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'Unidades e Locais'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"DialogAddLocais",
    data(){
      return{
        dialog:true,
        local: {}
      }
    },
    methods:{
      postLocalColeta(){
        if(this.$refs.form.validate()){
          Api.LocalColetaApi.create(this.local).then(r => {

          })
        }
      }
    }

  }
</script>