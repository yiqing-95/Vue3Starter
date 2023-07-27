<template>
    <div>
        我是home页面
    </div>
    <HomePanel title="今日热点" sub-title="好热呀！">
        some content from parent
    </HomePanel>
    <HomePanel title="今日好物" sub-title="好物！">
        some content from parent
    </HomePanel>
    <HomePanel title="今日好景" sub-title="好热呀！">
        some content from parent
    </HomePanel>
    <HomePanel title="今日好吃" sub-title="好吃呀！">

     <div class="container">
     some content from parent
     下面img过大会自动把页面撑开 可以看看下面img的样式设置！！！
            <el-row :gutter="20">
                <el-col >
                    <div class="demo-image__lazy">
                        <img v-my-lazy="'https://pic2.zhimg.com/80/v2-5bebefce4192a6525ca81dec89e8a009_1440w.jpg'" />
                    </div>

                </el-col>
            </el-row>

            <el-row :gutter="20">
           
                <el-col :span="2">
                    <div class="demo-image__lazy">
                        <el-image src="https://pic2.zhimg.com/80/v2-5bebefce4192a6525ca81dec89e8a009_1440w.jpg" lazy />
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="demo-image__lazy">
                        <el-image src="https://pic4.zhimg.com/80/v2-05e039e32292e1708b1a14cb9cbd10b7_1440w.webp" lazy />
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="demo-image__lazy ">

                        <el-image src="https://pic2.zhimg.com/80/v2-5bebefce4192a6525ca81dec89e8a009_1440w.jpg" lazy />
                    </div>

                </el-col>
            </el-row>
     </div>   
       

    </HomePanel>
</template>

<script setup>
import HomePanel from '@/views/home/components/HomePanel.vue'
</script>

<style lang="scss" scoped>
.demo-image__lazy {
    height: 400px;
    overflow-y: auto;
}

.demo-image__lazy .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
}

.demo-image__lazy .el-image:last-child {
    margin-bottom: 0;
}

img{
    max-width: 600px;
    width: expression(this.width>600 ?"600px":this.width);
    overflow: hidden;
}
</style>