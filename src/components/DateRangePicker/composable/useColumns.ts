import dayjs from 'dayjs'
import { computed } from 'vue'
import { PickerOption } from 'vant'
import { DateRangePickerProps, DateResult } from '../types'

export function useColumns(props: DateRangePickerProps) {
    /** 根据最小数值 、最大数值 得到一个数组 */
    const getArray = (min: number, max: number) => {
        const arr: PickerOption[] = []
        for (let i = min; i <= max; i++) {
            const v = `${i}`.padStart(2, '0')
            arr.push({
                value: v,
                text: v
            })
        }
        return arr
    }

    /** 根据开始日期，结束日期 拆分 年月日  */
    const dateSplitResult = computed<DateResult>(() => {
        /** 开始日期 */
        const startDate = dayjs(props.minDate)
        /** 结束日期 */
        const endDate = dayjs(props.maxDate)

        return {
            startYear: startDate.format('YYYY'),
            startMonth: startDate.format('MM'),
            startDate: startDate.format('DD'),

            endYear: endDate.format('YYYY'),
            endMonth: endDate.format('MM'),
            endDate: endDate.format('DD')
        }
    })

    /** 年份 */
    const years = computed(() => {
        return getArray(
            Number(dateSplitResult.value.startYear),
            Number(dateSplitResult.value.endYear)
        )
    })

    /** 月份 */
    const months = computed(() => {
        return getArray(
            Number(dateSplitResult.value.startMonth),
            Number(dateSplitResult.value.endMonth)
        )
    })

    /** 天数 */
    const days = computed(() => {
        return getArray(
            Number(dateSplitResult.value.startDate),
            Number(dateSplitResult.value.endDate)
        )
    })

    const columns = computed(() => {
        const result: PickerOption[][] = [
            years.value,
            months.value,
            days.value,
            [{ text: props.apart, value: props.apart }],
            years.value,
            months.value,
            days.value
        ]
        return result
    })
    return { columns }
}
