<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Pessoa
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field v-model="pessoa.nome" label="Nome"></v-text-field>
            <v-text-field v-model="pessoa.rua" label="Rua"></v-text-field>
            <v-text-field v-model="pessoa.numero" label="Número"></v-text-field>
            <v-text-field v-model="pessoa.complemento" label="Complemento"></v-text-field>
            <v-text-field v-model="pessoa.documento" label="Documento"></v-text-field>
            <v-select label="Cidade"></v-select>
            <v-select label="Tipo Sanguínio"></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'Pessoas'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"DialogAddPessoas",
    data(){
      return{
        dialog:true,
        pessoa: {}
      }
    },
    methods:{
      postPessoa(){
        if(this.$refs.form.validate()){
          Api.PessoaApi.create(this.pessoa).then(r => {

          })
        }
      }
    }

  }
</script>