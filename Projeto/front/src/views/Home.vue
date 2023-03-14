<template>
  <v-container fluid>
    <Homescreen></Homescreen>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',

    components: {
      Homescreen: () => import("@/components/home/Homescreen.vue")
    },
  }
</script>
