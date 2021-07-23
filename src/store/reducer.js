import {ADD_ITEM , GET_CONT} from './actionTypes' //定义type类型的js文件
 
const defaultState = {
    currentpath:''   //后端获取的列表数据放在这里
}
 
// state: 指的是原始仓库里的状态。
// action: 指的是action新传递的状态。
export default (state = defaultState,action)=>{
    //增加
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.currentpath = action.value; //用户输入的新内容push新的内容到列表中去
        return newState
    }
	
     //后端获取数据 传递给中央仓库做处理
     if(action.type === GET_CONT ){ 
        let newState = JSON.parse(JSON.stringify(state)) 
        return newState
    }
    return state
}