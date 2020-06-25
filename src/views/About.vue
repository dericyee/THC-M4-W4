<template>
  <div class="about">
    <go-back />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import GoBack from "../components/GoBackButton";

export default {
  components: {
    "go-back": GoBack
  }
};
</script>