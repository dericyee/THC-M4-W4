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
    component: About,
  },
  {
    path: '/page-one/:id',
    name: 'PageOne',
    // component: PageOne
    component: () => import( /* webpackChunkName: "PageOne" */ '../views/PageOne.vue')
  },
  {
    path: '/page-two',
    // component: PageTwo
    component: () => import( /* webpackChunkName: "PageTwo" */ '../views/PageTwo.vue'),
    children: [{
        path: '',
        name: 'PageTwo',
        component: () => import( /* webpackChunkName: "PageTwoMenu" */ '../views/PageTwoMenu.vue')
      },
      {
        path: 'a',
        name: 'PageTwoA',
        component: () => import( /* webpackChunkName: "PageTwoA" */ '../views/PageTwo/PageTwoA.vue')
      },
      {
        path: 'b',
        name: 'PageTwoB',
        component: () => import( /* webpackChunkName: "PageTwoA" */ '../views/PageTwo/PageTwoB.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router