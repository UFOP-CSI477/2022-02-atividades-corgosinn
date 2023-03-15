<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Doação
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-select v-model="doacao.pessoa_id" :items="pessoas" item-text="nome" item-value="id" label="Pessoa"></v-select>
            <v-select v-model="doacao.local_coletum_id" :items="locais" item-text="nome" item-value="id" label="Local"></v-select>
            <div class="d-flex justify-center">
              <v-date-picker  v-model="doacao.data"></v-date-picker>
            </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'DoacoesETiposSanguinios'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="postDoacao" color="success">Adicionar</v-btn>
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
        doacao: {},
        locais:[],
        pessoas:[],
      }
    },
    methods:{
      getData(){
        this.getLocais()
        this.getPessoas()
      },
      getPessoas(){
        Api.PessoaApi.index().then(r => {
          this.pessoas = [...r.data]
        })
      },
      getLocais(){
        Api.LocalColetaApi.index().then(r => {
          this.locais = [...r.data]
        })
      },
      postDoacao(){
        if(this.$refs.form.validate()){
          Api.DoacaoApi.create(this.doacao).then(r => {
            this.$router.push({name:'DoacoesETiposSanguinios'})
          })
        }
      }
    },
    mounted(){
      this.getData()
    }
  }
</script>