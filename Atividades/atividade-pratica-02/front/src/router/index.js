import Vue from 'vue'
import VueRouter from 'vue-router'
import DistribuicoesEProdutosRoutes from './DistribuicoesEProdutosRoutes'
import DoacoesRoutes from './DoacoesETiposSanguiniosRoutes'
import PessoasRoutes from './PessoasRoutes'
import RegiaoRoutes from './RegiaoRoutes'
import UnidadeELocaisRoutes from './UnidadeELocaisRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import("@/views/Home.vue")
  },
  ...DistribuicoesEProdutosRoutes,
  ...DoacoesRoutes,
  ...PessoasRoutes,
  ...RegiaoRoutes,
  ...UnidadeELocaisRoutes

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
