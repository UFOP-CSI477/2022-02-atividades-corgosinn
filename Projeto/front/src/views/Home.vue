<template>
  <v-container fluid>
    <Homescreen v-on="$listeners"></Homescreen>
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
