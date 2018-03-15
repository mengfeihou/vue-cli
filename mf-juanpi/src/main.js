// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.config.productionTip = false

<<<<<<< HEAD
Vue.use(MintUI)
=======
Vue.use(MintUI);
>>>>>>> 8a02337dd509237af8f49978f2d10bbefbd95f91

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
