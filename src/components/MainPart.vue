<template>
  <div class="mainpart">

    <div class="balance">

      <div class="title">
        <h3>Total Balance</h3>
      </div>

      <div class="top">
        <div class="textes">
          <p class="pop">0.97894652</p>
          <p class="grey">$40,123.56</p>
        </div>
        <MiniMenu
          title1="Portfolio"
          title2="Funding "
          title3="Assets"
          title4="P2P" />
      </div>

      <GraphCard />

    </div>

    <div class="transaction">

      <div class="title">
        <h3>Recent Transactions</h3>
        <h3>See all coins</h3>
      </div>

      <RecentTransactionCard 
        imgLogo="logo/bitcoin.png"
        imgOutline="outline1.png"
        name="Bitcoin"
        abbreviated="BTC"
        marketCap="40243.70"
        change="+1.56"/>
      <RecentTransactionCard 
        imgLogo="logo/etherum.png"
        imgOutline="outline2.png"
        name="Etherum"
        abbreviated="ETH"
        marketCap="10243.70"
        change="-1.56"/>
    </div>

  </div>
</template>

<script>
import GraphCard from '@/components/GraphCard.vue'
import RecentTransactionCard from '@/components/RecentTransactionCard.vue'
import MiniMenu from '@/components/MiniMenu.vue'

export default {
  name: 'MainPart',
  components: {
    GraphCard,
    RecentTransactionCard,
    MiniMenu
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainpart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding-bottom: 35px;
  width: 100%;
}

.top {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 120px;
  width: 100%;
}

.textes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 15px;
}
.balance {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
}

.pop {
  position: relative;
  font-weight: 700;
  font-size: 29px;
}
.pop::before{
    content: "BTC";
    background-color: #fbff00;
    border-radius: 8px;
    width: 25%;
    height: 50%;
    font-weight: 700;
    font-size: 15px;
    color: #000;
    position: absolute;
    padding: 4px 8px;
    right: -50%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.grey {
  font-weight: 600;
  font-size: 22px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.transaction {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .pop {
    font-size: 18px;
  }
  .grey {
  font-weight: 600;
  font-size: 16px;
  }
  .pop::before{
    font-size: 12px;
  }
  .top {
    gap: 0;
    justify-content: space-between;
  }

  .transaction {
    
  }
}
</style>
