<template>
  <div class="starter-page" >
    <div class="section text-center">
      

      <img
        
        id="header"
        class="header-new h-desk"
        src="/img2/header_sito.jpg"
        alt
      />

      <img
        
        id="header"
        class="header-new h-mob"
        src="/img2/header-mob.jpg"
        alt
      />
      

      <!--<h1>
          Prendiamo con Filosofia
      </h1>
      <h3> 
          Strumenti pratici per affrontare la quarantena
      </h3>
      <h2> 
          28 Marzo
      </h2>-->
      <div id="manifesto" style="background:#ec008c">
       <div class="video">
       <youtube  :video-id="videoId" :fitParent="true" :resize="true" :player-vars="playerVars" ref="youtube" @playing="playing"></youtube>
  </div>
         <!-- <iframe class="video" src="https://www.youtube.com/embed/TRV6pkDkPS4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        <!-- <iframe
          v-else
          class="video-old"
          src="https://www.youtube.com/embed/ZohnJGCtJ-A?autoplay=1&modestbranding=1&showinfo=0&fs=0&controls=0"
          frameborder="0"
        ></iframe> -->
        <!-- <iframe
          v-if="live === false && newPc"
          class="video"
          src="https://www.youtube.com/embed/Chbew9uClrM?autoplay=1&modestbranding=1&showinfo=0&rel=0&fs=0&controls=0"
          frameborder="0"
        ></iframe> -->
        <!-- <iframe
          v-if="newPc"
          class="video"
          src="https://www.youtube.com/embed/JsQ2HB7ABoA?autoplay=1"
          frameborder="0"
        ></iframe> -->
      <!-- <div class="partecipa"> <router-link class="link-part" to="#partecipa"
          :scrollOptions="scrollOptions"> PARTECIPA </router-link></div>
      </div> -->

      <div class="parte"> <a class="link-part" href="#" v-scroll-to="{el:'#partecipa',  offset: -200,}"
         :scrollOptions="scrollOptions" > PARTECIPA </a></div>
         <!-- <iframe
          
          class="video"
          src="https://www.youtube.com/embed/2tbiFL2IQGQ?autoplay=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&color=white&controls=0"
          frameborder="0"
        ></iframe> -->
      </div>

<div class="programma" id="palinsesto"> 
  <h2  id="tito" class="progra" >PROGRAMMA</h2>  <section class=legenda> 
    <div class="elblock"><div class="el el1"></div>Visioni /Scenari </div><div class="elblock"><div class="el el2"></div>Strategie Ecosistemiche</div><div class="elblock"> <div class="el el3"></div>Progetto Phoenix</div>
  </section>
  </div>
