<template>
  <div>
    <h1>GitHub User search</h1>
    <form>
      <input v-model="username" type="text">
      <button type="submit" @click.prevent="search">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    search() {
      if (this.username) {
        this.$router.push({ path: `/user/${this.username}` });
      }
    },
  },
};
</script>

<style>

</style>
