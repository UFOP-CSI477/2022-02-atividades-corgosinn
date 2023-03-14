<template>
  <v-container fluid>
    <RateFormScreen></RateFormScreen>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',

    components: {
      RateFormScreen:() => import("@/components/rating/RateFormScreen.vue")
    },
  }
</script>
