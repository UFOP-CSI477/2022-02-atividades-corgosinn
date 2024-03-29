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
      {
        path: 'delete/:id',
        name: 'DeletePessoas',
        component: ()=> import("@/components/shared/DialogDeleteItem.vue")
      },
      {
        path: ':id',
        name: 'EditPessoas',
        component: ()=> import("@/components/pessoas/register/DialogAddPessoas.vue")
      },
    ]
  },
]