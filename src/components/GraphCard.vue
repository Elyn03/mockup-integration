<template>
 <div class="card">

  <div class="menu">

   <div class="part1">

    <div class="date">1H</div>
    <div class="date">1D</div>
    <div class="date">3D</div>
    <div class="date">1W</div>
    <div class="date">1M</div>
    <div class="date">
     <img src="@/assets/calendar.png" alt="">
    </div>

   </div>

   <div class="part2">

    <div class="select">
     <img src="@/assets/logo/bitcoin.png" alt="">
     <select name="" id="">
      <option value="BTC">BTC</option>
      <option value="BTC">BTC</option>
      <option value="BTC">BTC</option>
     </select>
    </div>

    <img src="@/assets/arrows.png" alt="">

    <div class="select">
     <img src="@/assets/logo/etherum.png" alt="">
     <select name="" id="">
      <option value="ETH">ETH</option>
      <option value="ETH">ETH</option>
      <option value="ETH">ETH</option>
     </select>
    </div>

   </div>
   
  </div>

  <div class="theGraph">
   <img src="@/assets/graph2.png" alt="">
  </div>

 </div>
</template>

<script>
export default {
 name: 'GraphCard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
 width: 100%;
 height: auto;
 background: rgba(48, 53, 65, 0.67);
 border-radius: 30px;
 padding: 30px;

 display: flex;
 flex-direction: column;
 justify-content: space-between;
 gap: 10px;
}

img {
 width: 100%;
 height: auto;
}

.date {
 padding: 10px;
 width: 15%;
 aspect-ratio: 1/1;

 background: #000000;
 border-radius: 5px;

 display: flex;
 justify-content: center;
 align-items: center;

 font-weight: 500;
 font-size: 27px;
}

.date img {
 width: 100%;
}

.menu {
 display: flex;
 width: 100%;
 height: 10%;
 gap: 10px;
 justify-content: space-between;
 align-items: center;
}
.part1 {
 display: flex;
 gap: 10px;
 width: 40%;
 height: 100%;
}

.part2 {
 display: flex;
 align-items: center;
 gap: 10px;
 width: 40%;
 height: 100%;
}

.part2 img {
 height: 50%;
 width: auto;
}
.select {
 width: 100%;
 height: 100%;
 height: auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background: #000;
 border-radius: 5px;
 padding: 0 10px;
}

.select img {
 height: 30px;
 width: auto;
}

select{
 padding: 0;
 border: none;
 background: #000;
 color: #fff;
}
</style>
