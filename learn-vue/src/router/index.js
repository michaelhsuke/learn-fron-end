import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Father from '@/components/Father';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Father',
      component: Father,
    },
  ],
});
