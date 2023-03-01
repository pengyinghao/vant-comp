
# 参数
| 参数           | 说明         | 类型     | 可选值     | 默认值 |
| -------------- | ------------ | -------- | ---------- | ------ |
| v-mode:visible | 窗口是否显示 | boolean  | true/false | false  |
| v-model:times  | 时间段       | string[] | -          | []     |
| apart          | 中间分割符   | string   | -          | ~      |
| maxTime        | 最大时间     | number   | -          | 23     |
| minTime        | 最小时间     | number   | -          | 0      |
| maxMinute      | 最大分钟数   | number   | -          | 59     |
| minxMinute     | 最小分钟数   | number   | -          | 0      |


# 事件

| 事件名称       | 说明       | 回调参数                    |
| -------------- | ---------- | --------------------------- |
| update:visible | 关闭窗口   | 是否关闭窗口（true /false） |
| update:times   | 更新时间段 | 当前选择的时间段(string[])  |
| confirm        | 确认事件   | -                           |