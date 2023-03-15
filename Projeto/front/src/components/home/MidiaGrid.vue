<template>
  <div>
    <span class="d-flex justify-center title font-weight-light">Todas as mídias</span>
    <v-text-field v-model="search" solo prepend-inner-icon="mdi-magnify" label="Pesquisar"></v-text-field>
    <v-data-iterator v-if="!loading" :items-per-page="5" :items="midias" :search="search">
      <template v-slot:no-data>
        <div class="d-flex justify-center flex-column">
          <v-icon size="50">mdi-file-document-alert</v-icon>
          <span class="text-center">Sem avaliações cadastradas com este usuário</span>
        </div>
      </template>
      <template v-slot:default="props">
        <v-row>
          <v-col cols="6" md="4" v-for="item in props.items" :key="item.title">
            <v-card @click="selectItem(item)" style="cursor:pointer;">
              <v-card-text>
                <v-sheet width="100%" :height="'200px'" class="ma-auto ">
                  <v-img height="200px" :src="item.image_url" v-if="item.image_url && item.image_url.length > 10"></v-img>
                  <v-sheet v-if="!item.image_url || item.image_url.length < 10" class="d-flex justify-center align-center primary darken-2" height="100%">
                    <v-icon size="30px" color="white">mdi-image</v-icon>
                  </v-sheet>
                </v-sheet>
                <span class="d-flex justify-center mt-2 font-weight-bold">{{ item.title }}</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <div v-if="loading" class="d-flex justify-center align-center">
      <v-progress-circular
      indeterminate
      color="primary"
      size="300"
    ></v-progress-circular>
    </div>
  </div>
</template>

<script>

  export default{
    name:"MidiaGrid",
    props:{
      midias:{
        type:Array,
        default: ()=> { return [] }
      },
      loading:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        search:"",
      }
    },
    methods:{
      selectItem(item){
        this.$emit("selectItem",item)
        
      }
    }
    
  }
</script>