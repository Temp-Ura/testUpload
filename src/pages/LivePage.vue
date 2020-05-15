<template>
  <div class="starter-page">
    <div class="section text-center">
      <img id="header" class="header-new h-desk" src="/img2/header.jpg" alt />

      <img id="header" class="header-new h-mob" src="/img2/header-mobile.jpg" alt />

      <div id="manifesto">

        <div class="parte">
          <a
            class="link-part"
            href="#"
            v-scroll-to="{el:'#partecipa',  offset: -200,}"
            :scrollOptions="scrollOptions"
          >PARTECIPA COME PUBBLICO</a>
        </div>

        <div class="video">
          <youtube
            :video-id="videoId"
            :fitParent="true"
            :resize="true"
            :player-vars="playerVars"
            ref="youtube"
            @playing="playing"
          ></youtube>
        </div>


      </div>
      <div class="rot" >
       <img id="rota" src="img2/rot.svg" alt="" uk-svg>
       </div>
        <div class="uk-text-center cuore" uk-parallax="stroke: 100%; viewport: 0.5" uk-scrollspy="cls: uk-animation-fade; delay: 500">
            <img  id="cor" src="img2/cuore.svg" alt="" uk-svg>
        </div>
      <div class="programma" id="palinsesto">
        <h2 id="tito" class="progra">PROGRAMMA</h2>
        <!-- <h3 class="chsy">Clicca sull'intervento che ti interessa</h3>  <section class=legenda> 
    <div class="elblock"><div class="el el1"></div>Visioni /Scenari </div><div class="elblock"><div class="el el2"></div>Strategie Ecosistemiche</div><div class="elblock"> <div class="el el3"></div>Progetto Phoenix</div>
        </section>-->
      </div>
      <!-- <div class="back-texture"> -->
                <section class="tab_prog" v-for="item in prog"  v-bind:key="item.length">
          <div class="pro-img">
            <!-- <a v-on:click="viewYT(item.link)" v-scroll-to="{el:'#manifesto',  offset: -50}"> -->
              <img class="profile_img" :src="'/img-rel/' + item.image" uk-parallax="opacity: 0,1;  x: -100,0;  viewport: 0.4;" />
            <!-- </a> -->
          </div>
          <div class="text_prog" uk-parallax="opacity: 0,1; y: 100,0; viewport: 0.4">
            
            <h3 class="orario">{{item.dalla}} - {{item.alle}}</h3>

            
            <!-- <a
              href="#"
              :class="{ 'tit1': item.sezione == 1, 'tit2': item.sezione == 2 ,'tit3': item.sezione == 3}"
              v-on:click="viewYT(item.link)"
              v-scroll-to="{el:'#manifesto',  offset: -50}"
              class="titolo"
            >{{item.titolo}}</a> -->
            <h5 class="titolo">{{item.titolo.toUpperCase()}}</h5>
                        <div v-if="item.ambito">
              <h5 class="mod-nomi">{{item.ambito}}</h5>
            </div>
            <div class="inter">
              {{item.interviene.toUpperCase()}}
              
            </div>

           
          </div>
        </section>
        <!-- <section class="tab_prog" v-for="item in prog" v-bind:key="item.length">
          <div class="pro-img">
            <a v-on:click="viewYT(item.link)" v-scroll-to="{el:'#manifesto',  offset: -50}">
              <img class="profile_img" :src="'/img-rel/' + item.image" />
            </a>
          </div>
          <div class="text_prog">
            <div
              class="ambito"
              :class="{ 'el1': item.sezione == 1, 'el2': item.sezione == 2 ,'el3': item.sezione == 3}"
            ></div>
            <h3 class="orario">{{item.dalla}} - {{item.alle}}</h3>

            <h5 class="amb">{{item.ambito}}</h5>
            <a
              href="#"
              :class="{ 'tit1': item.sezione == 1, 'tit2': item.sezione == 2 ,'tit3': item.sezione == 3}"
              v-on:click="viewYT(item.link)"
              v-scroll-to="{el:'#manifesto',  offset: -50}"
              class="titolo"
            >{{item.titolo}}</a>
            <div class="inter" v-for="ite in item.interviene" v-bind:key="ite.length">
              {{ite.nome}}
              <span v-if="ite.ruolo" class="ruolo">({{ite.ruolo}})</span>
              <div class="biot" v-if="ite.bio">{{ite.bio}}</div>
            </div>
            <div v-if="item.modera">
              <h5 class="mod" v-if="item.modera.length == 1 ">Modera</h5>
              <h5 class="mod" v-else>Moderano</h5>
              <h5 class="mod-nomi" v-if="item.modera.length == 1 ">{{item.modera[0]}}</h5>
              <h5 class="mod-nomi" v-else v-for="mod in item.modera" v-bind:key="mod.length">{{mod}}</h5>
            </div>
           
          </div>
        </section> -->
      <!-- </div> -->

      <h2 id="partner" class="regards">Main Partner</h2>

      <section class="loghi-2">

         <a href="https://www.pianob.it/" target="_blank">
            <img class="logo-1" src="/img2/logo-pianob.png" />
          </a>

           <a href="https://www.audible.it/" target="_blank">
          <img class="logo-2" src="/img2/audible_IT.png" />
        </a>
        <a href="https://www.triennale.org/" target="_blank">
          <img class="logo-2" src="/img2/triennale.png" />
        </a>
                  <a href="https://tlon.it/" target="_blank">
            <img class="logo-1" src="/img2/Logo_Tlon_Black.png" />
          </a>
       
      </section>

      <h2 id="tito" class="regards">Radio Media Partner</h2>

      <section class="loghi-2">
        <a href="https://www.deejay.it/" target="_blank">
          <img class="logo-2" src="/img2/deejay.png" />
        </a>
      </section>

      <h2 id="tito" class="regards">Social Media Partner</h2>

      <section class="loghi-2">
        <a href="https://www.youtube.com/channel/UCkkcN04NIC0wwqNbcWlXNWQ" target="_blank">
          <img class="logo-2" src="/img2/venti.png" />
        </a>
        
      </section>

     

      <div class="block"></div>
      <div class="f-block" id="partecipa" >
        <div
          class="f-intro"
        >Partecipa come pubblico</div>
         <div class="sub-intro">e solo se lo chiederai potrai intervenire in diretta e chiacchierare con Sofia Viscardi e Lorenzo Luporini, La Pina ed Emiliano Pepe, Franco Bolelli e Manuela Mantegazza, Paola Maugeri, Mapi Danna, Andrea Colamedici e Maura Gancitano</div>
      </div>
      <div class="form-partecipa">
        <form @submit.prevent="updateFirebase">
          <label>Nome*</label>
          <br />
          <input placeholder="Nome" type="text" name="name" v-model="nome" />
          <br />
          <label>Cognome*</label>
          <br />
          <input placeholder="Cognome" type="text" name="name" v-model="cognome" />
          <br />
          <label>Email*</label>
          <br />
          <input placeholder="Email" type="email" name="name" v-model="email" />
          <br />
          
          <!-- <label>Azienda</label>
          <br />
          <input placeholder="Azienda" type="text" name="name" v-model="azienda" />
          <br />
          <label>Categoria</label>
          <br />
          <select v-model="categoria">
            <option disabled value>Please select one</option>
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
          </select>
          <br />

          <label>Come vuoi partecipare all'ecosistema?</label>
          <br />
          <select v-model="partecipazione">
            <option disabled value>Please select one</option>
            <option>Donor/Partner</option>
            <option>Sponsor</option>
            <option>Azienda Paretecipante</option>
            <option>Spettatore</option>
          </select>
          <br />
          <label>Note</label>
          <br />
          <textarea
            class="texta"
            id="Field4"
            name="Field4"
            spellcheck="true"
            rows="3"
            cols="70"
            tabindex="4"
            v-model="note"
          ></textarea>
          <br /> -->

          <div class="checkdiv">
            <input class="checkbox" type="checkbox" name="privacy" value="true" v-model="privacy" />Accetto i Termini e Condizioni del Servizio e
            <a href="http://www.festivaldellaamore/privacy">Privacy Policy</a>*
          <br>
            <!-- <input class="checkbox" type="checkbox" name="privacy" value="true" v-model="privacy" />Autorizzo il trattamento dei miei dati personali sensi del Decreto Legislativo 30 giugno 2003, n. 196 e del GDPR (Regolamento UE 2016/679).
             -->
             <input class="checkbox" type="checkbox" name="privacy" value="true" v-model="marketing" />Consenso al trattamento dei dati personali per finalità di marketing.
          </div>
          <br />

          <div class="alert nope" v-if="checka">
            <h3 class="avviso">Compila tutti i campi obbligatori</h3>
          </div>
          <div class="alert success" v-if="success">
            <h3 class="avviso">
              Grazie per esserti iscritto al Festival dell'Amore 2020 
              <br />Giovedì 21 riceverai una mail con il link per partecipare come pubblico e solo se lo chiederai potrai intervenire in diretta
            </h3>
          </div>
          <button v-if="!success" class="bott" type="submit">Partecipa</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import "animate.css";
