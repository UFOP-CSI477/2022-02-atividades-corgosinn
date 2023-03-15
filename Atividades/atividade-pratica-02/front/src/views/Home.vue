<template>
  <v-container style="height:100%" >
    <div class="d-flex justify-center mt-10 flex-column" style="height:95%">
      <div class="d-flex align-center">
        <v-avatar size="150px" class="grey darken-2">
          <v-icon size="100px" color="white" >mdi-account</v-icon>
        </v-avatar>
        <div class="d-flex flex-column">
          <span class="text-h3 font-weight-light mx-3">Thiago Corgosinho Silva</span>
          <span class="text-title -light mx-5 my-2">Matrícula: 20.2.8117</span>
        </div>
      </div>
      <div class="mt-10 d-flex justify-center " style="height:100%">
        <v-card class="">
          <v-card-title class="deep-purple accent-4 white--text">
            <v-sheet class="grey darken-2 d-flex align-center justify-center rounded-xl" style="position: absolute; top: -15px; left: 15px;" width="70px" height="70px">
              <v-icon color="white" size="40px">mdi-plus-box-multiple</v-icon>
            </v-sheet>
            <span class="ml-15 pl-5">Cadastrar</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class=" text-center align-center ma-auto">
            <v-row >
              <v-col cols="6" md="3">
                <v-btn @click="$router.push({name:'Pessoas'})" text>Pessoas</v-btn>
              </v-col>
              <v-col cols="6" md="3">
                <v-btn @click="$router.push({name:'DoacoesETiposSanguinios'})"  text>Doações</v-btn>
              </v-col>
              <v-col cols="6" md="3">
                <v-btn @click="$router.push({name:'Regiões'})"  text>Regiões</v-btn>
              </v-col>
              <v-col cols="6" md="3">
                <v-btn @click="$router.push({name:'DoacoesETiposSanguinios'})"  text>Tipos Sanguínios</v-btn>
              </v-col>
              <v-col cols="6" md="3">
                <v-btn @click="$router.push({name:'Unidades e Locais'})"  text>Unidades</v-btn>
              </v-col>
              <v-col cols="6" md="3">
                <v-btn @click="$router.push({name:'Unidades e Locais'})"  text>Locais</v-btn>
              </v-col>
              <v-col cols="6" md="3">
                <v-btn @click="$router.push({name:'DistribuiçõesEProdutos'})"  text>Produtos</v-btn>
              </v-col>
              <v-col cols="6" md="3">
                <v-btn @click="$router.push({name:'DistribuiçõesEProdutos'})"  text>Distribuições</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
 export default {
  name:"Home",
  data(){
    return{
      
    }
  }
 }
</script>