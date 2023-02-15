<template>
  <nav>
    <div class="bloc1">
      <div class="logo">
        <img src="../public/img/inance.png" alt="">
        inance
      </div>
      <div class="welcome">Hi, Rogers</div>
      <div class="searchbar">
        <img src="../public/img/search.png" alt="">
        <input type="text" placeholder="Search">
      </div>
      <img src="../public/img/notif.png" alt="" class="notif">
    </div>

    <img src="../public/img/profil.png" alt="" class="bloc2">
    
  </nav>
  <router-view/>
</template>

<style>
@font-face {
	font-family: 'Poppins-regular';
	src: url('../public/Poppins-Regular.ttf');
}

*  {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #000000;
  color: #fff;
  font-family: 'Poppins-regular';
  font-size: 19px;
}

nav {
  padding: 15px;
  height: 100px;
  display: flex;
  justify-content: space-between;
}

.bloc1 {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  font-size: 32px;
  font-weight: 800;
}
.logo img {
  width: 63px;
  height: auto;
}

.welcome {
  font-weight: 500;
  font-size: 35px;
}

.searchbar {
  padding-left: 23px;
  background-color: #fff;
  width: 476px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}
.searchbar img {
  height: 33px;
  width: auto;
}
.searchbar input {
  border: none;
  height: auto;
  font-weight: 400;
  font-size: 25px;
}

.notif {
  width: 33px;
  height: auto;
}

.grey {
 opacity: 0.7;
}

.green {
  color: #4AD619;
}
.red {
  color: #D61919;
}
</style>
