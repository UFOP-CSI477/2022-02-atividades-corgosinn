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
    ]
  },
]