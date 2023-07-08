<template>
    <el-row class="tac">
        <el-col :span="18">
            <h5 class="mb-2">Default colors</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>
                        
                        <router-link to="/">Go to Home</router-link>
                    </span>
                   
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>
                        <router-link to="/about">Go to About</router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>
                        <router-link to="ref-demo">ref demo</router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>
                        <router-link to="basics">basics</router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>
                        <router-link to="computed-demo">computed-demo</router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="5">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>
                        <router-link to="inject-demo">inject-demo</router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="6">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>
                        <router-link to="jsx-demo">jsx-demo</router-link>
                    </span>
                </el-menu-item>
                
                <el-menu-item index="10">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>
                        <router-link :to="{ path :'watch-demo' }">watch-demo</router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="10">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>
                        <router-link :to="{ path :'watch-demo2' }">watch-demo2</router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="6">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>
                            <router-link to="life-circle-demo2">life-circle-demo2</router-link>
                        </span>
                    </el-menu-item>
                <el-menu-item index="6">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>
                            <router-link to="router-link-demo" append>router-link-demo</router-link>
                        </span>
                    </el-menu-item>
                <el-menu-item index="6">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>
                            <router-link to="crud" append>crud</router-link>
                        </span>
                    </el-menu-item>
                <el-menu-item index="6">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>
                            <router-link to="slots" append>slots</router-link>
                        </span>
                    </el-menu-item>
                <el-menu-item index="6">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>
                            <router-link to="teleports" append>teleports</router-link>
                        </span>
                    </el-menu-item>
                <el-menu-item index="6">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>
                            <router-link to="dynamic" append>dynamic</router-link>
                        </span>
                    </el-menu-item>
                <el-menu-item index="6">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>
                            <router-link to="asyncs" append>asyncs</router-link>
                        </span>
                    </el-menu-item>
            </el-menu>
        </el-col>


    </el-row>
</template>
  
<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
  