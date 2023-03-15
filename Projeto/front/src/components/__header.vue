<template>
  <div>
    <v-app-bar height="70" class="primary" app>
      <div class="d-flex align-center">
        <v-avatar size="45" class="grey lighten-4 ml-5">
          <v-icon>mdi-account</v-icon>
        </v-avatar>
        <span class="ml-2 white--text title font-weight-bold" v-if="active_user">Olá, {{active_user.name}}</span>
        <span class="ml-2 white--text title font-weight-bold" v-if="!active_user">Cadastre um usuário</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="$router.push({name:'Home'})" text color="white"><v-icon class="mr-1">mdi-home</v-icon>Inicio</v-btn>
      <v-btn @click="$router.push({name:'AddRate'})" text color="white"><v-icon class="mr-1">mdi-plus-thick</v-icon> Adicionar avaliação</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn v-on="on" v-bind="attrs" text color="white"><v-icon class="mr-1">mdi-rotate-right</v-icon> Trocar usuário</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in users"
            :key="item"
            link
            @click="changeUser(item)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="$router.push({name:'CreateUser'})">
            <v-list-item-title>
              <v-btn color="success" text>Criar usuário</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-app-bar>
  </div>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex';
  export default{
    name:"Header",
    data(){
      return {

      }
    },
    methods:{
      changeUser(user){
        this.setActiveUser(user.id)
        this.$router.push({name:"Home"})
      },
      ...mapActions(["setActiveUser"])
    },
    computed:{
      ...mapGetters([
        "active_user"
      ]),
      ...mapState({
        users: state => state.users
      })
    },
    mounted(){
    }
  }
</script>