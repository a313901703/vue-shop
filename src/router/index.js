import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home/index'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path:'/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    }
  ]
})
