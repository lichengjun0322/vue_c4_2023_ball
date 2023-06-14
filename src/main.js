import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vuerouter from "vue-router";
import router from "./router/index.js"
import VueCoreVideoPlayer from 'vue-core-video-player'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueCoreVideoPlayer)


Vue.config.productionTip = false
Vue.use(Vuerouter);
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router:router,

}).$mount('#app')
