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
      {
        path: 'locais/delete/:id',
        name: 'DeleteLocais',
        component: ()=> import("@/components/shared/DialogDeleteItem.vue")
      },
      {
        path: 'unidades/delete/:id',
        name: 'DeleteUnidades',
        component: ()=> import("@/components/shared/DialogDeleteItem.vue")
      },
      {
        path: 'locais/:id',
        name: 'EditLocais',
        component: ()=> import("@/components/unidades_e_locais/register/DialogAddLocais.vue")
      },
      {
        path: 'unidades/:id',
        name: 'EditUnidades',
        component: ()=> import("@/components/unidades_e_locais/register/DialogAddUnidades.vue")
      },
    ]
  },
]