<template>
    <div class="flex justify-center items-center w-[100%] h-[100%]">
        <img
            width="500px"
            height="500px"
            src="@/assets/images/task.png"
            alt="" />
    </div>
</template>

<script setup name="home">
import request from '@/utils/request'
import { onMounted } from 'vue'
async function getData() {
    const result = await request.main.post('/getPaper', { data: '123' })
    console.log('homeResult', result)
}
onMounted(async () => {
    getData()
})
</script>

<style scoped lang="less"></style>
