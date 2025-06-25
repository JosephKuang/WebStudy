<template>
    <div class="common-layout">
        <el-container class="layout-container">
            <el-header class="header">
                <span class="title">Tlias 智能学习辅助系统</span>
                <span class="right-tool">
                    <a href=" " class="header-link">
                        <el-icon>
                            <EditPen />
                        </el-icon>
                        修改密码
                    </a>
                    <router-link to="/login" class="header-link">
                       <el-icon><SwitchButton /></el-icon> 
                        退出登录
                    </router-link>
                </span>
            </el-header>

            <el-container>
                <el-aside width="200px" class="aside">
                    <el-menu router>
                      
                            <el-menu-item index="/index">
                                <el-icon>
                                    <Promotion />
                                </el-icon>首页


                            </el-menu-item>
                       
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <Menu />
                                </el-icon>班级学员管理
                            </template>
                            <el-menu-item index="class"> <el-icon>
                                    <HomeFilled />
                                </el-icon>班级管理</el-menu-item>
                            <el-menu-item index="student"><el-icon>
                                    <Avatar />
                                </el-icon>学员管理</el-menu-item>

                        </el-sub-menu>

                    </el-menu>
                </el-aside>
                <el-main class="main">
                    <RouterView></RouterView>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { EditPen } from '@element-plus/icons-vue'
</script>

<style scoped>
.layout-container {
    height: 100vh;
}

.header {
    background-color: #409EFF;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 18px;
}

.title {
    font-weight: bold;
}

.right-tool {
    display: flex;
    gap: 20px;
}

.header-link {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: opacity 0.2s;
}

.header-link:hover {
    opacity: 0.8;
}

.aside {
    background-color: #f2f2f2;
    padding: 10px;
}

.main {
    background-color: #fff;
    padding: 20px;
}
</style>
