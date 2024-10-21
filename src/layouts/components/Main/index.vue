<template>
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <!-- <menu-unfold-outlined
                v-if="collapsed"
                class="trigger"
                @click="() => (collapsed = !collapsed)" />
            <menu-fold-outlined
                v-else
                class="trigger"
                @click="() => (collapsed = !collapsed)" /> -->
        </a-layout-header>
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
        <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
    </a-layout>
</template>

<script setup>
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
// import { ref } from 'vue'
// const collapsed = ref(false)
</script>

<style scoped lang="less"></style>
