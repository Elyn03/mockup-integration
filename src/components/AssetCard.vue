<template>
 <div class="card">

  <img :src="require('@/assets/' + img)" />

  <p>{{ name }}</p>

  <div class="other">
   <p>{{ money }}</p>
   <p>{{ abbreviated }}</p>
  </div>
  
 </div>
</template>

<script>
export default {
 name: 'AssetCard',
 props: {
  img: String,
  name: String,
  abbreviated: String,
  money: String
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
 color: #000;
 padding: 10px 30px;
 width: 100%;
 height: 50%;
 border-radius: 30px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: flex-start;
}

.other{
 display: flex;
 justify-content: space-between;
 width: 100%;

 font-weight: 600;
 font-size: 27px;
}

img {
 width: 20%;
 height: auto;
}

@media screen and (max-width: 1500px) {
  .other {
    font-size: 16px;
  }
}
</style>
