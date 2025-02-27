<template>
    <img src="../assets/LoginBg.jpg" class="loginBg" />
    <h2 calss="loginTitle">请登录本地观影系统</h2>
    <div class="loginView">
        <FlyingLine />
        <LoginForm />
    </div>
</template>

<script setup>
import FlyingLine from '../components/FlyingLine.vue'
import LoginForm from '../components/LoginForm.vue';
</script>

<style>
.loginBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>