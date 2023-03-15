<template>
  <v-container>
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