export default {
  name: 'auth',
  component: () => import(/* webpackChunkName: "daybook" */ '@/modules/auth/layouts/AuthLayout.vue'),
  children: [
    {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/components/Login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '@/modules/auth/components/Register.vue')
      },
  ]
}