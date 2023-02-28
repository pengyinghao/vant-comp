import { ExtractPropTypes, PropType } from 'vue'
import dayjs from 'dayjs'
export const props = {
    /** 窗口是否显示 */
    visible: {
        type: Boolean,
        default: false
    },
    /** 时间段，[HH:mm,HH:mm] */
    times: {
        type: Array as PropType<string[]>,
        default: () => [dayjs().format('HH-mm'), dayjs().format('HH-mm')]
    },
    /** 中间分隔符 */
    apart: {
        type: String,
        default: '~'
    },
    /** 最大时间 */
    maxTime: {
        type: Number,
        default: 23
    },
    /** 最小时间 */
    minTime: {
        type: Number,
        default: 0
    },
    /** 最大分钟数 */
    maxMinute: {
        type: Number,
        default: 59
    },
    /** 最小分钟数 */
    minMinute: {
        type: Number,
        default: 1
    }
}

export type Props = ExtractPropTypes<typeof props>

export interface timeResult {
    /** 开始时间 */
    startTime: string
    /** 开始分钟 */
    startMinute: string
    /** 结束时间  */
    endTime: string
    /** 结束分钟 */
    endMinute: string
}
