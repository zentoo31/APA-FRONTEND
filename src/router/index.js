import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/LoginView.vue')
  },
  {
    path: '/RegistrarPersonal',
    name: 'RegistrarPersonalView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrarPersonal/RegistrarPersonalView.vue')
  },
  {
    path: '/RecuperarCuenta',
    name: 'RecuperarCuentaView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RecuperarCuenta/RecuperarCuentaView.vue')
  },
  {
    path: '/ValidarCodigo',
    name: 'ValidarCodigoView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ValidarCodigo/ValidarCodigoView.vue')
  },
  {
    path: '/RestablecerContrasena',
    name: 'RestablecerContraseñaView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestablecerContraseña/RestablecerContraseñaView.vue')
  },
  {
    path: '/Menu',
    name: 'MenuView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu/MenuView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/ReporteGeneral',
    name: 'ReporteGeneralView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReporteGeneral/ReporteGeneralView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/ReportePersonalizado',
    name: 'ReportePersonalizadoView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReportePersonalizado/ReportePersonalizadoView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/InfoEstudiante',
    name: 'InfoEstudianteView',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoEstudiante/InfoEstudianteView.vue'),
    /*meta: { requiresAuth: true }*/
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Guardia de navegación global xd
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('IdPersonal');
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    // Si la ruta requiere autenticación y el usuario no está autenticado, redirige al login
    next({ name: 'LoginView' });
  } else {
    next(); // De lo contrario, permite la navegación
  }
});

export default router;
