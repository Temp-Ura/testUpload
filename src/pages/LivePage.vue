<template>
  
  <div class="starter-page">
    <div class="section text-center">
      <transition v-if="newPcf" name="slide-in-down" enter-active-class="animated slideInDown">
      <div @click="toggleDate" v-show="show" id="top"> Guarda l'edizione del 21 Marzo <img v-show="newPcf" class="freccia" src="/img2/freccia-dx.png"></div>
      </transition>
      <transition v-else name="slide-in-down" enter-active-class="animated slideInDown">
      <div @click="toggleDate" v-show="show" id="top-new"> <img v-show="!newPcf" class="freccia" src="/img2/freccia-sx.png"> Guarda l'edizione del 4 Aprile </div>
      </transition>

      <!-- <div style="position:relative; width:100vw; height: 47vw; border: 5px solid red;"> -->
      
      
      <!-- <div style="diplay:block"> -->
      <transition  style="" :name="newPcf ? 'slideRight': 'slideLeft'" mode="out-in" >
 
      <img style="" v-if="!live && newPcf" id="header" key="new" class="header-new" src="/img2/header_website_apr.jpg" alt="">
      <img v-else style=""  key="old" id="header" src="/img2/prendiamola-con-filosofia-header.jpg" alt="">

      </transition>
      <transition  style="" :name="newPcf ? 'slideRight': 'slideLeft'" mode="out-in" >
 
      <img v-if="!live && newPcf" id="header_mob" key="new" src="/img2/header_mobile_apr.jpg" alt="">
      <img v-else id="header_mob" key="old" src="/img2/prendiamola-con-filosofia_quadrato_s.jpg" alt="">

      </transition>
      <!-- </div> -->

       
      <!-- </div> -->

      <!-- <img v-show="!live && !newPcf" id="header" src="/img2/prendiamola-con-filosofia-header.jpg" alt="">
      <img v-if="!live && !newPcf" id="header_mob" src="/img2/prendiamola-con-filosofia_quadrato_s.jpg" alt="">
      <img v-show="!live && newPcf" id="header"  class="header-new" src="/img2/header_website_apr.jpg" alt="">
      <img v-if="!live && newPcf" id="header_mob" src="/img2/header_mobile_apr.jpg" alt=""> -->

      <img v-if="live" id="top-header" src="/img2/top-header_fase2.png" alt="">
      
      <section v-if="live"  id=link-live>
        <a href="https://www.facebook.com/associazionetlon/"><img class="lin-live" src="/img2/header_fb.png"></a>
        <a href="https://www.instagram.com/tlon.it/"><img class="lin-live" src="/img2/header_ig.png"></a>
        <a href="https://www.youtube.com/channel/UCP8R6WbHCErZhvlEC-hmT_w"><img class="lin-live" src="/img2/header_yt.png"></a>
      </section>
      <img v-if="live"  id="header2" src="/img2/prendiamola-con-filosofia-header-2.png" alt="">
      <img v-if="live"  id="header_mob" src="/img2/header_fase2_mob.png" alt="">
      <!--<h1>
          Prendiamo con Filosofia
      </h1>
      <h3> 
          Strumenti pratici per affrontare la quarantena
      </h3>
      <h2> 
          28 Marzo
      </h2>-->
      <div id="manifesto" v-bind:style=" newPcf ? 'background:rgb(36,188,220)':'background:#259B92'">
        <iframe v-if="live === false && newPcf" class="video" src="https://www.youtube.com/embed/Chbew9uClrM?autoplay=1&modestbranding=1&showinfo=0&rel=0&fs=0&controls=0" frameborder="0"></iframe>
        <!--<iframe v-if="live" class="video" src="https://www.youtube.com/embed/_e2x3DsSO5Y?autoplay=1" frameborder="0"></iframe>-->
        <div v-if="!newPcf">
          <h2 id="main-title">Staffetta di Filosofi, Psicologi e Divulgatori</h2>
          <h4 id="sub-title">per fornire strumenti pratici per la quarantena</h4>
          <h3  id="discla" style=" font-weight:700;">CLICCA QUI SOTTO PER I SINGOLI INTERVENTI</h3>
          <img  id="freccia" src="/img2/freccia.png">
        </div>
        <div v-else>
          <h2 id="main-title" class="main-title-new">Le menti più autorevoli del mondo vogliono parlare con l'Italia</h2>
          
      </div> 
      </div>  
      <div class="programma" id="palinsesto">
        <!-- <div
            @click="toggleDate"
            class="toggle"
            :class="{ 'light-toggle': !newPcf, 'dark-toggle': newPcf }"
          >
            <div
              class="toggle-switch"
              :class="{ 'toggle-left': !newPcf, 'toggle-right': newPcf }"
            >
                
                <h3 class="date" :class="{ 'apr-no': !newPcf, 'apr-yes': newPcf }"> 6 Aprile </h3>
                <h3 class="date" :class="{ 'mar-yes': !newPcf, 'mar-no': newPcf }"> 21 Marzo </h3>
            </div>
        </div> -->
        <div @click="toggleDate" class="date-container" :class="{ 'contain-old': !newPcf, 'contain-new': newPcf }">
                <h3 class="date" :class="{ 'apr-no': !newPcf, 'apr-yes': newPcf }"> 4 Aprile </h3>
                <h3 class="date" :class="{ 'mar-yes': !newPcf, 'mar-no': newPcf }"> 21 Marzo </h3>

        </div>
                <!--<h3 v-if="!newPcf"> 21 Marzo </h3>
                <h3 v-if="newPcf"> 6 Aprile </h3>
        <button @click="toggleDate"> CAMBIA </button>-->
        <!--<h4 id="data"> 21 marzo </h4>-->
        <h2 id="tito" class="progra" :class=" newPcf ? 'progra-new':'progra-old'"> PROGRAMMA </h2>
        <transition style="" name="slideRight" mode="out-in" >
        <div v-if=!newPcf>
        <section  class="tab_prog" v-for="item in prog" v-bind:key="item.length">
            <div v-if="item.link != '' " class="pro-img"><a :href=item.link target="_blank"> <img class="imglink" :src="'/img-rel/' + item.immagine" /> </a></div>
            <div v-else class="pro-img"><img class="profile_img" :src="'/img-rel/' + item.immagine" /></div>
            <div class="text_prog">
            <h3 class="orario"> {{item.orario_inizio}} - {{item.orario_fine}} </h3>
            
            <a v-if="item.link != '' " :href=item.link target="_blank"><h4 class="titolo link" style="color:black !important"> {{item.titolo}} </h4></a>
            <h4 v-else class="titolo" style="color:black !important"> {{item.titolo}} </h4>
            <h4 class="inter"> {{item.interviene}} </h4>
            <h5 class="mod" v-if="item.modera != '' ">Modera {{item.modera}}</h5> 
            <h5 class="mod" v-if="item.moderano != '' ">Moderano {{item.moderano}}</h5>
            <h5 class="mod" v-if="item.intro != '' ">{{item.intro}}</h5> 
            </div>
        </section>
        </div>
        <div v-else>
        <section  class="tab_prog" v-for="item in prognew" v-bind:key="item.length">
            <div v-if="item.link != '' " class="pro-img img-new"><a :href=item.link target="_blank"> <img class="imglink" :src="'/img-rel/' + item.immagine" /> </a></div>
            <div v-else class="pro-img img-new"><img class="profile_img" :src="'/img-rel/' + item.immagine" /></div>
            <div class="text_prog">
            <h3 class="orario ora-new"> {{item.orario_inizio}} - {{item.orario_fine}} </h3>
            
            <a v-if="item.link != '' " :href=item.link target="_blank"><h4 class="titolo link" style="color:black !important"> {{item.titolo}} </h4></a>
            <h4 v-else class="titolo" style="color:black !important"> {{item.titolo}} </h4>
            <h4 class="inter"> {{item.interviene}} </h4>
            <h5 class="mod" v-if="item.modera != '' ">Modera {{item.modera}}</h5> 
            <h5 class="mod" v-if="item.moderano != '' ">Moderano {{item.moderano}}</h5>
            <h5 class="mod" v-if="item.intro != '' ">{{item.intro}}</h5> 
            </div>
        </section>
        </div>
        </transition>
      </div>
      <div class="sponsor" :class=" newPcf ? 'progra-new':'progra-old'" id="partner">
        <h2 id="tito">UN PROGETTO DI</h2>
        <section class="loghi-1">
          <a href="https://www.pianob.it/"><img class="logo-1" src="/img2/logo-pianob.png"></a>
          <a href="https://tlon.it/"><img class="logo-1" src="/img2/Logo_Tlon_Black.png"></a>
        </section>
        <h2 id="tito" class="regards" :class=" newPcf ? 'progra-new':'progra-old'">Si ringrazia</h2>
      </div>
      <section class="loghi-2">
          <a v-if="!newPcf" href="https://www.audible.it/"><img class="logo-2" src="/img2/audible_IT.png"></a>
          <a v-if="!newPcf" href="http://www.efmnet.com/it"><img class="logo-2" src="/img2/eFM_logo.png"></a>
          <a v-if="!newPcf" href="https://www.unicredit.it/it/privati.html"><img class="logo-2" src="/img2/unicredit_logo.jpg"></a>
          <a v-if="newPcf" href="https://www.buddybank.com/it/"><img class="logo-2" src="/img2/buddybank.png"></a>
          <a href="https://www.levi.com/IT/it_IT/"><img class="logo-2" src="/img2/levis.jpg"></a>
          <a href="https://www.emergency.it/"><img class="logo-2" src="/img2/emergency.png"></a>
          <a v-if="newPcf" href="http://converso.cloud/"><img class="logo-2" src="/img2/converso-logo.png"></a>
          <a v-if="newPcf" href="http://aiic-italia.it/"><img class="logo-2" src="/img2/aiic-logo.png"></a>
        </section>
        <h2 id="tito" :class=" newPcf ? 'progra-new':'progra-old'" class="media">Media partner</h2>
      
        <section class="loghi-2">
          <a href="https://www.repubblica.it/"><img class="logo-2" src="/img2/logo_repubblica.png"></a>
          <a href="https://www.raiplayradio.it/radio3/"><img class="logo-2" src="/img2/Radio-3_Logo.png"></a>
          <a v-if="!newPcf" href="https://it.yahoo.com/"><img class="logo-2" src="/img2/yahoo.png"></a>
        </section>
    </div>
    <!-- <transition name="fade" mode="out-in">
        <component v-bind:is="comp"></component>
      </transition>      -->
       <!-- <component name="n3w" ></component> -->
  </div>
