<template>
  <v-container fluid>
    <PessoasScreen></PessoasScreen>
  </v-container>
</template>

<script>
 export default {
  name:"Pessoas",
  components:{
    PessoasScreen: () => import("@/components/pessoas/PessoasScreen.vue")
  },
  data(){
    return{
      
    }
  }
 }
</script>