<div class="back-texture">
  <section class="tab_prog" v-for="item in prog" v-bind:key="item.length">
            
            <div class="pro-img">
              <a v-on:click="viewYT(item.link)" v-scroll-to="{el:'#manifesto',  offset: -50}">
              <img class="profile_img" :src="'/img-rel/' + item.image"> </a>
            </div>
            <div class="text_prog">
              <div class="ambito" :class="{ 'el1': item.sezione == 1, 'el2': item.sezione == 2 ,'el3': item.sezione == 3}"></div>
              <h3 class="orario">{{item.dalla}} - {{item.alle}}</h3>

             <h5 class="amb" >{{item.ambito}} </h5> 
              <a href="#" 
              :class="{ 'tit1': item.sezione == 1, 'tit2': item.sezione == 2 ,'tit3': item.sezione == 3}"
              v-on:click="viewYT(item.link)" v-scroll-to="{el:'#manifesto',  offset: -50}" class="titolo" >{{item.titolo}}</a>
              <div class="inter" v-for="ite in item.interviene" v-bind:key="ite.length">{{ite.nome}} <span v-if="ite.ruolo" class="ruolo">({{ite.ruolo}})</span>
              <div class="biot" v-if="ite.bio">{{ite.bio}}</div>
              </div>
              <div v-if="item.modera">
               <h5 class="mod" v-if="item.modera.length == 1 ">Modera</h5>
              <h5 class="mod" v-else >Moderano </h5> 
              <h5 class="mod-nomi" v-if="item.modera.length == 1 ">{{item.modera[0]}}</h5>
              <h5 class="mod-nomi" v-else v-for="mod in item.modera"  v-bind:key="mod.length">{{mod}}</h5>
              
              </div>
              <!-- <h5 class="mod" v-if="item.intro != '' ">{{item.intro}}</h5> -->
            </div>
          </section>
          </div>
        



      <!-- <div class="programma" id="palinsesto">

        <div
          @click="toggleDat"
          class="date-container"
          :class="{ 'contain-old': !newPc, 'contain-new': newPc }"
        >
          <h3 class="date" :class="{ 'apr-no': !newPc, 'apr-yes': newPc }">4 Aprile</h3>
          <h3 class="date" :class="{ 'mar-yes': !newPc, 'mar-no': newPc }">21 Marzo</h3>
        </div>

        <h2 id="tito" class="progra" :class=" newPc ? 'progra-new':'progra-old'">PROGRAMMA</h2>

        <div v-if="!newPc">
          <section class="tab_prog" v-for="item in prog" v-bind:key="item.length">
            <div v-if="item.link != '' " class="pro-img">
              <a :href="item.link" target="_blank">
                <img class="imglink" :src="'/img-rel/' + item.immagine" />
              </a>
            </div>
            <div v-else class="pro-img">
              <img class="profile_img" :src="'/img-rel/' + item.immagine" />
            </div>
            <div class="text_prog">
              <h3 class="orario">{{item.orario_inizio}} - {{item.orario_fine}}</h3>

              <a v-if="item.link != '' " :href="item.link" target="_blank" style="color:#259b92">
                <h4 class="titolo link" style="color:black !important">{{item.titolo}}</h4>
              </a>
              <h4 v-else class="titolo" style="color:black !important">{{item.titolo}}</h4>
              <h4 class="inter">{{item.interviene}}</h4>
              <h5 class="mod" v-if="item.modera != '' ">Modera {{item.modera}}</h5>
              <h5 class="mod" v-if="item.moderano != '' ">Moderano {{item.moderano}}</h5>
              <h5 class="mod" v-if="item.intro != '' ">{{item.intro}}</h5>
            </div>
          </section>
        </div>
        <div v-else>
          <section class="tab_prog" v-for="item in prognew" v-bind:key="item.length">
            <div v-if="item.link != '' " class="pro-img img-new">
              <a :href="item.link" target="_blank">
                <img class="imglink" :src="'/img-rel/' + item.immagine" />
              </a>
            </div>
            <div v-else class="pro-img img-new">
              <img class="profile_img" :src="'/img-rel/' + item.immagine" />
            </div>
            <div class="text_prog">
              <h3 class="orario ora-new">{{item.orario_inizio}} - {{item.orario_fine}}</h3>
              <div v-if="item.link != '' && item.titolo !== '' ">
              <a :href="item.link" target="_blank">
                <h4 class="titolo link" style="color:black !important">{{item.titolo}}</h4> </a>
                <h4 class="inter">{{item.interviene}}</h4>
              </div>
              <div v-else-if="item.link != '' && item.titolo == '' ">
              
                <a  :href="item.link" target="_blank">
                <h4 class="inter link">{{item.interviene}}</h4>
              </a>
              </div>
              <div v-else>
              <h4 class="titolo" style="color:black !important">{{item.titolo}}</h4>
              <h4 class="inter">{{item.interviene}}</h4>
              </div>
              <h5 class="mod" v-if="item.modera != '' ">Modera {{item.modera}}</h5>
              <h5 class="mod" v-if="item.moderano != '' ">Moderano {{item.moderano}}</h5>
              <h5 class="mod" v-if="item.intro != '' ">{{item.intro}}</h5>
            </div>
          </section>
        </div>
      </div>
      <div class="sponsor" :class=" newPc ? 'progra-new':'progra-old'" id="partner">
        <h2 id="tito">UN PROGETTO DI</h2>
        <section class="loghi-1">
          <a href="https://www.pianob.it/" target="_blank">
            <img class="logo-1" src="/img2/logo-pianob.png" />
          </a>
          <a href="https://tlon.it/" target="_blank">
            <img class="logo-1" src="/img2/Logo_Tlon_Black.png" />
          </a>
        </section>
        <h2 id="tito" class="regards" :class=" newPc ? 'progra-new':'progra-old'">Si ringrazia</h2>
      </div>
      <section class="loghi-2">
        <a v-if="!newPc" href="https://www.audible.it/" target="_blank">
          <img class="logo-2" src="/img2/audible_IT.png" />
        </a>
        <a v-if="!newPc" href="http://www.efmnet.com/it" target="_blank">
          <img class="logo-2" src="/img2/eFM_logo.png" />
        </a>
        <a v-if="!newPc" href="https://www.unicredit.it/it/privati.html">
          <img class="logo-2" src="/img2/unicredit_logo.jpg" />
        </a>
        <a v-if="newPc" href="https://www.buddybank.com/it/" target="_blank">
          <img class="logo-2" src="/img2/buddybank.png" />
        </a>
        <a href="https://www.levi.com/IT/it_IT/" target="_blank">
          <img class="logo-2" src="/img2/levis.jpg" />
        </a>
        <a href="https://www.emergency.it/" target="_blank">
          <img class="logo-2" src="/img2/emergency.png" />
        </a>
        <a v-if="newPc" href="http://converso.cloud/" target="_blank">
          <img class="logo-2" src="/img2/converso-logo.png" />
        </a>
        <a v-if="newPc" href="http://aiic-italia.it/" target="_blank">
          <img class="logo-2" src="/img2/aiic-logo.png" />
        </a>
        <a v-if="newPc" href="http://venturethinking.it/" target="_blank">
          <img class="logo-2" src="/img2/venture_logo.jpg" />
        </a>
      </section>
      <h2 id="tito" :class=" newPc ? 'progra-new':'progra-old'" class="media">Media partner</h2>

      <section class="loghi-2">
        <a href="https://www.repubblica.it/" target="_blank">
          <img class="logo-2" src="/img2/logo_repubblica.png" />
        </a>
        <a href="https://www.raiplayradio.it/radio3/" target="_blank">
          <img class="logo-2" src="/img2/Radio-3_Logo.png" />
        </a>
        <a href="https://it.yahoo.com/" target="_blank">
          <img class="logo-2" src="/img2/yahoo.png" />
        </a>
      </section>
    </div> -->
    
     <h2 id="partner" class="regards">Main Partner</h2>
      
      <section class="loghi-2">
        <a href="http://www.efmnet.com/#1" target="_blank">
          <img class="logo-2" src="/img2/efm.png" />
        </a>
        <a href="https://www.iese.edu/" target="_blank">
          <img class="logo-2" src="/img2/iese.png" />
        </a>
        <a href="https://www.unicampus.it/" target="_blank">
          <img class="logo-2" src="/img2/bio-medico.png" />
        </a>
        <a href="https://www.myspothub.com/" target="_blank">
          <img class="logo-2" src="/img2/myspot.png" />
        </a>
      </section>

    <h2 id="tito" class="regards">Media Partner</h2>
      
      <section class="loghi-2">
        <a href="https://www.cnbc.com/world/?region=world" target="_blank">
          <img class="logo-2" src="/img2/cnbc.png" />
        </a>
         </section>

             <h2 id="tito" class="regards">Sponsor</h2>
      
      <section class="loghi-2">
        <a href="https://bnl.it/it/Individui-e-Famiglie" target="_blank">
          <img class="logo-2" src="/img2/bnl.png" />
        </a>
        <a href="http://www.sogei.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/116" target="_blank">
          <img class="logo-2" src="/img2/sogei.png" />
        </a>
        <a href="https://www.toyota.it/" target="_blank">
          <img class="logo-2" src="/img2/toyota.png" />
        </a>

      </section>

          <h2 id="tito" class="regards">Partner Tecnici</h2>
      
      <section class="loghi-2">
        <a href="http://aiic-italia.it/" target="_blank">
          <img class="logo-2" src="/img2/aiic-logo.png" />
        </a>
        <a href="http://converso.cloud/" target="_blank">
          <img class="logo-2" src="/img2/converso-logo.png" />
        </a>
         </section>
    
     
      
  
