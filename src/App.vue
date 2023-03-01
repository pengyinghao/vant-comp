<script setup lang="ts">
import { ref } from 'vue'
import { TimeRangePicker, DateRangePicker } from './components'
const visible = ref(false)
const times = ref(['10:10', '12:10'])

const onConfirm = () => {
    // eslint-disable-next-line no-console
    console.log('选择的时间是', times.value)
}

const dateRangePickerVisible = ref(false)
const dates = ref(['2023-02-28', '2023-03-01'])
const onDateConfirm = () => {
    // eslint-disable-next-line no-console
    console.log('选择日期是', dates.value)
}
</script>

<template>
    <div>
        <van-button type="primary" @click="visible = true">选择时间段</van-button>
        <van-button type="primary" @click="dateRangePickerVisible = true">选择日期段</van-button>
        <time-range-picker
            v-model:visible="visible"
            v-model:times="times"
            @confirm="onConfirm"
        ></time-range-picker>

        <date-range-picker
            v-model:dates="dates"
            v-model:visible="dateRangePickerVisible"
            @confirm="onDateConfirm"
        />
    </div>
</template>
