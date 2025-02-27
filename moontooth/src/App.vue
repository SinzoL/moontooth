<script setup>
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="scale-slide" mode="in-out">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
