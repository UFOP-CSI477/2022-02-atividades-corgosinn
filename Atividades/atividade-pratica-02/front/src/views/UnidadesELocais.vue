<template>
  <v-container fluid>
    <UnidadesELocaisScreen></UnidadesELocaisScreen>
  </v-container>
</template>

<script>
 export default {
  name:"UnidadesELocais",
  components:{
    UnidadesELocaisScreen: () => import("@/components/unidades_e_locais/UnidadesELocaisScreen.vue")
  },
  data(){
    return{
      
    }
  }
 }
</script>