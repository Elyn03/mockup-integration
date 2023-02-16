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
 height: 62px;
 background: #292727;
 border-radius: 17px;

 display: flex;
 justify-content: center;
 align-items: center;
 gap: 5px;
}

.menu{
 width: 134px;
 height: 44px;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 17px;

 cursor: pointer;
}

.menu:hover {
 background: #0D0C0C;
 transition: 0.5s;
}

.active {
 background: #0D0C0C;
}
</style>
