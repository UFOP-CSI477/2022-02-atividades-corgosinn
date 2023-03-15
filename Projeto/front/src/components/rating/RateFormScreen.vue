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
  import { mapState } from 'vuex'
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
      getData(){
        this.midia.user_id = this.active_user_id
      },
      handleResetMidia(){
        this.midia = {}
      }
    },
    computed:{
      ...mapState({
        active_user_id: state => state.active_user
      }),
    },
    mounted(){
      this.getData()
    }
  }
</script>