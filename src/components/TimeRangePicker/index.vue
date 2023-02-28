<script lang="ts" setup>
import { ref, unref, watchEffect } from 'vue'
import { Popup, Picker } from 'vant'
import { props as TimeRangePickerProps } from './types'
import { useColumns } from './composable/useColumns'
const props = defineProps(TimeRangePickerProps)
interface Emits {
    /* 显示窗口 */
    (e: 'update:visible', value: boolean): void
    /* 更新时间段 */
    (e: 'update:times', value: string[]): void
    /** 确认事件 */
    (e: 'confirm'): void
}
const emits = defineEmits<Emits>()

/** 选择的值 */
const selectedValues = ref<string[]>([])

/** 窗口是否显示 */
const popupVisible = ref(false)
watchEffect(() => {
    popupVisible.value = props.visible

    if (props.times.length !== 2) throw new Error('时间格式错误')
    /** 开始时间 分秒 */
    const startTimes = props.times[0].split(':')
    /** 结束时间 分秒 */
    const endTimes = props.times[1].split(':')
    if (startTimes.length !== 2) throw new Error('开始时间格式错误')
    else if (endTimes.length !== 2) throw new Error('结束时间错误')
    selectedValues.value = [startTimes[0], startTimes[1], props.apart, endTimes[0], endTimes[1]]
})

const { columns } = useColumns(props)

/** 选择时间段取消事件 */
const onPopupClose = () => {
    emits('update:visible', false)
}

/** 确定按钮单击事件 */
const onConfirm = () => {
    const onValue = unref(selectedValues.value).filter((item) => item !== props.apart)
    emits('update:times', [`${onValue[0]}:${onValue[1]}`, `${onValue[2]}:${onValue[3]}`])
    emits('confirm')
    onPopupClose()
}
</script>
<script lang="ts">
export default { name: 'TimeRangePicker' }
</script>

<template>
    <Popup v-model:show="popupVisible" position="bottom" @close="onPopupClose">
        <Picker
            v-bind="$attrs"
            v-model="selectedValues"
            :columns="columns"
            @confirm="onConfirm"
            @cancel="onPopupClose"
        />
    </Popup>
</template>
