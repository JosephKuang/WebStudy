<template>
    <h1>班级管理</h1>
    <div class="container"><el-button type="primary">+ 新增班级</el-button></div>
    <div class="container">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type=index label="序号" width="100" align="center" />
            <el-table-column prop="name" label="班级名称" width="260" align="center" />
            <el-table-column prop="updateTime" label="最后操作时间" width="300" align="center" />
            <el-table-column label="操作" align="center">
                <template #default="scope">
                    <el-button size="small" type="primary">
                        <el-icon>
                            <EditPen />
                        </el-icon>编辑
                    </el-button>
                    <el-button size="small" type="danger">
                        <el-icon>
                            <Delete />
                        </el-icon>删除
                    </el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { queryAllApi } from '../api/class.ts'


const tableData = ref([])

const search = async function () {
    const res = await queryAllApi()
    console.log(res)
    if (res.data.code) {
        tableData.value = res.data.data
    }

}


onMounted(() => {
    search();
})

</script>

<style scoped>
.container {
    margin: 10px;
}
</style>