<template>
    <template
        v-for="item in props.menuItems"
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
            v-else
            :key="item.path">
            {{ item.meta.title }}
        </a-menu-item>
    </template>
</template>

<script setup name="ZSubmenu">
const props = defineProps({
    menuItems: {
        type: Array,
        required: true,
    },
})
</script>

<style scoped lang="less"></style>
