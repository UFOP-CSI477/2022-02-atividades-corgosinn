export default [
  {
    path: '/unidades_e_locais',
    name: 'Unidades e Locais',
    component: ()=> import("@/views/UnidadesELocais.vue"),
    children:[
      {
        path: 'locais/add',
        name: 'AddLocais',
        component: ()=> import("@/components/unidades_e_locais/register/DialogAddLocais.vue")
      },
      {
        path: 'unidades/add',
        name: 'AddUnidades',
        component: ()=> import("@/components/unidades_e_locais/register/DialogAddUnidades.vue")
      },
    ]
  },
]