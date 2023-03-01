
# 参数
| 参数           | 说明         | 类型     | 可选值     | 默认值                 |
| -------------- | ------------ | -------- | ---------- | ---------------------- |
| v-mode:visible | 窗口是否显示 | boolean  | true/false | false                  |
| v-model:dates  | 日期段       | string[] | -          | []                     |
| apart          | 中间分割符   | string   | -          | ~                      |
| maxDate        | 最大年限     | number   | -          | new Date('2099/12/31') |
| minDate        | 最小年限     | number   | -          | new Date('2020/01/01') |


# 事件

| 事件名称       | 说明       | 回调参数                    |
| -------------- | ---------- | --------------------------- |
| update:visible | 关闭窗口   | 是否关闭窗口（true /false） |
| update:times   | 更新时间段 | 当前选择的时间段(string[])  |
| confirm        | 确认事件   | -                           |