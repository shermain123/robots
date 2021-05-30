//ts 里 css定义与声明
//*.d.ts 是typescript 专用类型声明文件 只包含类型声明不包含逻辑 不会被编译 也不会被webpack打包 
//
declare module "*.css" {
    const css : {[key:string]:string};
    export default css;
}  