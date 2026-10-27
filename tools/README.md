# 本地回本计算模块

纯 JavaScript，无依赖、网络请求、存储或付费 API。会员费和消费额须属于同一周期，uses 为条款允许的相同购物次数；uncapped 仅在确认无上限时为 true。

```js
const {calculate}=require("./savings-calculator.cjs");
console.log(calculate({fee:8,spend:120,rate:10,cap:20,uses:1,uncapped:false}));
// {perUse:12,discount:12,fee:8,net:4}
```

这是虚构算法示例，不是商家优惠。按分舍入；条款、币种、配送和其他成本另核对。净节省可为零或负数，不能据此诱导多买。
