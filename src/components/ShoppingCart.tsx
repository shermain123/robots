import React from "react";
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../AppState";

//class React.Component<P = {}, S = {}, SS = any> 第一个参数p 为props用于组件传递；S:state组件的状态；SS = any 代表自定义数据

//用接口定义类型
//数据的传递
interface Props {

}
//组件自己的状态
interface State {
    //下拉菜单用于表示打开或者关闭
    isOpen: boolean
}
//React.Component<Props,State> 泛型
class ShoppingCart extends React.Component<Props, State> {
    //初始化组件
    constructor(props: Props) {
        //使用super 调用React.Component基础类的构建函数
        super(props)
        //初始化状态
        this.state = {
            isOpen: false,
        }
    }
    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("e.target ", e.target)
        console.log("e.currentTarget ", e.currentTarget)
        if ((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({ isOpen: !this.state.isOpen });
        }
    }
    render() {
        
        return (
            <appContext.Consumer>
                {(value)=>{
                    return (
                        <div className={styles.cartContainer}>
                            <button className={styles.button}
                                onClick={this.handleClick}
                            >
                                <FiShoppingCart />
                                <span>购物车2(件)</span>
                            </button>
                            <div className={styles.cartDropDown}
                                style={{
                                    display: this.state.isOpen ? "block" : "none"
                                }}
                            >
                                <ul>
                                    {value.shoppingCart.items.map((i) => (
                                        <li>{i.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                }}
            </appContext.Consumer>
        )
    }
}
export default ShoppingCart;