<template>
  <v-form ref="form">
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <span class="title">Adicionar Mídia</span>
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="midia.title"  filled  label="Nome da mídia"></v-text-field>
      </v-col>
      <v-col cols="7">
        <v-select v-model="midia.rate" filled label="Nota da mídia"></v-select>
      </v-col>
      <v-col cols="5">
        <v-select v-model="midia.type" filled label="Tipo da mídia"></v-select>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="midia.creator" filled label="Produtor/Autor"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="midia.image_url" filled label="Link da imagem"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea v-model="midia.comment" filled label="Comentários"></v-textarea>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn @click="resetMidia" color="yellow darken-3 white--text" class="mx-1">Resetar</v-btn>
        <v-btn @click="saveMidia" color="success" class="mx-1">Salvar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  import Api from '@/api/index';
  export default{
    name:"RateForm",
    props:{
      midia:{type:Object, default:()=>{return {}}}
    },
    methods:{
      resetMidia(){
        this.$emit("resetMidia")
      },
      saveMidia(){
        if(this.$refs.form.validate()){
          Api.Midia.create( this.midia ).then(r => {
            console.log(r)
          })
        }
      }
    },

  }
</script>