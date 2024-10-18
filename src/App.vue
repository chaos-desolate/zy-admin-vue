<template>
    <a-config-provider :theme="themeStore.theme">
        <RouterView />
    </a-config-provider>
</template>

<script setup>
import useThemeStore from '@/store/modules/theme'
const themeStore = useThemeStore()
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
</style>
