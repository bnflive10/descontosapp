
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/dial2', component: () => import('pages/dialPage2.vue') },
      { path: '/dial3', component: () => import('pages/dialPage3.vue') },
      { path: '/calcular4', component: () => import('pages/calcularPage4.vue') },
      { path: '/parabens5', component: () => import('pages/parabensPage5.vue') },
      { path: '/pay6', component: () => import('pages/payPage6.vue') },
      { path: '/transfer7', component: () => import('pages/transferPage7.vue') }
    ]
    
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
