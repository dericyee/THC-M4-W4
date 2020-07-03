<template>
  <div>
    <go-back></go-back>
    <h1>
      Hi!
      <small class="text-muted">I am page 1!</small>
    </h1>
    <p>I have a dynamic id value of {{id}}</p>
  </div>
</template>

 <style scoped>
.text-muted {
  color: gray;
  font-weight: lighter;
}
</style>

<script>
import GoBack from "../components/GoBackButton";
export default {
  data() {
    // console.log(this);
    // console.log(this.$route);
    return {
      id: this.$route.params.id
    };
  },
  components: {
    "go-back": GoBack
  },
  beforeMount() {
    console.log("Page is being mounted");
  },
  beforeCreate() {
    console.log("Page is being created");
  },
  created() {
    // Fetch data
    console.log("Page is created");
  },

  mounted() {
    // Filter todo - completed or not
    console.log("Page is mounted");
  },
  beforeDestroy() {
    console.log("Page is being destroyed");
  },
  destroyed() {
    console.log("Page is destroyed");
  }
};
</script>