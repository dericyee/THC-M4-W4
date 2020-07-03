<template>
  <div>
    <p>Choose a Sub Page</p>
    <hr />
    <ul class="list-group">
      <!-- Add Router Link Here -->
      <router-link to="/page-two/a" tag="li">Page Two A</router-link>
      <router-link :to="{name:'PageTwoB'}" tag="li">Page Two B</router-link>
    </ul>
  </div>
</template>

<style scoped>
.list-group {
  justify-content: center;
  display: flex;
  flex-direction: row;
  list-style: none;
}
.list-group li {
  margin: 0 30px;
}
</style>