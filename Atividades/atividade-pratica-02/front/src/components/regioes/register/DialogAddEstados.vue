<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          Adicionar Estado
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field v-model="estado.nome" label="Nome"></v-text-field>
            <v-text-field v-model="estado.sigla" label="Sigla"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push({name:'Regiões'})" color="error" text>Cancelar</v-btn>
          <v-btn @click="postEstado" color="success">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"DialogAddEstados",
    data(){
      return{
        dialog:true,
        estado: {}
      }
    },
    methods:{
      getData(){
        if(this.isEditPage){
          Api.EstadoApi.show(this.$route.params.id).then(r => {
            this.estado = {...r.data}
          })
        }
      },
      postEstado(){
        if(this.$refs.form.validate()){
          let method = this.isEditPage ? "update" : "create"
          Api.EstadoApi[method](this.estado).then(r => {
            this.$router.push({name:'Regiões'})
          })
        }
      }
    },
    computed:{
      isEditPage(){
        return this.$route.params.id ? true:false
      }
    },
    mounted(){
      this.getData()
    }

  }
</script>