<div class="block"></div>
<div class="f-block" id="partecipa" style="background:#ec008c"><div class="f-intro">Registrati ed entra nell'ecosistema Venture Thinking - l'acceleratore per reinventare il tuo business insieme ai CEO di grandi aziende, intellettuali, i maggiori esperti di innovazione.</div></div>
<div class="form-partecipa" >
    <form @submit.prevent="updateFirebase" >
      <label>Nome*</label><br> 
      <input placeholder="Nome" type="text" name="name" v-model="nome" /><br>  
      <label>Cognome*</label><br> 
      <input placeholder="Cognome" type="text" name="name" v-model="cognome" /><br>  
      <label>Email*</label><br> 
      <input placeholder="Email" type="email" name="name" v-model="email" /><br>  
      <label>Azienda</label><br> 
      <input placeholder="Azienda" type="text" name="name" v-model="azienda" /><br> 
      <label>Categoria</label> <br> 
    <select v-model="categoria"> 
      <option disabled value="">Please select one</option> 
        <option>Architettura & Design</option>  
        <option>Automotive & Transportation</option>  
        <option>Banking & Insurance</option>  
        <option>Commercio & fashion</option>  
        <option>Consulenza</option>  
        <option>Cultura & Formazione</option>  

        <option>Farmaceutica</option>  
        <option>Fondi – SGR</option>  
        <option>Food and Beverage</option>  
        <option>ICT – TLC</option>  
        <option>Industria</option>  
        <option>Ingegneria</option>  
        <option>Media e Comunicazione</option>        
      <option>PA</option>  
        <option>Real Estate & Construction</option>  
        <option>Energy & Utilities</option>  
        <option>Sanità</option>  
        <option>Service Provider</option>  
        <option>Università</option>  
        <option>Energy & Utilities</option>  
        <option>Altro</option>  
  
  </select> <br> 

      <label>Come vuoi partecipare all'ecosistema?</label> <br> 
    <select v-model="partecipazione"> 
      <option disabled value="">Please select one</option> 
        <option>Donor/Partner</option>  
        <option>Sponsor</option>  
        <option>Azienda Paretecipante</option>  
        <option>Spettatore</option>  
  
  </select> <br> 
      <label>Note</label><br> 
      <textarea class="texta" id="Field4" name="Field4" spellcheck="true" rows="3" cols="70" tabindex="4" v-model="note"></textarea><br>
      
      
      <div><input class="checkbox" type="checkbox" name="privacy" value="true" v-model="privacy">Accetto i Termini e Condizioni del Servizio e <a href="http://www.efmnet.com/node/354">Privacy Policy</a></div><br>
      
      <div class="alert nope" v-if="checka"> <h3 class="avviso">Compila tutti i campi obbligatori</h3></div>
    <div class="alert success" v-if="success">  <h3 class="avviso">Grazie per esserti iscritto all'ecosistema Venture Thinking <br> Ti aspettiamo qui, sabato 2 maggio dalle 15:00 alle 21:00 alla diretta streaming</h3></div>
      <button class="bott" type="submit" >Partecipa</button>

    </form> 
   
