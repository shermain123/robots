import React from 'react';
import logo from './assets/images/logo.svg';

import style from './App.module.css'
import robots from './mockdata/robots.json'
import Robot from './components/Robtos'
import ShoppingCart from './components/ShoppingCart'

interface Props{}
interface State{
  robotGallery:any[],
  count:number
}

class App extends React.Component<Props,State> {
  //生命周期第一阶段: 初始化
  //初始化组件 state
  constructor(props){
    super(props)
    this.state = {
      robotGallery:[],
      count:0
    }
  }
  //生命周期第一阶段: 初始化
  //在组件创建好dom元素以后、挂载进页面时候调用
  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((data) => this.setState({robotGallery:data}))
  }

  //生命周期第二阶段: 更新
  //在组件接收到一个新的prop（更新后）时被调用
  //componentWillReceiveProps(){}
  // static getDerivedStateFromProps(nextProps,prevState){}
  // shouldComponentUpdate(nextProps,nextState){
  //   return nextState.some !== this.state.some
  // }
  //只要组件发生更新组件被重新渲染就会被调用
  componentDidUpdate(){}

  //生命周期第三阶段：销毁
  //组件销毁后调用
  //可以当作析构函数 destructor 来使用
  componentWillUnmount(){}  
  render(){
    return (
      <div className={style.app}>
        <div className={style.appHeader}>
          <img src={logo} className={style.appLogo} />
          <h1>罗伯特机器人炫酷吊炸天online购物平台</h1>
        </div>
        <button onClick={()=>{
          this.setState((preState, preProps) => { return { count: preState.count + 1 } }, () => {
            console.log("count", this.state.count)
          });
          // this.setState({count:this.state.count + 1},()=>{
          //   console.log("count", this.state.count)
          // });
          
        }}>click</button>
        <span>count:{this.state.count}</span>
        <ShoppingCart />
        <div className={style.robotList}>
          {this.state.robotGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
        </div>
      </div>
    );
  }
  
}

export default App;
