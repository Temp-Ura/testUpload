<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    
  >
    <div class="container">
      
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
.footer{
  min-height: 20vh;
  background: rgb(235, 234, 234);
}
</style>
