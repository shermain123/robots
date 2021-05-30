import React,{useContext} from "react";
import { appContext, appSetStateContext } from "../AppState";
import { RobotsProps } from "./Robtos";

//定义HOC函数 ChildComponent 子组件 React.ComponentType为react组件类型
export const withAddToCart = (ChildComponent: React.ComponentType<RobotsProps>) => {
    //返回类组件
    //return class extends React.Component{}
    //返回函数组件
    return (props) => {
        const setState = useContext(appSetStateContext)
        const addToCart = (id,name) =>{
            if(setState){
                setState((state) => {
                    return {
                        ...state,
                        shoppingCart:{
                            items:[...state.shoppingCart.items,{id,name}]
                        }
                    }
                })
            }
        }
        return <ChildComponent  { ...props } addToCart = { addToCart } />
    }
}

//自定义HOOKS 处理购物车数据
export const useAddToCart = () =>{
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) => {
        if (setState) {
            setState((state) => {
                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, { id, name }]
                    }
                }
            })
        }
    }
}