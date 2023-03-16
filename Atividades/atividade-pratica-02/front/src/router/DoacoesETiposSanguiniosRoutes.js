export default [
  {
    path: '/doacoes_e_tipos_sanguinios',
    name: 'DoacoesETiposSanguinios',
    component: ()=> import("@/views/DoacoesETiposSanguinios.vue"),
    children:[
      {
        path: 'doacoes/add',
        name: 'AddDoacoes',
        component: ()=> import("@/components/doacoes_e_tipos_sanguinios/register/DialogAddDoacoes.vue")
      },
      {
        path: 'tipos_sanguinios/add',
        name: 'AddTipoSanguinio',
        component: ()=> import("@/components/doacoes_e_tipos_sanguinios/register/DialogAddTiposSanguinios.vue")
      },
      {
        path: 'doacoes/delete/:id',
        name: 'DeleteDoacoes',
        component: ()=> import("@/components/shared/DialogDeleteItem.vue")
      },
      {
        path: 'tipos_sanguinios/delete/:id',
        name: 'DeleteTipoSanguinio',
        component: ()=> import("@/components/shared/DialogDeleteItem.vue")
      },
      {
        path: 'doacoes/:id',
        name: 'EditDoacoes',
        component: ()=> import("@/components/doacoes_e_tipos_sanguinios/register/DialogAddDoacoes.vue")
      },
      {
        path: 'tipos_sanguinios/:id',
        name: 'EditTipoSanguinio',
        component: ()=> import("@/components/doacoes_e_tipos_sanguinios/register/DialogAddTiposSanguinios.vue")
      },
    ]
  },
]