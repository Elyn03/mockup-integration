<template>
  <div class="sidebarl">

    <div class="part1">
      <div class="dashboard">
        <img src="@/assets/menu/invoices.png" alt="">
        Dashboard
      </div>

      <div class="menu">
        <SideBarCard img="menu/invoices.png" txt="Invoices"/>
        <SideBarCard img="menu/clients.png" txt="Clients"/>
        <SideBarCard img="menu/products.png" txt="Products"/>
        <SideBarCard img="menu/messages.png" txt="Messages"/>
        <SideBarCard img="menu/settings.png" txt="Settings"/>
        <SideBarCard img="menu/help.png" txt="Help"/>
      </div>
    </div>

    <a href="#" class="logout grey">
      <img src="@/assets/menu/logout.png" alt="">
      Log out
    </a>
    

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
  padding: 50px 0;
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
  width: 100%;
}
.dashboard {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  gap: 17px;

  width: 70%;
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
  align-items: flex-start;
  gap: 30px;
}
.logout {
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 400;
  font-size: 25px;

  text-decoration: none;
  color: #fff;
}
.logout img {
  width: 40px;
  height: auto;
}

@media screen and (max-width: 1500px) {
  .dashboard {
    font-size: 18px;
  }
}
</style>
