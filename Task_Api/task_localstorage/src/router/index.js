import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import reg_form from '../components/Reg_form.vue'
import login from '../components/login.vue'


const routes = [
    {
        path:'/',
        name:'Registration page',
        component: reg_form,
    },
    {
        path:'/login',
        name:'login page',
        component: login,
    },
    
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: (route) => ({ user: route.params.user }),
    },
    
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router