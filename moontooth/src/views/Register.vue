<template>
    <img src="../assets/BG.jpg" class="registerBg" />
    <FlyingLine />
    <registerForm />
</template>

<script setup>
import FlyingLine from '../components/FlyingLine.vue'
import registerForm from '../components/registerForm.vue';

</script>

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


.registerBg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>