</template>
<script>
import "animate.css";
const axios = require("axios");

export default {
  name: 'starter',
  components:{
    'n3w':{
      template: '<div>Component A</div>'
    },
    'old':{
      template: '<div>Component B</div>'
    },
  },
  data(){
    return{
    newPcf: true,
    live: false,
    ora: "",
    timer:"",  
    show: false,
    prog: [],
    prognew: [],
    comp:"n3w"

    };
  },
  created(){
    this.fetchData ()
  },
  methods:{
          fetchData () {
            axios.get('./21marzo.json').then(response => {
            this.prog = response.data
            })
            axios.get('./aprile.json').then(response => {
            this.prognew = response.data
            })
          },

          toggleDate: function(){
            this.newPcf = !this.newPcf
            // if(this.newPcf) this.comp = "new"
            // else this.comp ="old"
            //console.log(this.newPcf)
          }
  //     cancelAutoUdate: function() {
  //         clearInterval(this.timer);
  //       },

  //     checkTime: function(){
  //       this.ora = new Date();
  //       var star = new Date("21 March 2020 2020 09:00:00 GMT+0100");
  //       if((star-this.ora)<0){
  //         this.live=true;
  //         this.cancelAutoUdate();
  //         //toggleLive();
  //       } else { 
  //         this.live=false }
  //       //console.log((this.ora-star) + " | " +this.live);
  //       //console.log(this.ora);
  //     },
      
  //   // toggleLive() {
  //   //   this.$store.commit("toggleLive");
  //   // }
   },

  // // computed: {
  // //   Live() {
  // //     return this.$store.getters.Live;
  // //   }
  // // },
  
      
  //     beforeMount(){
  //        var now = new Date();
  //        var sta = new Date("21 March 2020 09:00:00 GMT+0100");
  //        if((sta-now)>0){
  //          this.live=false
  //         this.timer = setInterval(this.checkTime, 10000);
  //        } else { this.live=true}
  //     },
       mounted(){
         this.show=true;
         
  //       //  var now = new Date();
  //       //  var sta = new Date("21 March 2020 03:015:00 GMT+0100");
  //       //  if((sta-now)>0){
  //       //    toggleDarkMode()
  //       //    console.log("DAJE")
  //       //  }
       },
      

  //  beforeDestroy(){
  //    cancelAutoUdate();
  //  }
      
  
   
  

};
</script>
<style scoped lang="scss">

