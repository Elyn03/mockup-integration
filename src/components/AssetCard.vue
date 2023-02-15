<template>
 <div class="card">

  <img :src="img" />

  <p>{{ name }}</p>

  <div class="other">
   <p>{{ money }}</p>
   <p>{{ symbol }}</p>
  </div>
  
 </div>
</template>

<script>
export default {
 name: 'AssetCard',
 props: {
  img: String,
  name: String,
  symbol: String,
  money: String
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
 color: #000;
 padding: 32px;
 width: 407px;
 height: 174px;
 background: linear-gradient(99.56deg, #ebec9e 35.82%, #97e196 64.75%);
 border-radius: 30px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 gap: 10px;
}

.other{
 display: flex;
 justify-content: space-between;
 width: 100%;
}
</style>
