<template>
    <div class="info">
        <div>
            <h3>{{ currentUser.name }}</h3>
            <h3>{{ currentUser.email }}</h3>
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
.info {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
}
</style>