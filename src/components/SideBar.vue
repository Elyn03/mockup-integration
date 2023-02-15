<template>
  <div class="sidebarl">

    <div class="part1">
      <div class="dashboard">
        <img src="../../public/img/menu/invoices.png" alt="">
        Dashboard
      </div>

      <div class="menu">
        <SideBarCard img="../../public/img/menu/invoices.png" txt="Invoices"/>
        <SideBarCard img="../public/img/menu/clients.png" txt="Clients"/>
        <SideBarCard img="../public/img/menu/invoices.png" txt="Products"/>
        <SideBarCard img="../public/img/menu/invoices.png" txt="Messages"/>
        <SideBarCard img="../public/img/menu/invoices.png" txt="Settings"/>
        <SideBarCard img="@/public/img/menu/invoices.png" txt="Help"/>
      </div>
    </div>

    <div class="logout">
      <img src="../../public/img/menu/logout.png" alt="">
      Log out
    </div>
    

  </div>
</template>

<script>
import SideBarCard from '@/components/SideBarCard.vue'
export default {
  name: 'SideBar',
  components: {
    SideBarCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebarl {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
}

.part1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dashboard {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  gap: 17px;

  width: 253px;
  height: 65px;

  background: linear-gradient(266.37deg, #FAFF00 -5.82%, #FAFF00 15.95%, #1970D6 41.2%, #6C1182 72.88%);
  border-radius: 17px;

  font-weight: 400;
  font-size: 25px;
  color: #000;
}
.dashboard img {
  height: 100%;
  width: auto;
  filter: opacity(100%) drop-shadow(100 100 #000);
}

.menu {
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
}
.logout {
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 400;
  font-size: 25px;
}
.logout img {
  width: 40px;
  height: auto;
}
</style>
