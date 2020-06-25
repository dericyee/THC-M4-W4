<template>
  <div>
    <h1>Vue Router Home!</h1>
    <p>You are on the home page of the Vue application</p>
    <hr />
    <p>This text is not important, but thanks for reading it.</p>
    <a class="btn">
      <router-link to="/page-one">Click for Page 1</router-link>
    </a>
    <a class="btn">
      <router-link to="/page-two">Click for Page 2</router-link>
    </a>
  </div>
</template>

<style scoped>
.btn {
  margin: 0 20px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}
</style>