*{
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
 }

.starter-page {
  min-height: calc(100vh - 95px);
}

.progra{
  padding-bottom: 30px;
}

.progra-new{
  color:rgba(36,188,220, 1);
}

.progra-old{
  color: #259B92;
}


.date-container{
  //width: 400px;
  //position: relative;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  max-width: 420px;
  margin-bottom: 30px;
}

.contain-old{
 border: 3px solid #259B92;
 
}

.contain-new{
  border: 3px solid rgba(36,188,220, 1);
}

.date{
  margin: 0;
  display: inline-flex;
  padding: 22px 20px;
  font-size: 40px;
  font-weight: 700;
  

}

.apr-no{
  //stroke: #259B92;
  color: white;
  -webkit-text-stroke: 1px #259B92;
}

.apr-no:hover{
  text-decoration: underline;
}
.apr-yes{
  background: rgba(36,188,220, 1);
  color: white;
  -webkit-text-stroke: 0;
  
}

.mar-no{
  color: white;
  -webkit-text-stroke: 1px rgba(36,188,220, 1);
}

.mar-no:hover{
  text-decoration: underline;
}
.mar-yes{
  background: #259B92;
  color: white;
  -webkit-text-stroke: 0;
}
.toggle {
  //border-radius: 10px;
  width: 400px;
  box-sizing: border-box;
  margin: 50px auto;
  display: flex;
}

