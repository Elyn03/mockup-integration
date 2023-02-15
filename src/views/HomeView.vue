<template>
  <div class="dashboard">
    <SideBar/>
    <MainPart msg="Welcome to Your Vue.js App"/>
    <SideBarRight msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPart from '@/components/MainPart.vue'
import SideBar from '@/components/SideBar.vue'
import SideBarRight from '@/components/SideBarRight.vue'

export default {
  name: 'HomeView',
  components: {
    MainPart,
    SideBar,
    SideBarRight
  }
}
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 20% 55% 25%;
}
</style>