<template>
  <div>
    <router-view v-on="$listeners"></router-view>
    <v-row>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <MidiaCard @onDelete="handleOnDelete" :text_card="text_card" :midia="selectMidia"></MidiaCard>
      </v-col>
      <v-col cols="12" md="6">
        <MidiaGrid @selectItem="handleSelectItem" :loading="loading_midias" :midias="midias" class="pa-2"></MidiaGrid>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import Api from "@/api/index"

  export default{
    name:"Homescreen",
    components:{
      MidiaCard: () => import("@/components/shared/MidiaCard.vue"),
      MidiaGrid: () => import("@/components/home/MidiaGrid.vue")
    },
    data(){
      return{
        midias: [],
        loading_midias:false,
        selected_item: null,
      }
    },
    methods:{
      getData(){
        this.getMidias()
      },
      getMidias(){
        this.loading_midias = true
        let filter = {user_id: this.active_user_id }
        Api.Midia.index( filter ).then(r => {
          this.midias = [...r.data]
        }).finally(()=>{
          this.loading_midias = false
        })
      },
      handleSelectItem(item){
        this.selected_item =  item
      },
      handleOnDelete(){
        this.selected_item = null
        this.getMidias()
      }
    },
    computed:{
      selectMidia(){
        if(this.selected_item){
          return this.selected_item
        }else{
          return this.midias.length > 0 ? this.midias[this.midias.length - 1] : undefined

        }
      },
      text_card(){
        if(this.selected_item){
          return "Item selecionado"
        }else{
          return
        }
      },
      ...mapState({
        active_user_id: state => state.active_user
      })
    },
    mounted(){
      this.getData()
    },
    watch:{
      active_user_id(nv){
        this.getData()
      }
    }
  }
</script>