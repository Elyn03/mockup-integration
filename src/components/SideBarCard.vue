<template>
 <a href="#" class="card grey">
  <img :src="require('@/assets/' + img)" />
  {{ txt }}
 </a>
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

 text-decoration: none;
 color: #fff;
}

img {
  width: 20%;
  height: auto;
}

@media screen and (max-width: 1440px) {
  .card {
    font-size: 18px;
  }  
}

@media screen and (min-width: 426px) and (max-width: 768px) {
  .card {
    font-size: 12px;
  }
}
</style>
