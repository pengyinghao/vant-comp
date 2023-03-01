<script lang="ts" setup>
import dayjs from 'dayjs'
import { ref, unref, watchEffect } from 'vue'
import { useColumns } from './composable/useColumns'
import { dateRangePickerProps } from './types'
const props = defineProps(dateRangePickerProps)

const dateFormat = 'YYYY/MM/DD'
interface Emits {
    /* 显示窗口 */
    (e: 'update:visible', value: boolean): void
    /* 更新时间段 */
    (e: 'update:dates', value: string[]): void
    /** 确认事件 */
    (e: 'confirm'): void
}
const emits = defineEmits<Emits>()

const selectedValues = ref<string[]>([])
/** 窗口是否显示 */
const popupVisible = ref(false)
watchEffect(() => {
    popupVisible.value = props.visible

    if (props.dates.length > 0) {
        if (props.dates.length !== 2) {
            // eslint-disable-next-line no-console
            console.warn('时间格式错误')
        } else {
            /** 开始 年月日 */
            const startDate = dayjs(props.dates[0]).format(dateFormat).split('/')
            /** 结束 年月日 */
            const endDate = dayjs(props.dates[1]).format(dateFormat).split('/')
            selectedValues.value = [
                startDate[0],
                startDate[1],
                startDate[2],
                props.apart,
                endDate[0],
                endDate[1],
                endDate[2]
            ]
        }
    }
})

const { columns } = useColumns(props)

/** 选择时间段取消事件 */
const onPopupClose = () => {
    emits('update:visible', false)
}

/** 确定按钮单击事件 */
const onConfirm = () => {
    const onValue = unref(selectedValues.value).filter((item) => item !== props.apart)
    const format = dateFormat.replace(/\//g, '-')
    const startDate = dayjs(`${onValue[0]}-${onValue[1]}-${onValue[2]}`).format(format)
    const endDate = dayjs(`${onValue[3]}-${onValue[4]}-${onValue[5]}`).format(format)
    emits('update:dates', [startDate, endDate])
    emits('confirm')
    onPopupClose()
}
</script>
<script lang="ts">
export default {
    name: 'DateRangePicker'
}
</script>

<template>
    <van-popup v-model:show="popupVisible" position="bottom" @close="onPopupClose">
        <van-picker
            v-bind="$attrs"
            v-model="selectedValues"
            :columns="columns"
            @confirm="onConfirm"
            @cancel="onPopupClose"
        />
    </van-popup>
</template>
