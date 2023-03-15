<template>
  <v-container>
    <DoacoesScreen></DoacoesScreen>
  </v-container>
</template>

<script>
 export default {
  name:"Doacoes",
  components:{
    DoacoesScreen: () => import("@/components/doacoes_e_tipos_sanguinios/DoacoesETiposSanguiniosScreen.vue")
  },
  data(){
    return{
      
    }
  }
 }
</script>