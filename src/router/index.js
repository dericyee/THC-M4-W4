import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import PageOne from '../views/PageOne.vue'
// import PageTwo from '../views/PageTwo.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/page-one/:id',
    name: 'PageOne',
    // component: PageOne
    component: () => import( /* webpackChunkName: "PageOne" */ '../views/PageOne.vue')
  },
  {
    path: '/page-two',
    name: 'PageTwo',
    // component: PageTwo
    component: () => import( /* webpackChunkName: "PageTwo" */ '../views/PageTwo.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router