</div> 
    </div>
  </div>
</template>
<script>
import "animate.css";
const axios = require("axios");
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
 
Vue.use(VueYoutube)



import { db } from '@/firebase';
import { debounce } from 'debounce';

const documentPath = 'contacts/prova';



export default {
  name: "starter",
  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    };
  },
  data() {
    return {
       state: 'loading', // synced, modified, revoked, error
      firebaseData: null,
      formData: {},
      errorMessage: '',
      interessi:[],
      nome:"",
      cognome:"",
      email:"",
      azienda:"",
      partecipazione:"",
      note:"",
      categoria:"",
      privacy:false,

      success:false,
      checka:false,

      hover:false,


      newPcf: true,
      live: false,
      ora: "",
      timer: "",
      show: false,
      prog: [],
      prognew: [],
      date: "",
      videoId: 'TRV6pkDkPS4',
      playerVars: {
        autoplay: 1,

      },

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
        y: true,
        
      }

    };
  },


  created: async function () {
    this.fetchData();
    // const docRef = db.doc(documentPath);

    // let data = (await docRef.get() ).data();

    // if (!data) {
    //   data = { name: '', phone: '', email: '' }
    //   docRef.set(data)
    // }

    // this.formData = data;
    // this.state = 'synced'
  },



    

  computed: {
    newPc() {
      return this.$store.getters.newPc;
      // return store.getters.newPc
    },

    player() {
      return this.$refs.youtube.player
    }
  },

  methods: {

      viewYT(k) {
      this.$refs.youtube.player.seekTo(k, true)
      //this.$refs.youtube.player.playVideo()
      },
      playVideo() {
      this.$refs.youtube.player.seekTo(79)
    
    },
    playing() {
      // console.log('\o/ we are watching!!!')
    },

    async updateFirebase() {
      if(this.nome!= "" && this.cognome!= "" && this.email!= "" && this.privacy== true ){
        
      try {
        var date = new Date();
        await db.doc("contacts/"+date).set({nome: this.nome, cognome: this.cognome,
        azienda: this.azienda, partecipazione:this.partecipazione, email:this.email, note:this.note, categoria:this.categoria
        });
        this.state = 'synced';
        this.checka = false;
        this.success = true;
      } catch (error) {
        this.errorMessage = JSON.stringify(error)
        this.state = 'error';
      }
      } else { this.checka = true}
    },




    toggleDat() {
      this.$store.commit("toggleDat");
    },

    fetchData() {
      axios.get("./vt-prog.json").then(response => {
        this.prog = response.data;
      });
      // axios.get("./aprile.json").then(response => {
      //   this.prognew = response.data;
      // });
    },

    toggleDate: function() {
      this.newPcf = !this.newPcf;
      //console.log(this.newPcf)
    },
    cancelAutoUdate: function() {
      clearInterval(this.timer);
    },

    // checkTime: function() {
    //   this.ora = new Date();
    //   var star = new Date(this.date);
    //   if (star - this.ora < 0) {
    //     this.live = true;
    //     this.cancelAutoUdate();
    //     //toggleLive();
    //   } else {
    //     this.live = false;
    //   }
    //   // console.log(this.ora - star + " | " + this.live);
    //   // console.log(this.ora);
    // }

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

    
    // var now = new Date();
    // var sta = new Date("4 April 2020 10:00:00 GMT+0200");
    // this.date = sta;
    // if (sta - now > 0) {
    //   this.live = false;
    //   if (sta - now < 3600000) {
    //     this.timer = setInterval(this.checkTime, 10000);
    //   }
    //   //console.log((sta - now) + " | dai oh | "+((sta - now) < 3600000))
    // } else {
    //   this.live = true;
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

  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style scoped lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.starter-page {
  min-height: calc(100vh - 95px);
}

.progra {
  
  text-align: center;
  font-family: Arvo;
  font-weight: normal !important;
}

.progra-new {
  color: rgba(36, 188, 220, 1);
}

.progra-old {
  color: #259b92;
}

.date-container {
  //width: 400px;
  //position: relative;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  max-width: 420px;
  margin-bottom: 30px;
}

.contain-old {
  border: 3px solid #259b92;
}

.contain-new {
  border: 3px solid rgba(36, 188, 220, 1);
}

.date {
  margin: 0;
  display: inline-flex;
  padding: 22px 20px;
  font-size: 40px;
  font-weight: 700;
}

.apr-no {
  //stroke: #259B92;
  color: white;
  -webkit-text-stroke: 1px #259b92;
}

.apr-no:hover {
  text-decoration: underline;
}
.apr-yes {
  background: rgba(36, 188, 220, 1);
  color: white;
  -webkit-text-stroke: 0;
}

.mar-no {
  color: white;
  -webkit-text-stroke: 1px rgba(36, 188, 220, 1);
}

.mar-no:hover {
  text-decoration: underline;
}
.mar-yes {
  background: #259b92;
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
  border: 1px solid rgba(36, 188, 220, 0.2);
  box-shadow: inset 0px 5px 10px rgba(36, 188, 220, 0.2);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(36, 188, 220, 0.2);
  box-shadow: inset 0px 5px 10px rgba(36, 188, 220, 0.2);
}

.toggle-switch {
  margin: 2px;
  padding: 15px 35px;
  //border-radius: 8px;
}

.toggle-left {
  transform: translateX(0);
  background: rgba(36, 188, 220, 1);
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.toggle-right {
  transform: translateX(90%);
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.freccia {
  height: 20px;
  width: 20px;
  margin: 0 30px;
}
#top {
  margin-top: 0;
  padding: 15px 0;
  background: #fd6e0c;
  color: white;
  position: fixed;
  display: block;
  width: 100%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 100;
}

#top-new {
  margin-top: 0;
  padding: 15px 0;
  background: #fd6e0c;
  color: white;
  position: fixed;
  display: block;
  width: 100%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

iframe{
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 57vw;
  border: 20px solid #ec008c;
}

.video {
  /*position: absolute;*/
  margin: 0 auto;
  //width: 500px;
  //display: block;
   height: 50.4vw;
   width: 90vw;
   max-width: 1200px;
  //border: 20px solid #ec008c;
  //padding: 50px;
}

.video-old {
  /*position: absolute;*/
  top: 0;
  left: 0;
  width: 100%;
  height: 57vw !important;
  border: 20px solid #259B92;
}

body {
  margin: 0;
}

#tito {
  //color:  #259B92;
  margin-top: 0px;
  margin-bottom: 0px;

  font-size: 40px;
  
}

#data {
  margin-top: 0px;
  font-weight: 200;
  font-size: 30px;
  /* color:  #259B92;
      
      font-weight: 900;
      font-size: 50px; */
}

