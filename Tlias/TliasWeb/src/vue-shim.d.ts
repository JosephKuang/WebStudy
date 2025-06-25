
//声明文件告诉 TypeScript：所有 .vue 文件都可以当作 Vue 组件模块引入。

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
