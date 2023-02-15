<template>
  <div class="sidebarr">
    <h1>{{ msg }}</h1>
    sidebar encore mais à droite cette fois
  </div>
</template>

<script>
export default {
  name: 'SideBarRight',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebarr {
  background-color: #546c3d;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