#freccia {
  width: 3vw;
  height: 3vw;
  margin-bottom: 2vw;
}

#header2 {
  margin-bottom: 30px;
}
#top-header {
  margin-top: 50px;
  margin-bottom: 30px;
}
#link-live {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  flex-wrap: wrap;
  direction: row;
}



@media screen and (min-width: 1025px) {
  .profile_img {
    /* width: 200px;
      height: 200px; */
    margin: 0 auto;
  }

  .biot{
    font-size: 12px;
  }

  .lin-live {
    transition: transform 0.2s;
    width: 200px;
  }

  .lin-live:hover {
    transform: scale(1.2);
  }

  .imglink {
    transition: transform 0.2s;
  }
  .imglink:hover {
    transform: scale(1.2);
  }
}


.text_prog{
  padding: 2vw;
  font-family: Raleway !important;
  background: white;
  width: 40vw;
}

.pro-img {
  float: right;
  width: 20vw;
  height: 20vw;
  margin-right: 20px;
  
  overflow: hidden;
}

.img-new {
  border: 5px solid rgba(36, 188, 220, 1);
}

.tab_prog {
  margin-top: 50px;
  display: flex;
  /* border: 5px solid #259B92; */
  direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.text_prog {
  text-align: left;
  float: right;
  min-width: 200px;
}

.programma {
  padding-top: 5vw;
  margin: 0 10vw 0 10vw;
  text-align: left;
}

.orario {
  font-size: 20px;
  margin-bottom: 0.5vw;
}

.ora-new {
  color: rgba(36, 188, 220, 1);
  margin-bottom: 0px;
}

.titolo {
  max-width: 450px;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 15px;
  font-weight: bold;
  text-decoration: underline;
  color: black;
}

.tit1:hover{
  color: #ec008c;
}

.tit2:hover{
  color: #00aeee
}
.tit3:hover{
  color: #ffc202
}



.inter {
  max-width: 450px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: bold;
  color: black;
}

.ruolo{
  font-size: 15px;
  font-weight: normal;
}

.mod {
  margin-bottom: 0px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: normal;
  max-width: 450px;
}

.amb {
  margin-bottom: 0px;
  margin-top: 20px;
  font-size: 15px;
  font-weight: normal;
  max-width: 450px;
}

.mod-nomi {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: bold;
  max-width: 450px;
}

.sponsor {
  margin: 50px 20vw 0 20vw;
  text-align: left;
}

.logo-1 {
  width: 250px;
  padding: 30px 50px 0 0;
}

.hero {
  margin-top: 0;
}

#manifesto {
  //background: #259B92;
  margin-bottom: 0px;
  padding-top: 2vw;
}

