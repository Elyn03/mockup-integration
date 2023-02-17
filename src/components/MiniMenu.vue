<template>
 <div class="card">

  <div class="menu active">
   {{ title1 }}
  </div>
  <div class="menu">
   {{ title2 }}
  </div>
  <div class="menu">
   {{ title3 }}
  </div>
  <div class="menu">
   {{ title4 }}
  </div>
  
 </div>
</template>

<script>
export default {
 name: 'MiniMenu',
 props: {
  title1: String,
  title2: String,
  title3: String,
  title4: String
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
 padding: 10px;
 width: 50%;
 height: 50%;
 background: #292727;
 border-radius: 17px;

 display: flex;
 justify-content: space-around;
 align-items: center;
 gap: 5px;
}

.menu{
 padding: 5px 10px;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 17px;

 cursor: pointer;
}

.menu:hover {
 background: #000;
 transition: 0.5s;
}

.active {
 background: #000;
}
</style>
