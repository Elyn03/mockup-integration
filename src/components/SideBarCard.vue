<template>
 <div class="sidebarlcard">
  <img :src="img" />
   {{ txt }}
 </div>
</template>

<script>
export default {
 name: 'SideBarCard',
 props: {
   img: String,
   txt: String,
   alt: String
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebarlcard {
 font-weight: 500;
 font-size: 25px;
}
</style>
