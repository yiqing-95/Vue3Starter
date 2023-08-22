<template>
    <!-- /** generate for table:  admin_menu | class: AdminMenu */ -->



    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"
        status-icon>

        <el-form-item label="ID" prop="id">

            <el-input v-model="ruleForm.id" /> </el-form-item>





        <el-form-item label="Root" prop="root">

            <el-input v-model="ruleForm.root" /> </el-form-item>





        <el-form-item label="Lft" prop="lft">

            <el-input v-model="ruleForm.lft" /> </el-form-item>





        <el-form-item label="Rgt" prop="rgt">

            <el-input v-model="ruleForm.rgt" /> </el-form-item>





        <el-form-item label="Level" prop="level">

            <el-input v-model="ruleForm.level" /> </el-form-item>





        <el-form-item label="Label" prop="label">

            <el-input v-model="ruleForm.label" /> </el-form-item>





        <el-form-item
            label="url 如 array(user/create); 或者user/create  //user/create 服务端处理时要判断是否转为array 要考虑如果采用前者分号的问题 eval函数"
            prop="url" v-show="isShow">

            <el-input v-model="ruleForm.url" /> </el-form-item>



        <el-form-item label="url 后的请求参数" prop="params" v-show="isShow">

            <el-input v-model="ruleForm.params" /> </el-form-item>



        <el-form-item label="Ajaxoptions" prop="ajaxoptions" v-show="isShow">

            <el-input v-model="ruleForm.ajaxoptions" /> </el-form-item>



        <el-form-item label="Htmloptions" prop="htmloptions" v-show="isShow">

            <el-input v-model="ruleForm.htmloptions" /> </el-form-item>



        <el-form-item label="Is Visible" prop="is_visible" v-show="isShow">

            <el-input v-model="ruleForm.is_visible" /> </el-form-item>



        <el-form-item label="谁的树 系统默认的是后台树0 " prop="uid" v-show="isShow">

            <el-input v-model="ruleForm.uid" /> </el-form-item>



        <el-form-item label="归类码表示用途的 一般只需要标记根的用途即可 也可以考虑用eav 但考虑到查询问题 所以引入了此字段" prop="group_code" v-show="isShow">

            <el-input v-model="ruleForm.group_code" /> </el-form-item>





        <el-form-item>

            <el-button class="arrow" :icon="isShow ? ArrowUp : ArrowDown" @click="isShow = !isShow">

            </el-button>

            <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>

            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>

        </el-form-item>

    </el-form>
</template>
  
  <!-- <script lang="ts" setup> -->
  
<script setup>

import { reactive, ref } from 'vue'

// import type { FormInstance, FormRules } from 'element-plus'



// 引入图标

import { ArrowUp, ArrowDown } from '@element-plus/icons-vue'



/*
 
import {  getCurrentInstance} from 'vue'
 
const {ctx} = getCurrentInstance() // 这个里面有不少东西可以很方便的使用的😄
 
console.log('[crud-form]:', ctx)
 
*/

/*
 
interface RuleForm {
 
  name: string
 
 ...
 
}
 
interface AdminMenu {
 
id: number,
 
root: number,
 
lft: number,
 
rgt: number,
 
level: number,
 
label: string,
 
url: string,
 
params: string,
 
ajaxoptions: string,
 
htmloptions: string,
 
is_visible: number,
 
uid: number,
 
group_code: string
 
}  */

const isShow = ref(false);



const formSize = ref('default')

// const ruleFormRef = ref<FormInstance>()

const ruleFormRef = ref()

// const ruleForm = reactive<RuleForm>({

const ruleForm = reactive(

    {

        "id": null,

        "root": null,

        "lft": null,

        "rgt": null,

        "level": null,

        "label": null,

        "url": null,

        "params": null,

        "ajaxoptions": null,

        "htmloptions": null,

        "is_visible": 1,

        "uid": 0,

        "group_code": "sys_admin_menu"

    })

// const rules = reactive<FormRules<RuleForm>>({

const rules = reactive(

    {

        "id": [

            {

                "type": "integer"

            }

        ],

        "root": [

            {

                "type": "integer"

            }

        ],

        "lft": [

            {

                "type": "integer"

            }

        ],

        "rgt": [

            {

                "type": "integer"

            }

        ],

        "level": [

            {

                "type": "integer"

            }

        ],

        "label": [

            {

                "type": "string"

            }

        ],

        "url": [

            {

                "type": "string"

            }

        ],

        "params": [

            {

                "type": "string"

            }

        ],

        "ajaxoptions": [

            {

                "type": "string"

            }

        ],

        "htmloptions": [

            {

                "type": "string"

            }

        ],

        "is_visible": [

            {

                "type": "integer"

            }

        ],

        "uid": [

            {

                "type": "integer"

            }

        ],

        "group_code": [

            {

                "type": "string"

            }

        ]

    })

// const submitForm = async (formEl: FormInstance | undefined) => {

const submitForm = async (formEl) => {

    if (!formEl) return

    await formEl.validate((valid, fields) => {

        if (valid) {

            console.log('submit!')

            alert('TODO: should call some api to accomplish the creation')

        } else {

            console.log('error submit!', fields)

        }

    })

}

// const resetForm = (formEl: FormInstance | undefined) => {

const resetForm = (formEl) => {

    if (!formEl) return

    formEl.resetFields()

}

</script>
  