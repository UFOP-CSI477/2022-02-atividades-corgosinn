<template>
  <v-container fluid>
    <DoacoesScreen></DoacoesScreen>
  </v-container>
</template>

<script>
 export default {
  name:"Doacoes",
  components:{
    DoacoesScreen: () => import("@/components/doacoes/DoacoesScreen.vue")
  },
  data(){
    return{
      
    }
  }
 }
</script>