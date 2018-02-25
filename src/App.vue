<style type="text/css">
    @import './css/index.css'
</style>
<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import Vue from 'vue';
import {Layout} from 'vue-ydui/dist/lib.px/layout';
Vue.component(Layout.name, Layout);

export default {
  name: 'App'
}
</script>
<style>
  /*#app:{
    height:window.height;
  }*/
</style>