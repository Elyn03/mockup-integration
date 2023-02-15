<template>
 <div class="card grey">
  <img :src="require('../../public/img/' + img)" />
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
.card {
 font-weight: 500;
 font-size: 25px;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
}

img {
  width: 38px;
  height: auto;
}
</style>
