
<template>
  <navbar position="fixed" type="primary" menu-classes="ml-auto">
    <template>


      <!-- <anchor-router-link
        class="navbar-brand"
        :to="{name: 'starter', hash: '#header'}"
        :scrollOptions="scrollOptions"
      ><img class="logo-men" src="/img2/logo-vt-s.png"></anchor-router-link> -->
      <anchor-router-link
        class="navbar-brand logo"
        :to="{name: 'starter', hash: '#header'}"
        :scrollOptions="scrollOptions"
      >IL FESTIVAL DELL'AMORE 2020</anchor-router-link>

 
    </template>
    <template slot="navbar-menu">
      <li class="nav-item hover">
        <anchor-router-link
        style="text-decoration:underline"
          v-if="!liv"
          class="navbar-brand nav-link"
          :to="{name: 'starter', hash: '#manifesto'}"
          :scrollOptions="scrollOptions"
        >DIRETTA</anchor-router-link>

      </li>
      <li class="nav-item hover">
        <anchor-router-link
          class="navbar-brand nav-link"
          :to="{name: 'starter', hash: '#palinsesto'}"
          :scrollOptions="scrollOptions"
        >Programma</anchor-router-link>
      </li>
      <li class="nav-item hover">
        <anchor-router-link
          class="navbar-brand nav-link"
          :to="{name: 'starter', hash: '#partner'}"
          :scrollOptions="scrollOptions"
        >Partner</anchor-router-link>
      </li>
     <li class="nav-item hover"></li>
      <li class="nav-item hover">
        <a class="nav-link" href="https://www.linkedin.com/company/venturethinking/">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li class="nav-item hover">
        <a class="nav-link" href="https://www.facebook.com/venturethinkingitalia">
          <i class="fab fa-facebook"></i>
        </a>
      </li>
      <li class="nav-item hover">
        <a class="nav-link" href="https://www.youtube.com/channel/UCP8R6WbHCErZhvlEC-hmT_w">
          <i class="fab fa-youtube"></i>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import AnchorRouterLink from "vue-anchor-router-link";
var VueScrollTo = require('vue-scrollto');

export default {
  name: "main-navbar",
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover,
    AnchorRouterLink
  },
  data() {
    return {
      date: "",
      //newPcf:true,
      liv: false,
      scrollOptions: {
        container: "body",
        duration: 700,
        easing: "ease",
        offset: -110,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      }
    };
  },

  computed: {
    newPc() {
      return this.$store.getters.newPc;
      // return store.getters.newPc
    }
  },
  methods: {
    toggleMan() {
      this.$store.commit("toggleMan");
    },

    // mounted(){
    //   const newPc = this.$store.getters.newPc;
    // }

    //  methods:{

    //   toggleDate: function() {
    //       this.newPcf = !this.newPcf;
    //       //console.log(this.newPcf)
    //     },
    //     cancelAutoUdate: function() {
    //       clearInterval(this.timer);
    //     },

    // checkTime: function() {
    //   this.ora = new Date();
    //   var star = new Date(this.date);
    //   if (star - this.ora < 0) {
    //     this.liv = true;
    //     this.cancelAutoUdate();
    //     //toggleLive();
    //   } else {
    //     this.liv = false;
    //   }
    //   // console.log(this.ora - star + " | " + this.live);
    //   // console.log(this.ora);
    // }


  },


  beforeMount() {
    // var now = new Date();
    // var sta = new Date("4 April 2020 10:00:00 GMT+0200");
    // this.date = sta;
    // if (sta - now > 0) {
    //   this.liv = false;
    //   if (sta - now < 3600000) {
    //     this.timer = setInterval(this.checkTime, 10000);
    //   }
    //   // console.log((sta - now) + " | dai oh | "+((sta - now) < 3600000))
    // } else {
    //   this.liv = true;
    // }
  },
  mounted() {
    this.show = true;

    //       //  var now = new Date();
    //       //  var sta = new Date("21 March 2020 03:015:00 GMT+0100");
    //       //  if((sta-now)>0){
    //       //    toggleDarkMode()
    //       //    console.log("DAJE")
    //       //  }
  },

  // beforeDestroy() {
  //   clearInterval(this.timer);
  // }

  //       checkTime: function(){
  //         this.ora = new Date();
  //         var star = new Date("21 March 2020 2020 09:00:00 GMT+0100");
  //         if((star-this.ora)<0){
  //           this.live=true;
  //           this.cancelAutoUdate();
  //           // document.reload();
  //           //toggleLive();
  //         } else {
  //           this.live=false }
  //         //console.log((this.ora-star) + " | " +this.live);
  //         //console.log(this.ora);
  //       },

  //     // toggleLive() {
  //     //   this.$store.commit("toggleLive");
  //     // }
  //   },

  //   // computed: {
  //   //   Live() {
  //   //     return this.$store.getters.Live;
  //   //   }
  //   // },

  //       beforeMount(){
  //         //console.log("DAJE")
  //          var now = new Date();
  //          var sta = new Date("21 March 2020 09:00:00 GMT+0100");
  //          if((sta-now)>0){
  //            this.live=false
  //           this.timer = setInterval(this.checkTime, 10000);
  //          } else { this.live=true}
  //       },
  //       mounted(){
  //         //  var now = new Date();
  //         //  var sta = new Date("21 March 2020 03:015:00 GMT+0100");
  //         //  if((sta-now)>0){
  //         //    toggleDarkMode()
  //         //    console.log("DAJE")
  //         //  }
  //       },

  //    beforeDestroy(){
  //      cancelAutoUdate();
  //    }
};
</script>

<style scoped>
.logo-men{
  width:130px;
  /* cazzo */
}

.navbar-brand{
  font-family: Open Sans;
  font-weight: 400;
  
}

.logo{
  font-family: Open Sans Condensed;
  font-weight: 700;
  font-size: 18px !important;
  
  
}

@media screen and (max-width: 1025px) {
  .logo-men{
  width:100px;
}


}
</style>
