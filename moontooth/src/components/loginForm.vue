<template>
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules" label-width="auto"
        class="demo-ruleForm">

        <el-form-item label="用户名" prop="userId">
            <el-input v-model="ruleForm.userId" autocomplete="off" />
        </el-form-item>

        <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>

        <el-form-item class="form_button">
            <el-button type="info" @click="submitForm(ruleFormRef)">
                Submit
            </el-button>
        </el-form-item>

    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const validateUserId = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the UserId'))
    } else {
        if (ruleForm.checkUserId !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkUserId')
        }
        callback()
    }
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass')
        }
        callback()
    }
}


const ruleForm = reactive({
    userId: '',
    pass: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
    userId: [{ validator: validateUserId, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
            // // 调用 API 提交表单数据
            // axios.post('/api/submit', ruleForm)
            //     .then(response => {
            //         console.log('提交成功', response.data);
            //     })
            //     .catch(error => {
            //         console.error('提交失败', error);
            //     });
        } else {
            console.log('error submit!')
        }
    })
}

</script>

<style>
.form_button{
    margin-top: 50px;
    display: grid;
    justify-content: center;
}
</style>