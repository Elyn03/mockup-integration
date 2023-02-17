<template>
 <div class="card">
  
  <img :src="require('@/assets/' + imgLogo)" class="icon"/>

  <div class="names">
    <p>{{ name }}</p>
    <p>{{ abbreviated }}</p>
  </div>

  <div class="market">
    <p>Market Cap</p>
    <p v-if="marketCap > 20000" class="blue">${{ marketCap }}</p>
    <p v-else class="purple">${{ marketCap }}</p>
  </div>

  <div class="change">
    <p>24h change</p>
    <p v-if="change > 0" class="green">{{ change }}</p>
    <p v-else class="red">{{ change }}</p>
  </div>

  <img :src="require('@/assets/' + imgOutline)" class="outline"/>

  <div class="trade">Trade</div>

 </div>
</template>

<script>
export default {
 name: 'RecentTransactionCard',
 props: {
   imgLogo: String,
   imgOutline: String,
   name: String,
   abbreviated: String,
   marketCap: String,
   change:String
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 3% 2%;
  width: 100%;
  height: 30%;
  background: rgba(32, 35, 43, 0.7);
  border-radius: 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.trade {
  width: 10%;
  height: auto;
  background: #000000;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 17px;
}
.icon {
 width: auto;
 height: 80%;
}
.outline {
 width: 143px;
 height: 10px;
}

.names, .market, .change {
 display: flex;
 flex-direction: column;
 align-items: flex-start;
}

@media screen and (max-width: 1024px) {
 .trade {
  font-size: 12px;
 }
}

@media screen and (max-width: 768px) {
  .card {
    height: 20%;
  }
 .trade {
    font-size: 10px;
 }
}

@media screen and (max-width: 426px) {
  .icon {
    height: 20px;
  }
  .transaction {
    gap: 10px;
    justify-content: center;
  }
  .card {
    margin: 10px 0;
  }
}

@media screen and (max-width: 376px) {
  .card {
    flex-direction: column;
    gap: 5px;
  }
  .names, .market, .change {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }

  .trade {
    width: 50%;
  }
}
</style>