.light-toggle {
  background: linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa 100%);
  border: 1px solid rgba(36,188,220, 0.2); 
  box-shadow: inset 0px 5px 10px rgba(36,188,220, 0.2);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(36,188,220, 0.2); 
  box-shadow: inset 0px 5px 10px rgba(36,188,220, 0.2);
}

.toggle-switch {
  margin: 2px;
  padding: 15px 35px;
  //border-radius: 8px;
}

.toggle-left {
   transform: translateX(0);
  background: rgba(36,188,220, 1);
  color:white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.toggle-right {
  transform: translateX(90%);
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.freccia{
  height: 20px;
  width: 20px;
  margin: 0 30px;
}
#top{
  margin-top: 0;
  padding: 15px 0;
  background: #FD6E0C;
  color: white;
  position: fixed;
  display: block;
  width: 100%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.30);
  cursor: pointer;
  z-index: 100;
}

#top-new{
  margin-top: 0;
  padding: 15px 0;
  background: #FD6E0C;
  color: white;
  position: fixed;
  display: block;
  width: 100%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.30);
  cursor: pointer;
}

.video{
        /*position: absolute;*/
        top: 0;
        left: 0;
        width: 100%;
        height: 57vw;
        border: 20px solid rgba(36,188,220, 1);
        
    }

    body{
      margin: 0;
    }

    #tito{
      //color:  #259B92;
      margin-top: 0px;
      margin-bottom: 0px;
      font-weight: 900;
      font-size: 40px;
    }

    #data{
      margin-top: 0px;
      font-weight: 200;
      font-size: 30px;
      /* color:  #259B92;
      
      font-weight: 900;
      font-size: 50px; */
    }

    #freccia{
      width: 3vw;
      height: 3vw;
      margin-bottom: 2vw;
    }
    @media screen and (min-width: 1025px) {
    .profile_img{
      /* width: 200px;
      height: 200px; */
      margin: 0 auto;
      
    }

    .imglink{
      transition: transform .2s;
    }
    .imglink:hover{
      
      transform: scale(1.2);
    }
    }

    .pro-img{
      
      float: left;
      width: 150px;
      height: 150px;
      margin-right: 20px;
      border: 5px solid #259B92;
      overflow: hidden;
    }

    .img-new{
      border: 5px solid rgba(36,188,220, 1);
    }

    .tab_prog{
      display: flex;
      /* border: 5px solid #259B92; */
      direction: row;
      justify-content:start;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
    .text_prog{
      text-align: left;
      float: right;  
      min-width: 200px;
          
    }
    
    .programma{
      padding-top: 5vw;
      margin: 0 20vw 0 20vw;
      text-align: left;
    }

    .orario{
      color:  #259B92;
      margin-bottom: 0px;
    }

    .ora-new{
      color:  rgba(36,188,220, 1);
      margin-bottom: 0px;
    }

    .titolo{
      max-width:450px;
      font-size: 20px;
      margin-top: 0px;
      margin-bottom: 0px;
    }

    .inter{
      max-width:450px;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 20px;
      font-weight: 800;
    }

    .mod{
      margin-top: 0;
      font-size: 20px;
      font-weight: 300;
    }

    .sponsor{
      margin: 50px 20vw 0 20vw;
      text-align: left;
    }

    .logo-1{
      width: 250px;
      padding: 30px 50px 0 0;
    }

    .hero{
      
      margin-top: 0;
    }

    #manifesto{
      //background: #259B92;
      margin-bottom: 0px;
    }

    #main-title{
      
      font-weight: 900;
      font-size: 40px;
      color: white;
      padding-top: 3vw;
      margin: 0 20px 0 20px
    }

    .main-title-new{
      

      padding: 3vw 20vw 4vw 20vw;
      
      //margin: 0 200px 0 200px
    }

    #sub-title{
      padding-bottom: 2vw;
      margin: 0 20px 0 20px;
      font-weight: 200;
      font-size: 30px;
      color: white;
      
    }

    #discla{
      
      margin: 0 20px 0 20px;
      font-weight: 200;
      font-size: 30px;
      color: white;
      
    }

    .regards{
      padding-top: 50px;
      padding-bottom: 30px;
    }

    .media{
      margin: 0 20vw 0 20vw;
      padding-top: 50px;
      padding-bottom: 30px;
      text-align: left;
    }

    .loghi-1{
      display: flex;
      direction: row;
      justify-content:center;
      flex-wrap: wrap;
    }
    .logo-2{
      width: 200px;
      padding: 20px;
    }

    #header_mob{
      display: none;
    }

    #header{
      margin-top: 50px;
    }

   .header-new{
     margin-top: 50px;
      //padding:0 3vw 3vw;
   } 
    

    @media screen and (max-width: 1025px) {
    #header_mob{
      margin-top: 50px;
      display: block ;
    }
    #header{
      display: none;
      margin-bottom: 0;
 
    }

    .date{
      font-size: 20px;
    }


    #main-title {
      font-size: 20px ;
      padding-top: 5vw;
      
    }
    #sub-title {
      font-size: 20px ;
      padding-bottom: 3vw;
    }

    .main-title-new{
      

      padding: 3vw 10vw 4vw 10vw; 
      
      //margin: 0 200px 0 200px
    }

    #discla{
      /* padding-bottom: 5vw; */
      font-size: 15px;
    }

    #freccia{
      width: 5vw;
      height: 5vw;
      margin-bottom: 3vw;
    }
    .video{
      border: 5px solid rgba(36,188,220, 1);
    }

    #tito{
      font-size: 28px ;
    }
    #data{
      font-size: 30px ;
    }
    .titolo{
      font-size: 15px;
    }
     .link:hover{
      text-decoration: underline;
    }



    .programma{
      
      margin: 0 15vw 0 15vw;
      
    }
    .inter{
      font-size: 18px;
    }

    .mod{
      font-size: 15px;
    }

    .sponsor{
      margin: 20px 15vw 0 15vw;
    }

    .media{
      margin: 20px 15vw 0 15vw;
    }

    .logo-1{
      width: 150px;
      height: auto;
      object-fit: contain;
      
      padding: 20px 10px 0 0;
    }

    .logo-2{
      width:150px;
      padding-top: 0;
      padding-bottom: 0;
    }

    .sponsor{
      padding-top: 5vh;
    }   
}

  .slideLeft-leave-to{
    transform: translateX(100vw);
    opacity: 0.0;
      
      //left:100vw
  }

    .slideLeft-enter{
      transform: translateX(-50vw);
      // opacity: 0;
    }

    .slideLeft-enter-active{
      transition: all 0.5s ease-out;
      
    }

    .slideLeft-leave-active{
      transition: all 0.5s ease-out;
      
    }

    .slideRight-leave-to{
    transform: translateX(-100vw);
    opacity: 0.0;
      
      //left:100vw
  }

    .slideRight-enter{
      transform: translateX(50vw);
      // opacity: 0;
    }

    .slideRight-enter-active{
      transition: all 0.5s ease-out;
      
    }

    .slideRight-leave-active{
      transition: all 0.5s ease-out;
      
    }

    // .slideRight-enter{
    //   transform: translateX(-100vw);
    //   //opacity: 0;
    // }

    // .slideRight-leave-to{
    //   transform: translateX(-100vw);
    //   //opacity: 0;
    // }

    // .slideRight-enter-active{
    //   transition: all 1s ease-out;
    // }

    // .slideRight-leave-active{
    //   transition: all 1s ease-out;
    // }

    .fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
