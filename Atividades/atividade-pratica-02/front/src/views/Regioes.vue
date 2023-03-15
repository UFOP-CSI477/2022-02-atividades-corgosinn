<template>
  <v-container>
    <RegioesScreen></RegioesScreen>
  </v-container>
</template>

<script>
 export default {
  name:"Regioes",
  components:{
    RegioesScreen: () => import("@/components/regioes/RegioesScreen.vue")
  },
  data(){
    return{
      
    }
  }
 }
</script>