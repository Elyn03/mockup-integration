<template>
  <div class="sidebarl">

    <div class="part1">
      <div class="dashboard burger">
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
  },
  mounted(){
    let menu = document.querySelector('.menu')
    let dashboard = document.querySelector('.burger')

    dashboard.addEventListener('click',()=>{
      if(menu.style.display == "none"){
        menu.style.display = "flex";
      }else{
        menu.style.display = "none";
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebarl {
  padding: 20% 0;
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
  justify-content: space-between;
  width: 100%;
}
.dashboard {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  gap: 17px;

  width: 70%;
  height: 10%;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

@media screen and (max-width: 1440px) {
  .dashboard {
    font-size: 18px;
  }
}

@media screen and (min-width: 426px) and (max-width: 1024px) {
  .dashboard {
    font-size: 12px;
  }

  .logout {
    font-size: large;
  }
}

@media screen and (max-width: 768px) {
  .dashboard img {
    display: none;
  }
  .menu {
    gap: 20px;
  }
}

@media screen and (max-width: 426px) {
  .sidebarl {
    padding: 5% 0;
    flex-direction: column-reverse;
  }

  .menu{
    padding-top: 10px;
    display: none;
  }
}
</style>
