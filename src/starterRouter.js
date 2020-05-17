import Vue from 'vue';
import Router from 'vue-router';
import Starter from './pages/StarterPage.vue';
import StarterNavbar from './layout/StarterNavbar.vue';
import StarterFooter from './layout/StarterFooter.vue';
import Live from './pages/LivePage.vue';
import LiveNavbar from './layout/LiveNavbar.vue';
import VueYoutube from 'vue-youtube'
import UIkit from "uikit";
import data from "./pages/data.vue";
import signin from "./pages/signin.vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(Router, VueYoutube, UIkit);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'starter',
      components: {
        default: Live,
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
      path: '/signin',
      name: 'signin',
      components: {
        default: signin,
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
      path: '/data',
      name: 'data',
      components: {
        default: data,
        header: LiveNavbar,
        // header: StarterNavbar,
        footer: StarterFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' },
        
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/live',
      name: 'live',
      components: {
        default: Starter,
        header: LiveNavbar,
        footer: StarterFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
//   scrollBehavior(to, from, savedPosition) {
//     if (to.hash) {
//         // Use for direct jump.
//         //window.location.href = to.hash;
//         // Use VueScrollTo for animation.
//         VueScrollTo.scrollTo(to.hash, 700);
//         return { selector: to.hash }
//     } else if (savedPosition) {
//         return savedPosition;
//     } else {
//         return { x: 0, y: 0 }
//     }
// }
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth;
  });

  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;