const axios = require("axios");
import Vue from "vue";
import VueYoutube from "vue-youtube";


Vue.use(VueYoutube);

import { db } from "@/firebase";
import { debounce } from "debounce";

const documentPath = "contacts/prova";

export default {
  name: "starter",
  firestore() {
    return {
      firebaseData: db.doc(documentPath)
    };
  },
  data() {
    return {
      state: "loading", // synced, modified, revoked, error
      firebaseData: null,
      formData: {},
      errorMessage: "",
      interessi: [],
      nome: "",
      cognome: "",
      email: "",
      azienda: "",
      partecipazione: "",
      note: "",
      categoria: "",
      privacy: false,
      marketing: false,

      success: false,
      checka: false,

      hover: false,

      newPcf: true,
      live: false,
      ora: "",
      timer: "",
      show: false,
      prog: [],
      prognew: [],
      date: "",
      videoId: "UgsGtw5xBCQ",
      playerVars: {
        autoplay: 0,
        modestbranding: 0,
        controls: 0,
        showinfo: 0,
        rel: 0,
        wmode: "opaque"
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
        y: true
      }
    };
  },

  created: async function() {
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
      return this.$refs.youtube.player;
    }
  },

  methods: {

    handleScroll(event) {
      var k = window.scrollY ;
      var theta = k / 10 ;
      document.getElementById("rota").style.transform = "rotate(" + theta + "deg)";
      // if (window.pageYOffset > 50) {
      //   this.scrolled = true;
      //   this.scrolled2 = true;
      //   //console.log(this.scrolled + " | " + window.pageYOffset);
      // } else {
      //   this.scrolled = false;
      //   this.scrolled2 = false;
      //   //console.log(this.scrolled);
      // }
    },

    viewYT(k) {
      this.$refs.youtube.player.seekTo(k, true);
      //this.$refs.youtube.player.playVideo()
    },
    playVideo() {
      this.$refs.youtube.player.seekTo(79);
    },
    playing() {
      // console.log('\o/ we are watching!!!')
    },

    async updateFirebase() {
      if (
        this.nome != "" &&
        this.cognome != "" &&
        this.email != "" &&
        this.privacy == true
      ) {
        try {
          var date = new Date();
          await db
            .doc("contacts/" + date)
            .set({
              nome: this.nome,
              cognome: this.cognome,
              
              
              email: this.email,
              
              marketing: this.marketing
            });
          this.state = "synced";
          this.checka = false;
          this.success = true;
        } catch (error) {
          this.errorMessage = JSON.stringify(error);
          this.state = "error";
        }
      } else {
        this.checka = true;
      }
      this.nome = "", 
        this.cognome = "",
        this.email = "",
        this.privacy = false,
        this.marketing = false
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
    }

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
    window.addEventListener("scroll", this.handleScroll);
    //       //  var now = new Date();
    //       //  var sta = new Date("21 March 2020 03:015:00 GMT+0100");
    //       //  if((sta-now)>0){
    //       //    toggleDarkMode()
    //       //    console.log("DAJE")
    //       //  }
  },

  beforeDestroy() {
    clearInterval(this.timer);
    window.removeEventListener("scroll", this.handleScroll);
  }
  
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/now-ui-kit/_variables.scss";
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.starter-page {
  min-height: calc(100vh - 95px);
}

