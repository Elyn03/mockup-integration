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

    <img src="@/assets/arrows.png" class="arrow">

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
   <canvas id="graph"></canvas>
  </div>

 </div>
</template>

<script>
import Chart from 'chart.js'

export default {
 name: 'GraphCard',
 mounted() {
  const graph = document.getElementById('graph').getContext('2d')
  new Chart(graph, {
   type: 'line',
   data: {
    labels: [
     '5Nov',
     '6Nov',
     '7Nov',
     '8Nov',
     '9Nov',
     '10Nov',
     '11Nov',
     '12Nov',
     '13Nov',
     '14Nov',
     '15Nov',
    ],
    datasets: [
     {
      label: 'ETH',
      data: [150, 600, 350, 250, 100, 400, 200, 450, 700, 400, 100],
      borderColor: '#CC00FF',
      backgrouncColor: 'transparent'
     },
     {
      label: 'BTN',
      data: [null, 200, 500, 250, 600, 450, 435, 600, 500, 600, null],
      borderColor: '#FAFF00',
      backgrouncColor: 'transparent'
     },
     {
      label: 'ETH',
      data: [null, null, null, null, 100, 400, 450, 300, 150, 400, 500],
      borderColor: '#1970D6',
      backgrouncColor: 'transparent'
     }
    ]
   },
   options: {
    legend: {
     display: false
    },
    tooltips: {
     enabled: false
    },
    scales: {
     xAxes: [{
        gridLines: {
           display: false
        }
     }],
     yAxes: [{
        gridLines: {
           display: false,
           drawOnChartArea: false

        }
     }]
    }
   }
  })
 }
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
 padding: 5px;
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
 justify-content: space-between;
 width: 40%;
 height: 100%;
}

.part2 {
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 35%;
 height: 100%;
}

.part2 img {
 height: 40%;
 width: auto;
}
.select {
 height: auto;
 display: flex;
 gap: 5px;
 align-items: center;
 background: #000;
 border-radius: 5px;
 padding: 5px 10px;
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


@media screen and (max-width: 1440px) {
  .date {
    font-size: 18px;
  }
}

@media screen and (max-width: 1024px) {
 .select {
  padding: 5px;
 }
  .select img {
    width: 25%;
    height: auto;
  }
}

@media screen and (max-width: 768px) {
 .card {
  padding: 20px;
 }

 .date {
  font-size: 12px;
 }

 .part2 {
  width: 40%;
 }
 select {
  font-size: 10px;
 }
}

@media screen and (max-width: 426px) {
 .part2 {
  width: 50%;
  gap: 10px;
 }
 .part2 > img {
  width: 20px;
  height: auto;
 }
}

@media screen and (max-width: 376px) {
 .part2 {
  width: 60%;
 }

 .select img {
  width: 30%;
 }
 .menu {
  flex-direction: column;
 }
}

</style>
