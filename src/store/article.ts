// 定义
import { defineStore } from 'pinia'

export const useHeightStore = defineStore('article', {
  state: () => {
    return { 
      height: '0px', 
      headers: [],
      top: '20px'
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {
  },
  actions: {
  },
})