.progra {
  text-align: center;
  font-family: Open Sans Condensed;
  font-weight: 700;
  margin-bottom: 5vw;
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

.video {
  /*position: absolute;*/
  margin: 0 auto;
  //width: 500px;
  //display: block;
  //height: 50.4vw;
  width: 100vw;
  max-width: 1920px;
  //border: 20px solid #ec008c;
  //padding: 50px;
}

.video-old {
  /*position: absolute;*/
  top: 0;
  left: 0;
  width: 100%;
  height: 57vw !important;
  border: 20px solid #259b92;
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

  .biot {
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

.text_prog {
  padding: 10px 2vw;
  font-family: Open Sans !important;
  // background: white;
  width: 40vw;
  text-align: left;
  float: right;
  min-width: 200px;
  border-left: 3px solid $primary-color;
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

.programma {
  padding-top: 7vw;
  margin: 0 10vw 0 10vw;
  text-align: left;
  padding-bottom: 3vw;
}

.orario {
  font-size: 20px;
  
  font-family: Open Sans;
  font-weight: 700;
  line-height: 70%;
  color: $primary-color;
  padding: 3px 10px;
  display: inline;
  border: 3px solid $primary-color;
}


.titolo {
  max-width: 450px;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: 700;
  font-family: Open Sans Condensed;
  color: $primary-color;
}

.tit1:hover {
  color: #ec008c;
}

.tit2:hover {
  color: #00aeee;
}
.tit3:hover {
  color: #ffc202;
}

.inter {
  max-width: 450px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: bold;
  color: $primary-color;
  font-family: Open Sans Condensed;
}

.ruolo {
  font-size: 15px;
  font-weight: normal;
}

.mod {
  margin-bottom: 15px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: normal;
  max-width: 450px;
  font-family: Open Sans;
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
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: normal;
  max-width: 450px;
  font-family: Open Sans;
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
  background: $primary-color;
  margin-bottom: 0px;
  //padding-top: 2vw;
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
  font-family: Open Sans Condensed;
  font-weight: 700;
  padding-top: 50px;
  padding-bottom: 0px;
  font-size: 3vw;
  text-transform: uppercase;
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
  //margin-top: 2vw;
  width: 100vw;
  //max-width: 1080px;
  margin-bottom: 0vw;
  //padding:0 3vw 3vw;
}

.h-mob {
  display: none;
}

.cuore{
 
  margin-top: 10vw
}

#cor{
  width:20vw !important
}

.rot{
  position:fixed;
  top: 70vh;
  right: 10vw;
  width: 20vh;
  z-index: 0;
}

.sub-intro {
  padding: 0 15vw 2vw 15vw;
  color: white;
  font-family: Open Sans;
  font-weight: normal;
  font-size: 2vw;
  
}

.f-intro {
  padding: 2vw 15vw;
  color: white;
  font-family: Open Sans Condensed;
  font-weight: bold;
  font-size: 3vw;
  text-transform: uppercase;
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

.parte {
  // height: 20vw;
  padding-top: 4vw;
  padding-bottom: 4vw;
}

.link-part {
  // background: white;
  padding: 1.2vw 3vw;
  border: 4px solid white;
  // color: $primary-color;
  color:white;
  font-size: 3vw;
  font-family: Open Sans Condensed;
  font-weight: 700;
  // text-decoration: underline;
}

.link-part:hover {
  // transform: translateX(200px);
  filter: drop-shadow(0 15px 0.2em rgba(0, 0, 0, 0.5));
}

.form-partecipa {
  padding-top: 2vw;
  font-family: Open Sans;
}
.form-partecipa > form > input {
  margin-top: 10px;
  font-family: Open Sans;
  width: 50%;
  border: 1px solid black;
  padding: 10px 5px 10px 5px;
}

.form-partecipa > form > label {
  margin-top: 2vw;
}

.check-label {
  margin-top: 2vw;
}

.checkbox {
  margin: 15px 5px 0px 16px;
}
.checkdiv{
  margin: 20px;
}
.alert {
  margin-top: 2vw;
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.nope {
  background: rgb(255, 20, 51);
}

.success {
  background: rgb(28, 214, 74);
}

.avviso {
  font-family: Open Sans;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  padding: 0 20vh;
}

.texta {
  border: 1px solid black;
  max-width: 90%;
}

.bott {
  padding: 1.2vw 3vw;
  border: 4px solid $primary-color;
  // color: $primary-color;
  color:$primary-color;
  font-size: 3vw;
  font-family: Open Sans Condensed;
  font-weight: 700;
  text-transform: uppercase;
  background: #ffffff00;
}

.bott:hover {
  // transform: translateX(200px);
  filter: drop-shadow(0 15px 0.2em rgba(0, 0, 0, 0.3));
  text-decoration: underline;
}

.block {
  height: 2px;
  width: 100%;
  background: black;
}
.el1 {
  background: #ec008c;
}

.el2 {
  background: #00aeee;
}
.el3 {
  background: #ffc202;
}
.el {
  width: 2vw;
  height: 2vw;

  border-radius: 100%;
  display: inline-block;
  margin-right: 2vw;
}
.elblock {
  display: block;
  font-family: Open Sans;
  font-size: 20px;
}

.legenda {
  margin-top: 2vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 20px;
}

.ambito {
  width: 20px;
  height: 20px;

  border-radius: 100%;
  float: right;
}

.back-texture {
  background-image: url("/img2/texture.png");
  padding: 5vw 0;
}

.f-block {
  margin-top: 30px;
  padding: 2vw 0;
  background: $primary-color;
}





.biot {
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: normal;
}

.pro-img:hover {
  //: scale(1.2);
}

.chsy {
  text-align: center;
  font-family: Open Sans;
  font-size: 20px;
}


@media screen and (max-width: 1025px) {
  .parte{
 padding-top: 25px;
  padding-bottom: 25px;
  }
  
   .link-part{
    font-size: 22px;
   

  }
  .bott{
    font-size: 22px;
  }
  .form-partecipa > form > input{
    width: 80%;
  }

  .form-partecipa > form > label{
    margin-bottom: 0;
    margin-top: 15px;
  }

  .f-intro{
    font-size: 17px;
  }
  .sub-intro{
    font-size: 12px;
  }

  .rot {
    display: none;
  }
  .h-mob {
    display: block;
  }
  .h-desk {
    display: none;
  }
  .regards {
    font-size: 28px;
  }
  .tab_prog {
    //justify-content: start;
  }

  .text_prog {
    width: 80vw;
  }

  .pro-img {
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

  .avviso{
  margin: 25px 0;
  font-size: 20px;
  color: white;
  
  padding: 0 5vw;
  }
}
</style>
