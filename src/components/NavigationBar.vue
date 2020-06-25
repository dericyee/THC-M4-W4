<template>
  <div id="nav">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'PageOne', params:{id:1}}">Page One</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/page-two">Page Two</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
}
.nav-item {
  list-style: none;
  margin: 0 auto;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>