<template>
  <div class="news-container">
    <div class="news-list">
      <ul>
        <li v-for="news in newsList" :key="news.id">
            <button @click="shouNewsDetails(news)">查看新闻</button>
          <RouterLink
           :to="{
             name: 'details',
             params: {
                id: news.id,
                title: news.title 
             }
             }">{{ news.title }}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
const newsList = [
  { id: 1, title: '很好的抗癌食物' },
  { id: 2, title: '如何一夜暴富' },
  { id: 3, title: '震惊，万万没想到' }, 
  { id: 4, title: '好消息！好消息！' },
]

import { useRouter } from 'vue-router';
const route = useRouter();
function shouNewsDetails(news) {
    route.push({
         name: 'details',
             params: {
                id: news.id,
                title: news.title 
             }
    })
}
</script>

<style scoped>
.news-container {
    
  display: flex;
  padding: 20px;
}

.news-list {
  width: 200px;
  font-weight: bold;
  line-height: 2;
  color: #678269;
}

.news-content {
  flex: 1;
  margin-left: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
}
</style>
