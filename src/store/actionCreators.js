
//封装组件的action
import {ADD_ITEM ,GET_CONT} from './actionTypes' //定义type类型的js
 
//组件addItem里的action  type已经封好 所以把value作为参数用箭头函数(value)=>传进来即可 
 
//增加数据
export const addItem = (value)=>({
    type:ADD_ITEM,
    value
})
 
//获取数据
export const getCont = (data)=>({
    type:GET_CONT,
    data
})
 