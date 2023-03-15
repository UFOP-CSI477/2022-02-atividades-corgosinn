<template>
  <div>
    <span class="d-flex justify-center title font-weight-light">Todas as mídias</span>
    <v-text-field v-model="search" solo prepend-inner-icon="mdi-magnify" label="Pesquisar"></v-text-field>
    <v-data-iterator :items-per-page="5" :items="midias" :search="search">
      <template v-slot:default="props">
        <v-row>
          <v-col cols="6" md="4" v-for="item in props.items" :key="item.title">
            <v-card>
              <v-card-text>
                <v-sheet width="100%" height="200" ></v-sheet>
                <span class="d-flex justify-center mt-2">{{ item.title }}</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </div>
</template>

<script>
  import Api from "@/api/index"
  import { mapState } from "vuex"
  export default{
    name:"MidiaGrid",
    data(){
      return{
        search:"",
        midias: [],
        loading_midias:false
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
      }
    },
    computed:{
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