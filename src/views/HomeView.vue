<template>
  <div class="home">
    <label for="currentUser">Current User: </label>
    <div class="labels">
      <h3 class="label-value">{{ $store.state.currentUser.name }}</h3>
      <h3 class="label-value">{{ $store.state.currentUser.email }}</h3>
    </div>

    <div id="form">
      <div id="form-fields">
        <div class="field">
          <label for="name">Name: </label>
          <input placeholder="Enter user name" v-model="updatedUser.name">
        </div>
        <div class="field">
          <label for="email">Email: </label>
          <input placeholder="Enter user email" v-model="updatedUser.email">
        </div>
      </div>

      <button @click="updateUser">Update User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updatedUser: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    updateUser() {
      this.$store.dispatch('updateUser', this.updatedUser);
    }
  }
}
</script>

<style>
label {
  font-size: larger;
  font-weight: bold;
  padding: 8px;
}

input {
  padding: 8px;
}

.labels {
  display: flex;
  flex-direction: column;
  margin: 10px 10px 20px 10px;
}

.field {
  margin: 0 20px 20px 0;
}

#form-fields {
  display: flex;
  margin: 30px 0;
}

button {
  border: none;
  padding: 6px;
  font-size: medium;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>