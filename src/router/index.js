import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home/index'
import Categories from '../components/Categories/index'
import My from '../components/My/index'
import UserInfo from '../components/My/UserInfo'
import Paycart from '../components/Paycart/index'
import Products from '../components/Products/index'
import Product from '../components/Products/Product'
import Orders from '../components/Orders/index'
import Tab from '../components/Tab'
import ConfirmOrder from '../components/Orders/ConfirmOrder'
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
    {
        path: '/Paycart',
        name: 'Paycart',
        component: Paycart
    },
    {
        path:'/Products',
        name: 'Products',
        component: Products
    },
    {
        path:'/Product',
        name: 'Product',
        component: Product
    },
    {
        path:'/UserInfo',
        name: 'UserInfo',
        component: UserInfo
    },
    {
        path:'/Orders',
        name: 'Orders',
        component: Orders
    },
    {
        path:'/ConfirmOrder',
        name: 'ConfirmOrder',
        component: ConfirmOrder
    },
  ]
})
