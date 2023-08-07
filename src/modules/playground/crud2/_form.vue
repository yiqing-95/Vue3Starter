<template>
    <!-- /** generate for table:  abc_downloads | class: AbcDownloads */ -->



    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"
        status-icon>

        <el-form-item label="Download ID" prop="download_id">

            <el-input v-model="ruleForm.download_id" /> </el-form-item>

        <el-form-item label="Filename" prop="filename">

            <el-input v-model="ruleForm.filename" /> </el-form-item>

        <el-form-item label="Mask" prop="mask">

            <el-input v-model="ruleForm.mask" /> </el-form-item>

        <el-form-item label="Max Downloads" prop="max_downloads">

            <el-input v-model="ruleForm.max_downloads" /> </el-form-item>

        <el-form-item label="Expire Days" prop="expire_days">

            <el-input v-model="ruleForm.expire_days" /> </el-form-item>

        <el-form-item label="Sort Order" prop="sort_order">

            <el-input v-model="ruleForm.sort_order" /> </el-form-item>

        <el-form-item label="Activate" prop="activate">

            <el-input v-model="ruleForm.activate" /> </el-form-item>

        <el-form-item label="Activate Order Status ID" prop="activate_order_status_id">

            <el-input v-model="ruleForm.activate_order_status_id" /> </el-form-item>

        <el-form-item label="Shared" prop="shared">

            <el-input v-model="ruleForm.shared" /> </el-form-item>

        <el-form-item label="Status" prop="status">

            <el-input v-model="ruleForm.status" /> </el-form-item>

        <el-form-item label="Date Added" prop="date_added">

            <el-input v-model="ruleForm.date_added" /> </el-form-item>

        <el-form-item label="Date Modified" prop="date_modified">

            <el-input v-model="ruleForm.date_modified" /> </el-form-item>



        <el-form-item>

            <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>

            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>

        </el-form-item>

    </el-form>
</template>
  
  <!-- <script lang="ts" setup> -->
  
<script setup>

import { reactive, ref } from 'vue'

// import type { FormInstance, FormRules } from 'element-plus'

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
 
interface AbcDownloads {
 
download_id: number,
 
filename: string,
 
mask: string,
 
max_downloads: number,
 
expire_days: number,
 
sort_order: number,
 
activate: string,
 
activate_order_status_id: number,
 
shared: number,
 
status: number,
 
date_added: string,
 
date_modified: string
 
}  */

const formSize = ref('default')

// const ruleFormRef = ref<FormInstance>()

const ruleFormRef = ref()

// const ruleForm = reactive<RuleForm>({

const ruleForm = reactive(

    {

        "download_id": null,

        "filename": "",

        "mask": "",

        "max_downloads": null,

        "expire_days": null,

        "sort_order": null,

        "activate": null,

        "activate_order_status_id": 0,

        "shared": 0,

        "status": 0,

        "date_added": "0000-00-00 00:00:00",

        "date_modified": {

            "expression": "CURRENT_TIMESTAMP",

            "params": []

        }

    })

// const rules = reactive<FormRules<RuleForm>>({

const rules = reactive(

    {

        "sort_order": [

            {

                "required": true,

                "message": "sort_order is requried",

                "trigger": "blur",

                "type": "integer"

            }

        ],

        "activate": [

            {

                "required": true,

                "message": "activate is requried",

                "trigger": "blur",

                "type": "string"

            },

            {

                "max": 64,

                "message": "max len should be 64",

                "trigger": "blur"

            }

        ],

        "filename": [

            {

                "max": 128,

                "message": "max len should be 128",

                "trigger": "blur"

            }

        ],

        "mask": [

            {

                "max": 128,

                "message": "max len should be 128",

                "trigger": "blur"

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
  