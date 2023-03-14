<template>
  <div>
    {{ midia }}
    <v-row>
      <v-col cols="12" md="6">
        <RateForm :midia="midia" @resetMidia="handleResetMidia" class="pa-10"></RateForm>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <MidiaCard :midia="midia"></MidiaCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default{
    name:"RateFormScreen",
    components:{
      MidiaCard: () => import("@/components/shared/MidiaCard.vue"),
      RateForm: () => import("@/components/rating/register/RateForm.vue")
    },
    data(){
      return{
        midia:{}
      }
    },
    methods:{
      handleResetMidia(){
        this.midia = {}
      }
    }
  }
</script>