/*
 * @Author: Jie Zhuo
 * @Date: 2024-08-26 17:24:33
 * @LastEditTime: 2024-08-26 17:29:41
 * @LastEditors: Jie Zhuo
 * @Description: 
 * @FilePath: \qccp1\plugins\pinia.ts
 */
import { useMainStore } from '~/store'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useMainStore($pinia as null)
    }
  }
})
