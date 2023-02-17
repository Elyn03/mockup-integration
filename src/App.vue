<template>
  <nav>
    <div class="bloc1">

      <div class="logo">
        <img src="@/assets/inance.png" alt="">
        <span>inance</span>
      </div>

      <div class="welcome">Hi, Rogers</div>

      <div class="searchbar">
        <img src="@/assets/search.png" alt="">
        <input type="text" placeholder="Search">
      </div>

      <img src="@/assets/notif.png" alt="" class="notif">
    
    </div>

    <img src="@/assets/profil.png" alt="" class="bloc2">
    
  </nav>
  <router-view/>
</template>

<style>
@font-face {
	font-family: 'Poppins-regular';
	src: url('assets/Poppins-Regular.ttf');
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
  width: 35%;
  height: 70%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}
.searchbar img {
  height: 70%;
  width: auto;
}
.searchbar input {
  background: none;
  border: none;
  width: 50%;
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
.blue {
  color: #1970D6;
}
.purple {
  color: #6C1182;
}


@media screen and (max-width: 1440px) {
  #app {
    font-size: 14px;
  }

  .logo {
  font-size: 25px;
  font-weight: 800;
  }
  .welcome {
    font-weight: 500;
    font-size: 25px;
  }

  input {
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  #app {
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  #app {
    font-size: 10px;
  }
  nav {
    height: 70px;
  }
  .searchbar input {
    font-size: 16px;
  }
}

@media screen and (max-width: 426px) {
  #app {
    font-size: 10px;
  }
  .logo span, .welcome {
    display: none;
  }
  .searchbar {
    padding-left: 5px;
  }
}
</style>
