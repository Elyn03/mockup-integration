<template>
  <div class="sidebarr">

    <div class="transaction">

      <h2>Recent Transactions</h2>

      <div class="transCard">
        <TransactionCard 
          img="menu/invoices.png"
          name="Usdt"
          status="Received"
          money="+3.546"
          date="Today, 13:45 pm"/>
        <TransactionCard 
          img="../../public/img/menu/invoices.png"
          name="BNB"
          status="Buy"
          money="+0.7546"
          date="Today, 5:45 am"/>
        <TransactionCard 
          img="../../public/img/menu/invoices.png"
          name="Lite Coin"
          status="Withdrawal"
          money="-0.7546"
          date="Today 7:55 am"/>
        <TransactionCard
          img="../../public/img/menu/invoices.png"
          name="Bitcoin"
          status="Received"
          money="+2.7546"
          date="Today 8:55 am"/>
        <TransactionCard
          img="../../public/img/menu/invoices.png"
          name="Recieved"
          status="Received"
          money="+1.646"
          date="Today 10:02 am"/>
      </div>

    </div>

    <div class="assets">

      <h2>Assets</h2>
      
      <div class="assetCard">
        <AssetCard
          img="../../public/img/menu/invoices.png"
          name="Bitcoin"
          symbol="BTC"
          money="121,6450.45"
          style="color: #fff; background: linear-gradient(98.73deg, #611D8D 35.75%, #2F7EC1 73.26%);"/>
        <AssetCard
          img="../../public/img/logo/etherum.png"
          name="Etherum"
          symbol="ETH"
          money="143,850.45"
          style="color: #000; background: linear-gradient(99.56deg, #FAFF00 35.82%, #29ABE2 64.75%, rgba(255, 255, 255, 0.7) 91.33%);"/>
      </div>

    </div>

  </div>

</template>

<script>
import TransactionCard from '@/components/TransactionCard.vue'
import AssetCard from '@/components/AssetCard.vue'

export default {
  name: 'SideBarRight',
  components: {
    TransactionCard,
    AssetCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebarr {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.transCard, .assetCard {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

</style>
