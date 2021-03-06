import Vue from 'vue'
import VueRouter from 'vue-router'


// import Login from '../views/Login.vue'
const Login = () => import(/* webpackChunkName:"login_home_welcome" */ '../views/Login.vue')


// import Home from '../views/Home.vue'
const Home = () => import(/* webpackChunkName:"login_home_welcome" */ '../views/Home.vue')

// import Welcome from '../views/Welcome.vue'
const Welcome = () => import(/* webpackChunkName:"login_home_welcome" */ '../views/Welcome.vue')

// import Users from '../views/user/Users.vue'
const Users = () => import(/* webpackChunkName:"user" */ '../views/user/Users.vue')

// import Rights from '../views/power/Rights.vue'
const Rights = () => import(/* webpackChunkName:"power" */ '../views/power/Rights.vue')

// import Roles from '../views/power/Roles.vue'
const Roles = () => import(/* webpackChunkName:"power" */ '../views/power/Roles.vue')

// import Cate from '../views/goods/Cate.vue'
const Cate = () => import(/* webpackChunkName:"goods" */ '../views/goods/Cate.vue')

// import Params from '../views/goods/Params.vue'
const Params = () => import(/* webpackChunkName:"goods" */ '../views/goods/Params.vue')

// import List from '../views/goods/List.vue'
const List = () => import(/* webpackChunkName:"goods" */ '../views/goods/List.vue')

// import Add from '../views/goods/Add.vue'
const Add = () => import(/* webpackChunkName:"goods" */ '../views/goods/Add.vue')

// import Order from '../views/order/Order.vue'
const Order = () => import(/* webpackChunkName:"order" */ '../views/order/Order.vue')

// import Report from '../views/report/Report.vue'
const Report = () => import(/* webpackChunkName:"report" */ '../views/report/Report.vue')


Vue.use(VueRouter)


const routes = [
  { path: '/', redirect: '/login' }, //路由重定向
  { path: '/login', component: Login },
  {
    path: '/home', component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cate },
      { path: '/params', component: Params },
      { path: '/goods', component: List },
      { path: '/goods/add', component: Add },
      { path: '/orders', component: Order },
      { path: '/reports', component: Report },
    ]
  },
]


const router = new VueRouter({
  routes
})


// 挂载路由导航守卫  在路由后面
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    return next();
  }
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    return next("/login")
  }
  next()
})


export default router
