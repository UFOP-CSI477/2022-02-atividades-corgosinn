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
            <v-select v-model="pessoa.cidade_id" :items="cidades" item-text="nome" item-value="id" label="Cidade"></v-select>
            <v-select v-model="pessoa.tipo_sanguinio_id" :items="tipos_sanguinios" item-text="tipo" item-value="id" label="Tipo Sanguínio">
              <template v-slot:item="{item}">
                {{ item.tipo }}  {{ item.fator }}
              </template>
            </v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'Pessoas'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="postPessoa" color="success">Adicionar</v-btn>
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
        pessoa: {},
        cidades: [],
        tipos_sanguinios:[]
      }
    },
    methods:{
      getData(){
        this.getCidades()
        this.getTiposSanguinios()
      },
      getCidades(){
        Api.CidadeApi.index().then(r =>{
          this.cidades = [...r.data]
        })
      },
      getTiposSanguinios(){
        Api.TipoSanguinioApi.index().then(r => {
          this.tipos_sanguinios = [...r.data]
        })
      },
      postPessoa(){
        if(this.$refs.form.validate()){
          Api.PessoaApi.create(this.pessoa).then(r => {
            this.$router.push({name:'Pessoas'})
          })
        }
      }
    },
    mounted(){
      this.getData()
    }

  }
</script>