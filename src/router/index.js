import Vue from 'vue'
import Router from 'vue-router'
import Startup from '@/components/startup/Startup'
import Home from '@/components/home/Home'
import Read from '@/components/read/Read'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Startup',
      component: Startup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    }
  ]
})
