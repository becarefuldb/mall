import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 解决重复点击组件，路由重复报错的问题 （push）
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// 解决重复点击组件，路由重复报错的问题 （replace）
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

const Home= ()=>import('views/home/home.vue')
const Profile= ()=>import('views/profile/profile.vue')
const Shopcart= ()=>import('views/shopcart/shopcart.vue')
const Category= ()=>import('views/category/category.vue')



const routes= [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  }
]

export default new Router({
  routes,
  mode:'history'
})
