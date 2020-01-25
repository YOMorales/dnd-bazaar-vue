import Vue from 'vue';
import App from './App.vue';

require('./assets/css/app.scss');

// set this to false to prevent the production tip on Vue startup
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#container_app');
