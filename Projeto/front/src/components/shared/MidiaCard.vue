<template>
  <div>
    <v-dialog v-model="warningDeleteItem" max-width="400px">
      <v-card >
        <v-card-title><v-icon class="mr-2">mdi-alert</v-icon> AVISO</v-card-title>
        <v-card-text class="subtitle-2"> Tem certeza que deseja deletar: {{ midia.title }}</v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn text @click="warningDeleteItem = !warningDeleteItem">cancelar</v-btn>
          <v-btn text @click="deleteItem" color="red">deletar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card class="rounded-xl primary" min-width="500px" >
      <v-card-title class="subtitle-1 white--text">
        {{ text_card }}
        <v-spacer></v-spacer>
        <v-btn @click="warningDeleteItem = !warningDeleteItem" small icon v-if="midia.id" color="red--text white"><v-icon class="white rounded-circle pa-4 ">mdi-delete</v-icon></v-btn>
      </v-card-title>
      <v-card-text class="pa-0 ma-0 grey pt-2">
        <v-sheet width="250" :height="'340px'" class="ma-auto rounded-lg">
          <v-img height="340px" class="rounded-lg" :src="midia.image_url" v-if="midia.image_url && midia.image_url.length > 10"></v-img>
          <v-sheet v-if="!midia.image_url || midia.image_url.length < 10" class="d-flex justify-center rounded-lg align-center primary" height="100%">
            <v-icon size="150px" color="white">mdi-image</v-icon>
          </v-sheet>
        </v-sheet>
        <div class="border white mt-2 pa-2 rounded-b-xl">
          <span class="d-flex justify-center font-weight-black title">{{midia.title ? midia.title : "Titulo da mídia"}}</span>
          <v-divider class="my-2"></v-divider>
          <div>
            <v-row class="mx-10 ">
              <v-col cols="7"> Criador: {{midia.creator ? midia.creator : "Criador da mídia"}}</v-col>
              <v-col cols="5" class="d-flex justify-end align-center "> 
                <v-icon class="yellow--text mr-2 ">mdi-star</v-icon> 
                <span class="font-weight-black">
                  {{midia.rate ? midia.rate : '9'}} / 10
                </span>
              </v-col>
            </v-row>
            <div class="d-flex justify-center flex-column mt-2">
              <span class=" ma-auto">Comentário do usuário</span>
              <div class="d-flex flex-wrap grey lighten-3 pa-3 rounded-b-xl">
                <v-textarea height="90" disabled v-model="midia.comment"> </v-textarea>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import Api from "@/api/index"
  export default{
    name:"MidiaCard",
    props:{
      text_card:{
        type:String,
        default:"Última avaliação"
      },
      midia:{
        type:Object,
        default: ()=>{
          return {
            default:true,
            title:"Titulo de exemplo", creator:"Nome do Criador", rate:8.5, 
            comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga neque aperiam sapiente atque repudiandae. Explicabo, excepturi facilis repellendus commodi voluptatem aperiam dicta officiis maxime, optio itaque similique sed sequi libero!"
          }}
      }
    },
    data(){
      return{
        warningDeleteItem:false
      }
    },
    methods:{
      deleteItem(){
        Api.Midia.delete(this.midia.id).then( r => {
          this.$emit("onDelete")
          this.warningDeleteItem = !this.warningDeleteItem
        })
      }
    }

  }
</script>

<style scoped>
.border{
  border: 1px solid rgba(0, 0, 0, 0.338);
}
</style>