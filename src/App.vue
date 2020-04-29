<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
export default {
  data(){
    return{
      newPcf: true
    }
  },
  methods:{
    toggleDate: function() {
      this.newPcf = !this.newPcf;
      //console.log(this.newPcf)
    }
  }
};
</script>
<style scoped>
 *{
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
 }
</style>
