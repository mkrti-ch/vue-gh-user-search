<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <div v-if="user" class="user">
      <img :src="user.avatar_url" alt="avatar" class="user__image">
      <p>{{ user.name | upperCase}}</p>
      <a :href="user.html_url" target="_blank">GitHub Page</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  filters: {
    upperCase(val) {
      return val.toUpperCase();
    },
  },
  computed: {
    ...mapGetters(['loading', 'error', 'user']),
  },
  methods: {
    ...mapActions(['fetchUser']),
  },
  async mounted() {
    await this.fetchUser(this.$route.params.user_name);
  },
};
</script>

<style lang='scss'>
.user {
  width: 600px;
  margin: 0 auto;
}
</style>
