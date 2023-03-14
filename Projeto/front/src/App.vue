<template>
  <v-app>
    <Header></Header>
    <DialogRegisterUser v-if="noUsers" @onCreate="handleCreateUser"></DialogRegisterUser>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'
import Api from "@/api/index"

export default {
  name: 'App',
  components:{
    Header: () => import("@/components/__header.vue"),
    DialogRegisterUser: () => import("@/components/user/register/DialogRegisterUser.vue")
  },
  data: () => ({
    loading_users:false,
    dialog_create_user:true
  }),
  methods:{
    getData(){

      this.getUsers()
    },
    getUsers(){
      let id = localStorage.getItem("active_user")
      if(id){
        this.setActiveUser(id)
      }
      this.loading_users = true
      Api.User.index().then(r => {
        this.setUsers([...r.data])
      }).finally(()=>{
        this.loading_users = false
      })
      
    },
    handleCreateUser(id){
      this.setActiveUser(id)
      this.getUsers()
    },
    ...mapActions(["setUsers","setActiveUser"])
  },
  computed:{
    ...mapGetters([
      'users_length',
    ]),
    noUsers(){
      return this.users_length == 0 ? true : false
    },
  },
  mounted(){
    this.getData()
  }
};
</script>
