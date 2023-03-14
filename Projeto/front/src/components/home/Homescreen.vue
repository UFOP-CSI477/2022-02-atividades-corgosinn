<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <MidiaCard></MidiaCard>
      </v-col>
      <v-col cols="12" md="6">
        <MidiaGrid class="pa-2"></MidiaGrid>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default{
    name:"Homescreen",
    components:{
      MidiaCard: () => import("@/components/shared/MidiaCard.vue"),
      MidiaGrid: () => import("@/components/home/MidiaGrid.vue")
    }
  }
</script>