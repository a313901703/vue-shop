// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.px.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(YDUI)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        isLoading: false,
        routerIndex:0,
    },
    mutations: {
        updateLoadingStatus(state, isLoading) {
            state.isLoading = isLoading;
        }
    }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.routers = function(name,params={}){
  this.$store.state.routerIndex += 1;
  console.log(this.$store.state.routerIndex)
  this.$router.push({name,params})
}

Vue.prototype.replaceRouter = function(name,params={}){
  this.$store.state.routerIndex = 0;
  this.$router.replace({name,params})
}

Vue.prototype.goback = function(){
  this.$store.state.routerIndex -= 1;
  this.$router.go(-1);
}

router.beforeEach((route, redirect, next) => {
    /* 显示加载中动画 */
    if (router.app.$dialog) {
        router.app.$dialog.loading.open('加载中')
    }
    store.commit('updateLoadingStatus', true);
    next();
});

router.afterEach(route => {
    /* 隐藏加载中动画 */
    if (router.app.$dialog) {
        router.app.$dialog.loading.close()
    }
    store.commit('updateLoadingStatus', false);
});
