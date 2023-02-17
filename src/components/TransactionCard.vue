<template>
 <div class="card">

  <img :src="require('@/assets/' + img)" />

  <div class="stat1">
    <p>{{ name }}</p>
    <p class="grey"> {{ status }}</p>   
  </div>

  <div class="stat2">
    <p v-if="money > 0" class="green">{{ money }}</p>
    <p v-else class="red">{{ money }}</p>
    <p class="grey">{{ date }}</p>
  </div>

 </div>
</template>

<script>
export default {
  name: 'TransactionCard',
  props: {
    img: String,
    name: String,
    status: String,
    money: String,
    date: String
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  /* width: 200px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.stat1, .stat2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stat1{
  width: 25%;
}

img {
  width: 15%;
  height: auto;
}
</style>
