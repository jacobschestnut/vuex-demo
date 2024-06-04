<template>
  <div class="about">
    <div>
      <h1>{{ currentUser.name }}</h1>
      <h1>{{ currentUser.email }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
