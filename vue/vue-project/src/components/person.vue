<!-- src/App.vue -->
<template>
   <button @click="addPic">添加图片</button>
   <div> 
    <ul>
        <img v-for="( dog,index) in dogList"  :src="dog" :key="index">
    </ul>
   </div>
</template>

<script lang="ts">
export default {
    name: 'person'
}
</script>
<script lang="ts" setup>
// import { reactive, ref,toRefs,toRef,computed ,watch,watchEffect } from 'vue';
// let firstname = ref("Kuang")
// let lastname = ref("Fu")

// let Num = ref({
//     num: 0
// }
// )

// //只读计算属性 
// let fullname = computed(()=>{
//     return firstname.value + lastname.value
// })
// let name = ref("Kuang")
// let games =ref ([
//     {  id: 1, name: "Kuang" },
//     {  id: 2, name: "Fu" }
// ])
// function changeNum(){
//     Num.value.num++
// }

// // const stopWatch = watch(Num,(newValue,oldValue)=>{
// //     // console.log("变化了",newValue,oldValue)
    
// // if(newValue.num > 5){
// //     console.log("停止监视")
// // }
// // },{
// //     deep: true,
// //     immediate: true
// // })
// watchEffect(()=>{
//     if(Num.value.num > 5){
//         console.log("停止监视")
//     }
// })




// function changeName() {
//     name.value = "Fu"
//     games.value[0].name  = "Fu"
// }
 import useDog from "@/hooks/useDog"

 const {dogList,addPic} = useDog()
</script>


<style>
img{
height: 100px;
margin-right: 10px;
}
</style>
 