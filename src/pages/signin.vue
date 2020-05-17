<template>
  <div class="signin">
      <div class="section text-center">
          <router-link class="iscr" to="/data"> ISCRIZIONI </router-link>
      </div>
  </div>
</template>

<script>
import * as netlifyIdentityWidget from "netlify-identity-widget";

// Other imports

export default {
  name: "signin",
  // Other properties
  mounted() {
    netlifyIdentityWidget.open()
  }
}
</script>


<style lang="scss" scoped>
.text-center{
    min-height: 100vh;
}
.iscr{
    margin-top: 30vh;
    font-size: 7em;
    font-weight: bold;
    text-decoration: underline;
}
</style>