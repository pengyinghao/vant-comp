<script setup lang="ts">
import { ref } from 'vue'
import { TimeRangePicker } from './components'
const visible = ref(false)
const times = ref(['10:10', '12:10'])

const onConfirm = () => {
    // eslint-disable-next-line no-console
    console.log('选择的时间是', times.value)
}
</script>

<template>
    <div>
        <van-button type="primary" @click="visible = true">选择日期</van-button>
        <time-range-picker
            v-model:visible="visible"
            v-model:times="times"
            @confirm="onConfirm"
        ></time-range-picker>
    </div>
</template>
