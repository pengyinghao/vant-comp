import { computed, ref } from 'vue'
import { PickerOption } from 'vant'
import { Props } from '../types'

export function useColumns(props: Props) {
    /** 时段 */
    const times = computed(() => {
        const result: PickerOption[] = []
        for (let i = props.minTime; i <= props.maxTime; i++) {
            const v = `${i}`.padStart(2, '0')
            result.push({
                text: v,
                value: v
            })
        }
        return result
    })

    /** 分钟 */
    const minutes = computed(() => {
        const result: PickerOption[] = []
        for (let i = props.minMinute; i <= props.maxMinute; i++) {
            const v = `${i}`.padStart(2, '0')
            result.push({
                text: v,
                value: v
            })
        }
        return result
    })

    /** 显示列 */
    const columns = ref<PickerOption[][]>([
        times.value,
        minutes.value,
        [{ text: props.apart, value: props.apart }],
        times.value,
        minutes.value
    ])

    return {
        columns
    }
}
