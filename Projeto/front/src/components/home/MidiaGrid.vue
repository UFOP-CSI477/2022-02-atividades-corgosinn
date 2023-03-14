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
  export default{
    name:"MidiaGrid",
    data(){
      return{
        search:"",
        midias: [
          { title:"Teste" },
          { title:"Banaca" },
          { title:"Bacon" },
          { title:"Sorvete" },
          { title:"Igloo" },
          { title:"Palito" },
          { title:"Uva" },
          { title:"Weverton" },
          { title:"Teste" },
          { title:"Teste" },
          { title:"Teste" },
        ],
      }
    }
  }
</script>