#main-title {
  font-weight: 900;
  font-size: 40px;
  color: white;
  padding-top: 3vw;
  margin: 0 20px 0 20px;
}

.main-title-new {
  padding: 3vw 20vw 4vw 20vw;

  //margin: 0 200px 0 200px
}

#sub-title {
  padding-bottom: 2vw;
  margin: 0 20px 0 20px;
  font-weight: 200;
  font-size: 30px;
  color: white;
}

#discla {
  margin: 0 20px 0 20px;
  font-weight: 200;
  font-size: 30px;
  color: white;
}

.regards {
  font-family: Arvo;
  font-weight: normal;
  padding-top: 50px;
  padding-bottom: 0px;
  font-size: 3vw;
}

.media {
  margin: 0 20vw 0 20vw;
  padding-top: 50px;
  padding-bottom: 30px;
  text-align: left;
}

.loghi-1 {
  display: flex;
  direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.logo-2 {
  width: 200px;
  padding: 20px;
}

#header_mob {
  display: none;
}

#header {
  
}

.header-new {
  margin-top: 2vw;
  width: 100vw;
  //max-width: 1080px;
  margin-bottom: 0vw;
  //padding:0 3vw 3vw;
  
}

.h-mob{
 display: none ;
}

@media screen and (max-width: 1025px) {


.h-mob{
 display: block;
}
.h-desk{
 display: none;
}
  .regards {

    font-size: 28px;
  }
  .tab_prog {
    //justify-content: start;
  }

  .text_prog{
    width:80vw;
  }

  .pro-img{
    height: 30vh;
    width: 30vh;
  margin-bottom: 20px;
  }


  .lin-live {
    width: 150px;
    height: auto;
    padding: 0 20px 0 20px;
    transition: 0s;
  }
  #top-header {
    margin-top: 50px;
    width: 200px;
    height: auto;
  }
  #header_mob {
    display: block;
  }
  #header2 {
    display: none;
  }

  #header_mob {
    margin-top: 50px;
    display: block;
  }
  #header {

  }

  .date {
    font-size: 20px;
  }

  #main-title {
    font-size: 20px;
    padding-top: 5vw;
  }
  #sub-title {
    font-size: 20px;
    padding-bottom: 3vw;
  }

  .main-title-new {
    padding: 3vw 10vw 4vw 10vw;

    //margin: 0 200px 0 200px
  }

  #discla {
    /* padding-bottom: 5vw; */
    font-size: 15px;
  }

  #freccia {
    width: 5vw;
    height: 5vw;
    margin-bottom: 3vw;
  }
  .video {
    border: 5px solid  #ec008c;
  }
  .video-old {
    border: 5px solid #259b92;
  }

  #tito {
    font-size: 28px;
  }
  #data {
    font-size: 30px;
  }
  .titolo {
    font-size: 15px;
  }
  .link:hover {
    text-decoration: underline;
  }

  .programma {
    margin: 0 10vw 0 10vw;
  }
  .inter {
    font-size: 18px;
  }

  .mod {
    font-size: 15px;
  }

  .sponsor {
    margin: 20px 15vw 0 15vw;
  }

  .media {
    margin: 20px 15vw 0 15vw;
  }

  .logo-1 {
    width: 150px;
    height: auto;
    object-fit: contain;

    padding: 20px 10px 0 0;
  }

  .logo-2 {
    width: 150px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .sponsor {
    padding-top: 5vh;
  }
}

