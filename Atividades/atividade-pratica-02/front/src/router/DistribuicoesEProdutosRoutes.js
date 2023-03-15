export default [
  {
    path: '/distribuicoes',
    name: 'DistribuiçõesEProdutos',
    component: ()=> import("@/views/DistribuicoesEProdutos.vue"),
    children:[
      {
        path: 'produtos/add',
        name: 'AddProdutos',
        component: ()=> import("@/components/distribuicoes_e_produtos/register/DialogAddProdutos.vue")
      },
      {
        path: 'distribuicoes/add',
        name: 'AddDistribuicoes',
        component: ()=> import("@/components/distribuicoes_e_produtos/register/DialogAddDistribuicoes.vue")
      },
      {
        path: 'produtos/:id',
        name: 'EditProdutos',
        component: ()=> import("@/components/distribuicoes_e_produtos/register/DialogAddProdutos.vue")
      },
      {
        path: 'distribuicoes/:id',
        name: 'EditDistribuicoes',
        component: ()=> import("@/components/distribuicoes_e_produtos/register/DialogAddDistribuicoes.vue")
      },
    ]
  },
]