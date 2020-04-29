import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// // Initial State
// const userSelectedLive =
//   window.localStorage.getItem("Live") === "true";
//     const state = {
//   Live: userSelectedLive
// };

// //Getters
// const getters = {
//   Live(state) {
//     return state.Live;
//   }
// };

// // Mutation
// const mutations = {
//   toggleLive(state) {
//     if (state.Live === true) {
//       state.Live = false;
//     //   document.body.style.background = "#f0f3f5";
//       window.localStorage.setItem("Live", "false");
//     } else {
//       state.Live = true;
//     //   document.body.style.background = "#212c4f";
//       window.localStorage.setItem("Live", "true");
//     }
//   }
// };

// // Actions
// const actions = {
//   triggerLive(context) {
//     context.commit("toggleLive");
//   }
// };

//TEST/////////////////////////////////////// 
const startLive = 
window.localStorage.getItem("itsLive") === "false";
const userSelectedDarkMode =
  window.localStorage.getItem("newPc") === "true";
const state = {
  newPc: true,
  itsLive: false
};



// const state = {
//   window.localStorage.getItem("isDarkMode") === "true";
// }

const getters = {
  newPc(state) {
    return state.newPc
  },
  itsLive(state) {
    return state.itsLive
  }
}

// const mutations = {
//   toggleDat: state => state.newPc = !state.newPc
// }

const mutations = {
  toggleMan(state){
    if(state.newPc === false){
      state.newPc = true;
    }
  },
  toggleDat(state){
    if(state.newPc === true){
      state.newPc = false;
      //document.body.style.background = "#f0f3f5";
      //window.localStorage.setItem("newPc", "false")
    } else {
      state.newPc = true;
      //document.body.style.background = "#212c4f";
      //window.localStorage.setItem("newPc", "true")
    }
  },
  veroLive(state){
    state.itsLive = true;
  },

  noLive(state){
    state.itsLive = false;
  }
}

const actions = {
  toggleDat(context){
    context.commit('toggleDat');
  },
  toggleLive(context){
    context.commit('toggleLive');
  }
}




export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

// const store = new Vuex.Store({
//   state: {
//     newPc: true
//   },
//   mutations: {
//     toggleDat (state) {
//       // mutate state
//       state.newPc = !state.newPc
//     }
//   }
// })