<template>
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0"> </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
            <router-view v-slot="{ Component, route }">
                <transition
                    appear
                    name="fade-transform"
                    mode="out-in">
                    <keep-alive>
                        <component
                            :is="Component"
                            :key="route.fullPath" />
                    </keep-alive>
                </transition>
            </router-view>
        </a-layout-content>
        <a-layout-footer
            class="text-center"
            :style="{ backgroundColor: '#ffffff' }">
            <Footer />
        </a-layout-footer>
    </a-layout>
</template>

<script setup>
import Footer from '../Footer/index.vue'
</script>

<style scoped lang="less"></style>
