/*
 * @Author: Jie Zhuo
 * @Date: 2024-08-26 17:21:48
 * @LastEditTime: 2024-08-26 17:21:56
 * @LastEditors: Jie Zhuo
 * @Description: 
 * @FilePath: \qccp1\store\index.ts
 */
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      // `this` 是 store 实例
      this.counter++
    },
  },
})
