import Vue from 'vue';
import Router from 'vue-router';
import Starter from './pages/StarterPage.vue';
import StarterNavbar from './layout/StarterNavbar.vue';
import StarterFooter from './layout/StarterFooter.vue';
import Live from './pages/LivePage.vue';
import LiveNavbar from './layout/LiveNavbar.vue';

Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'starter',
      components: {
        default: Starter,
        header: LiveNavbar,
        // header: StarterNavbar,
        footer: StarterFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' },
        
      }
    },
    {
      path: '/live',
      name: 'live',
      components: {
        default: Live,
        header: LiveNavbar,
        footer: StarterFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        // Use for direct jump.
        //window.location.href = to.hash;
        // Use VueScrollTo for animation.
        VueScrollTo.scrollTo(to.hash, 700);
        return { selector: to.hash }
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 }
    }
}
});
