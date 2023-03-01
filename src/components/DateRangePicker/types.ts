import { ExtractPropTypes, PropType } from 'vue'

export const dateRangePickerProps = {
    /** 窗口是否显示 */
    visible: {
        type: Boolean,
        default: false
    },
    /** 时间段 */
    dates: {
        type: Array as PropType<Date[] | string[]>,
        default: () => [new Date(), new Date()]
    },
    /** 分割符 */
    apart: {
        type: String,
        default: '~'
    },
    /** 最大年限 */
    maxDate: {
        type: Date,
        default: new Date('2099/12/31 23:59')
    },
    /** 最小年限 */
    minDate: {
        type: Date,
        default: new Date('2020/01/01 00:00')
    }
}

export type DateRangePickerProps = ExtractPropTypes<typeof dateRangePickerProps>

export interface DateResult {
    /** 开始年份 */
    startYear: string
    /** 开始月份 */
    startMonth: string
    /** 开始日期 */
    startDate: string
    /** 结束年份 */
    endYear: string
    /* 结束月份 */
    endMonth: string
    /** 结束日期 */
    endDate: string
}
