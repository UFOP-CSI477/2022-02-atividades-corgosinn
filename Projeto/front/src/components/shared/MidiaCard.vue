<template>
  <div>
    <v-card class="rounded-tr-xl primary" min-width="500px" >
      <v-card-title class="subtitle-1 white--text">
        {{ text_card }}
      </v-card-title>
      <v-card-text class="">
        <v-sheet width="250" class="ma-auto">
          <v-img src="https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"></v-img>
        </v-sheet>
        <div class="border mt-2 pa-2 rounded-b-xl">
          <span class="d-flex justify-center white--text title">{{midia.title}}</span>
          <v-divider class="my-2"></v-divider>
          <div>
            <v-row class="mx-10 ">
              <v-col cols="7" class="white--text"> Produtor: {{midia.creator}}</v-col>
              <v-col cols="5" class="d-flex justify-end align-center white--text"> 
                <v-icon class="yellow--text mr-2">mdi-star</v-icon> {{midia.rate}} / 10
              </v-col>
            </v-row>
            <div class="d-flex justify-center flex-column mt-2">
              <span class="white--text ma-auto">Comentário do usuário</span>
              <div class="d-flex flex-wrap white pa-3 rounded-b-xl">
                {{midia.comment}}
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
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
            title:"Titulo", creator:"Nome do Criador",
            rate:8.5, 
            comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga neque aperiam sapiente atque repudiandae. Explicabo, excepturi facilis repellendus commodi voluptatem aperiam dicta officiis maxime, optio itaque similique sed sequi libero!"
          }}
      }
    },
    data(){
      return{

      }
    },

  }
</script>

<style scoped>
.border{
  border: 1px solid rgba(0, 0, 0, 0.338);
}
</style>