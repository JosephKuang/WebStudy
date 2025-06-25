import request  from "../utils/request.ts";

//封装与后端交互逻辑
export const queryAllApi = () => request.get('/depts')
