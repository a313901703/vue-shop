import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home/index'
import Categories from '../components/Categories/index'
import My from '../components/My/index'
Vue.use(Router)

export default new Router({
    routes: [
    {
        path:'/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/Categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/My',
        name: 'My',
        component: My
    },
  ]
})
