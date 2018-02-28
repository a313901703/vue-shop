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
        isLoading: false
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
