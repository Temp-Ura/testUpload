<template>
  <navbar position="fixed" type="warning"   menu-classes="ml-auto">
    <template>
      <!--<a class="navbar-brand" href="#">
        PRENDIAMOLA CON FILOSOFIA 
      </a>-->
      <anchor-router-link class="navbar-brand" :to="{name: 'starter', hash: ''}" :scrollOptions="scrollOptions">PRENDIAMOLA CON FILOSOFIA </anchor-router-link>
      <!--<a class="navbar-brand" href="#">
        
      </a>-->
      <!--<el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover>-->
    </template>
    <template slot="navbar-menu">
      <li class="nav-item hover">
           
             
             <anchor-router-link v-if="live === false" class="navbar-brand nav-link" :to="{name: 'starter', hash: '#manifesto'}" :scrollOptions="scrollOptions">Manifesto</anchor-router-link>
              <anchor-router-link v-if="live === true" style="text-decoration:underline; font-weight:700 " class="navbar-brand nav-link" :to="{name: 'starter', hash: '#manifesto'}" :scrollOptions="scrollOptions">Diretta</anchor-router-link>
         </li>
         <li class="nav-item hover">
           
             
             <anchor-router-link class="navbar-brand nav-link" :to="{name: 'starter', hash: '#palinsesto'}" :scrollOptions="scrollOptions">Programma</anchor-router-link>
           
         </li>
         <li class="nav-item hover">
           
             
             <anchor-router-link class="navbar-brand nav-link" :to="{name: 'starter', hash: '#partner'}" :scrollOptions="scrollOptions">Partner</anchor-router-link>
           
         </li>
         <li class="nav-item hover">
           
         </li>
         <li class="nav-item hover">
           <a class="nav-link" href="https://www.instagram.com/tlon.it/">
             <i class="fab fa-instagram"></i>
           </a>
         </li>
         <li class="nav-item hover">
           <a class="nav-link" href="https://www.facebook.com/associazionetlon/">
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
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
import AnchorRouterLink from 'vue-anchor-router-link'



export default {
  name: 'main-navbar',
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover,
    AnchorRouterLink
  },

  data(){
    return{
      date:"",
      newPcf:true,
      live:false,
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
    }
  },

 methods:{


  toggleDate: function() {
      this.newPcf = !this.newPcf;
      //console.log(this.newPcf)
    },
    cancelAutoUdate: function() {
      clearInterval(this.timer);
    },

    checkTime: function() {
      this.ora = new Date();
      var star = new Date(this.date);
      if (star - this.ora < 0) {
        this.live = true;
        this.cancelAutoUdate();
        //toggleLive();
      } else {
        this.live = false;
      }
      // console.log(this.ora - star + " | " + this.live);
      // console.log(this.ora);
    }

    //   // toggleLive() {
    //   //   this.$store.commit("toggleLive");
    //   // }
  },

  // // computed: {
  // //   Live() {
  // //     return this.$store.getters.Live;
  // //   }
  // // },

  beforeMount() {
    var now = new Date();
    var sta = new Date("4 April 2020 09:00:00 GMT+0200");
    this.date = sta;
    if (sta - now > 0 ) {
      this.live = false;
      if((sta - now) < 3600000){
      this.timer = setInterval(this.checkTime, 10000);
      }
      //console.log((sta - now) + " | dai oh | "+((sta - now) < 3600000))
      
    } else {
      this.live = true;
    }
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

  beforeDestroy() {
    clearInterval(this.timer);
  } 
//       cancelAutoUdate: function() {
//           clearInterval(this.timer);
//         },

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

<style scoped></style>
