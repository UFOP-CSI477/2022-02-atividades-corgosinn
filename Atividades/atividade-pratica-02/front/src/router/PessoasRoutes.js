export default [
  {
    path: '/pessoas',
    name: 'Pessoas',
    component: ()=> import("@/views/Pessoas.vue"),
    children:[
      {
        path: 'add',
        name: 'AddPessoas',
        component: ()=> import("@/components/pessoas/register/DialogAddPessoas.vue")
      },
    ]
  },
]