export default [
  {
    path: '/regioes',
    name: 'Regiões',
    component: ()=> import("@/views/Regioes.vue"),
    children:[
      {
        path: 'estados/add',
        name: 'AddEstados',
        component: ()=> import("@/components/regioes/register/DialogAddEstados.vue")
      },
      {
        path: 'cidades/add',
        name: 'AddCidades',
        component: ()=> import("@/components/regioes/register/DialogAddCidades.vue")
      },
    ]
  },
]