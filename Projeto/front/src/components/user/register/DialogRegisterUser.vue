<template>
  <v-dialog v-model="dialog_create_user" persistent max-width="600px">
    <v-card>
      <v-card-title class="d-flex justify-center">
        Criar novo usuário
        <v-spacer></v-spacer>
        <v-btn icon v-if="!noUsers" @click="$router.push({name:'Home'})">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="d-flex justify-center">
          <v-sheet width="100%">
            <v-text-field v-model="user.name" prepend-inner-icon="mdi-account-plus" filled label="Nome do usuário"></v-text-field>
            <div class="d-flex justify-center">
              <v-btn @click="postUser" text color="success">Criar</v-btn>
            </div>
          </v-sheet>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Api from "@/api/index"
import { mapGetters } from "vuex"
export default{
  name:"DIalogRegisterUser",
  data(){
    return{
      user: { name: "" },
      dialog_create_user: true,
      saving:false
    }
  },
  methods:{
    postUser(){
      if(this.user.name.length > 0){
        this.saving = true
        Api.User.create(this.user).then(r => {
          this.$emit("onCreate",r.data.id)
          this.$router.push({name:"Home"})
        }).finally(()=>{
          this.saving = false
        })
      }
    }
  },
  computed:{
    ...mapGetters([
      'users_length',
    ]),
    noUsers(){
      return this.users_length == 0 ? true : false
    },
  }
}
</script>