.slideLeft-enter {
  transform: translateX(100vw);
  opacity: 0;
  position: absolute;
}

.slideLeft-leave {
  transform: translateX(-100vw);
  opacity: 0;
}

.slideLeft-enter-active {
  transition: all 1s ease-out;
}

.slideLeft-leave-active {
  transition: all 3s ease;
  position: absolute;
}

.slideRight-enter {
  transform: translateX(-100vw);
  //opacity: 0;
}

.slideRight-leave-to {
  transform: translateX(-100vw);
  //opacity: 0;
}

.slideRight-enter-active {
  transition: all 1s ease-out;
}

.slideRight-leave-active {
  transition: all 1s ease-out;
}


.parte{
 // height: 20vw;
  padding-top: 4vw;
  padding-bottom: 4vw;
}

.link-part{
  background:white;
  padding: 1.5vw 6vw;
  color: #ec008c;
  font-size: 4vw;
  font-family:Arvo;
  border-radius: 5vw;
}

.form-partecipa{
  padding-top: 2vw;
  font-family: Raleway;
}
.form-partecipa > form > input{
  margin-top: 10px;
  font-family: Raleway;
  width: 50%;
  border: 1px solid black;
  padding: 10px 5px 10px 5px
}

.form-partecipa > form > label{
  margin-top: 2vw;

}

