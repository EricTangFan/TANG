---
# 设置后为禁用
# navbar: false 

# 启用本页面的导航栏
sidebar: auto
---

# 关于我的开发生涯

今天已过半，bug还有一大版

## 前言
世人嘻嘻，皆为利来。世人攘攘，皆为利往。

## 正文系列介绍

本系列将会从零开始实现vue3核心模块reactivity, runtime-core,compiler-core。
本文知识来源于mini-vue，欢迎大家去star！
所有代码均为TypeScript编写（noImplicitAny)，去除边界情况，只关注核心实现。
并采用TDD（测试驱动开发）的开发方式，测试框架为vitest（会在使用过程中讲解）。

### Reactivity

Reactivity，也就是我们常说的响应式系统，而在Vue3中，响应式系统被独立出来成为一个完善的模块。

什么是响应式系统呢？

举个栗子，这是一段原生的JS代码：

```javascript

let A0 = 1
let A1 = 2
let A2 = A0 + A1

console.log(A2) //3

A0 = 2
console.log(A2) //还是3 

```

A2 只是计算了值，它并不会随着A0和A1的变化而变化。

如果我们想实现这样的功能，可以说我们就实现了一个简单的响应式系统。

### 思考

那么如何在JS中实现这种功能呢？

我们自然可以想到，每次对A0或A1进行更改的时候，都对A2进行更新，这样就ok了。

那么，为了更新A2，我们需要一个更新函数：

```javascript

function update(){
    A2 = A0 + A1
}

```

我们可以这样想，update是一个副作用函数，它可以被称作effect，而A0和A1可以看作该effct的 依赖，也就是dependencies，而反过来，effect可以称作A0和A1的订阅者，subscriber，每次A0或者A1更新时，我们都通知effect去执行，这样就完成了响应式。

所以，我们需要实现的响应式系统，可以用一个函数进行抽象：

```javascript

whenDepsChange(effect)

```

这个whenDepsChange函数应该做到以下事情：

+ 挑选变量作为响应式变量，当这些变量被读取时，进行跟踪，例如：运行A0 + A1时，A0和A1都应该被追踪 （track）。

+ 在运行effect函数时如果读取了某个被追踪的变量，则让该effect成为该变量的订阅者。例如：在update函数中读取了A0和A1，所以update函数就是A0和A1的订阅者。

+ 当变量被修改时，通知这个变量的所有订阅者重新运行。例如：当修改A0的值时，通知到A0的订阅者，此时只有update函数，所以update函数重新运行。

So 

以上内容即为reactivity的核心。
