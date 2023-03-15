export default [
  {
    path: '/doacoes',
    name: 'Doações',
    component: ()=> import("@/views/Doacoes.vue"),
    children:[
      {
        path: 'add',
        name: 'AddDoacoes',
        component: ()=> import("@/components/doacoes/register/DialogAddDoacoes.vue")
      },
    ]
  },
]