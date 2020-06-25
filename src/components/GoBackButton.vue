<template>
  <div class="go-back">
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack: function() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.go-back {
  display: flex;
}
button {
  border: 0;
  background-color: white;
  cursor: pointer;
}
</style>