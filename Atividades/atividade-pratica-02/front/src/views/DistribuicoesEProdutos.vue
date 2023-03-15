<template>
  <v-container>
    <DistribuicoesScreen></DistribuicoesScreen>
  </v-container>
</template>

<script>
 export default {
  name:"DistribuicoesEProdutos",
  components:{
    DistribuicoesScreen: () => import("@/components/distribuicoes_e_produtos/DistribuiçõesEProdutosScreen.vue")
  },
  data(){
    return{
      
    }
  }
 }
</script>