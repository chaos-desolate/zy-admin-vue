<template>
    <template
        v-for="item in menuItems"
        :key="item.path">
        <a-sub-menu
            v-if="item.children"
            :key="item.path">
            <template #title>
                <span>{{ item.meta.title }}</span>
            </template>
            <z-submenu :menu-items="item.children"></z-submenu>
        </a-sub-menu>
        <a-menu-item
            @click="menuItemsClick(item)"
            v-else
            :key="item.path">
            {{ item.meta.title }}
        </a-menu-item>
    </template>
</template>

<script setup name="ZSubmenu">
import { useRouter } from 'vue-router'

defineProps({
    menuItems: {
        type: Array,
        required: true,
    },
})

const router = useRouter()

function menuItemsClick(menuOpt) {
    // 外链
    if (menuOpt.meta.isLink) {
        window.open(menuOpt.meta.isLink)
        return
    }
    router.push(menuOpt.path)
}
</script>

<style scoped lang="less"></style>
