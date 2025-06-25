<!-- src/App.vue -->
<template>
    <h2>Route测试</h2>
    <RouterLink to="/home">首页</RouterLink><br>
    <RouterLink :to="{path:'/news'}">新闻</RouterLink><br>
    <RouterLink to="#">关于</RouterLink>

    <div class="main-contain">
        <RouterView></RouterView>
    </div>
 

</template>

<script lang = "ts" >
export default {
    name: 'App',
}
</script>

<script lang="ts"   setup>
import person from './components/person.vue'
import { RouterView,RouterLink } from 'vue-router';
</script>


<style>
.main-contain {
    width: 600px;
  border: 1px solid #555;
  border-radius: 10px;
  
}


</style>



