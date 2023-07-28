<template>
    <el-row :gutter="0" class="header">
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">
                <div class="bg-red-300 h-32 ">
                    hi tailwindcss
                </div>
            </div>
        </el-col>

        <el-col :span="18">
            <div class=" bg-emerald-200 right ">
                hhhhfffffffffff
            </div>
        </el-col>
    </el-row>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}


.header {
    //
    height: 50px;
    line-height: 50px;

    .right {
        text-align: right;
    }
}
</style>