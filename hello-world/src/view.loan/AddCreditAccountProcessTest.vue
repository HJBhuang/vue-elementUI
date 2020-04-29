<template>
   <div class="container">
       <el-tabs>
           <el-tab-pane label="贷款账号开户Test" type="card">
               <el-form ref="form" :model="AddCreditAccountProcessFormTest" v-bind:rules="rules" label-width="200px">
                   <el-row>
                       <el-col :span="10" >
                           <el-form-item  label="客户号" prop="custNo">
                               <el-input type="text"  v-model="AddCreditAccountProcessFormTest.custNo" clearable maxlength="16" placeholder="请输入" ></el-input>
                           </el-form-item>
                       </el-col>

                       <el-col :span="10" >
                           <el-form-item label="贷款客户账号种类" prop="loanAccountKind">
                               <el-select v-model="AddCreditAccountProcessFormTest.loanAccountKind" clearable maxlength="2" style="width: 100%">
                                   <el-option
                                           v-for="item in items"
                                           :label="item.codeName"
                                           :value="item.codeNo"
                                           :key="item.codeNo"
                                   ></el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                   </el-row>

                   <el-row>
                       <el-col :span="10" >
                           <el-form-item label="客户贷款帐号名称" prop="loanAccountName">
                               <el-input v-model="AddCreditAccountProcessFormTest.loanAccountName" clearable maxlength="10"></el-input>
                           </el-form-item>
                       </el-col>
                        <el-col :span="10">
                            <el-form-item label="是否检查已有客户贷款账户" prop="openCheckFlg">
                                <el-select v-model="AddCreditAccountProcessFormTest.openCheckFlg" placeholder="请选择">
                                    <el-option
                                        v-for="item in openCheckFlagOptions"
                                        :label="item.codeName"
                                        :value="item.codeNo"
                                        :key="item.codeNo"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                   </el-row>

                   <el-row>
                       <el-col :span="10">
                           <el-form-item label="客户经理工号" prop="customerManageNo">
                               <el-input v-model="AddCreditAccountProcessFormTest.customerManageNo" clearable maxlength="20"></el-input>
                           </el-form-item>
                       </el-col>
                   </el-row>
                   <el-row class="el-dialog--center">
                       <el-button type="primary" icon="el-icon-check" @click="confirmOpenCreditAccount">开户</el-button>
                   </el-row>
               </el-form>
           </el-tab-pane>
       </el-tabs>
   </div>
</template>

<script>
export default {
  name: 'AddCreditAccountProcessTest',
  data () {
    return {
      addCreditAccountUrl: process.env.VUE_APP_LN_BASE_URL + '/v1/loanAccount/open',
      AddCreditAccountProcessFormTest: {
        custNo: undefined,
        loanAccountKind: undefined,
        loanAccountName: undefined,
        openCheckFlg: undefined,
        customerManageNo: undefined
      },
      items: [
        {
          codeNo: '01',
          codeName: '借方贷款户'
        }, {
          codeNo: '02',
          codeName: '借方票据户'
        }, {
          codeNo: '03',
          codeName: '贷方票据'
        }
      ],
      openCheckFlagOptions: [{
        codeNo: 'Y',
        codeName: '是'
      }, {
        codeNo: 'N',
        codeName: '否'
      }],
      rules: {
        custNo: [{required: true, message: '客户号必须填写', trigger: 'blur'}],
        loanAccountKind: [{required: true, message: '贷款客户账号种类必须填写', trigger: 'blur'}],
        loanAccountName: [{required: true, message: '客户贷款帐号名称必须填写', trigger: 'blur'}]
      }
    }
  },
  created () {
  },
  methods: {
    confirmOpenCreditAccount () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$axios.post(this.addCreditAccountUrl, this.AddCreditAccountProcessFormTest).then((res) => {
            // eslint-disable-next-line eqeqeq
            if (res.data.code != '000000') {
              this.$message.error(res.data.msg)
            } else {
              this.$message.success(res.data.msg)
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