.check-label{
  margin-top: 2vw;

}

.checkbox{
  margin: 0 5px 20px 15px;
}

.alert{
  margin-top: 2vw;
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.nope{
  background: rgb(255, 20, 51);
}

.success{
  background: rgb(28, 214, 74);
  
}

.avviso{
  font-family: Raleway;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  padding: 0 20vh;
}

.texta{
  border: 1px solid black;
  max-width: 90%;
}

.bott{
  background:#ec008c;
  padding: 1vw 3vw;
  color: white;
  border:rgba(0, 0, 0, 0.1);
  font-family:Raleway;
  font-weight:bold;
  font-size: 2vw;
  margin-bottom: 3vw;
  border-radius: 3vw;
}

.block{
  height: 2px;
  width: 100%;
  background: black;
}
.el1{
  background: #ec008c;
}

.el2{
  background: #00aeee
}
.el3{
  background: #ffc202
}
.el{
  width: 2vw;
  height: 2vw;
  
  border-radius: 100%;
  display: inline-block;
  margin-right: 2vw;
}
.elblock{
 display: block;
 font-family: raleway;
 font-size: 20px;
}

.legenda{
  margin-top: 2vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom:20px;

}

.ambito{
  
  width: 20px;
  height:20px;
  
  border-radius: 100%;
  float: right;
}

.back-texture{
  background-image: url("/img2/texture.png");
  padding: 5vw 0;
}

.f-block{
  margin-top: 30px;
  padding: 2vw 0;
}

.f-intro{
  padding: 2vW 15vw;
  color: white;
  font-family: raleway;
  font-weight: bold;
  font-size: 3vw;
}

.biot{
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: normal;
}

.pro-img:hover{

 
 transform: scale(1.2);
}
</style>
