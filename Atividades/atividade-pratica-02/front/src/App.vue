<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components:{
    Header: ()=> import("@/components/__header.vue")
  },
  data: () => ({
    //
  }),
};
</script>
