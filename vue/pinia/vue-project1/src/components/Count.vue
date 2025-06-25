<template>
  <div class="count-container">
    <h1>当前求和为：{{ countStore.sum }}</h1>
    <div class="controls">
      <select v-model="step">
        <option v-for="n in steps" :key="n" :value="n">{{ n }}</option>
      </select>
      <button @click="add">加</button>
      <button @click="subtract">减</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useCountStore} from '../store/count.ts' 
const countStore = useCountStore();
console.log(countStore);

const step = ref(1);
const steps = [1, 2, 3, 4, 5];

function add() {

}

function subtract() {

}
</script>

<style scoped>
.count-container {
  background: #b3d8f7;
  border-radius: 20px;
  padding: 30px 20px;
  margin: 30px 0;
}
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}
.controls {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
select, button {
  font-size: 1.2rem;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style> 