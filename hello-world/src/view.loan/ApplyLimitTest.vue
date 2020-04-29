<template>
  <div class="container">
    <el-tabs>
      <el-tab-pane label="额度申请测试vue" type="card">
        <el-form ref="form" :model="ApplyLimitFormTest" :rules="rules" label-width="125px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="客户号" prop="custNo">
                <el-input v-model="ApplyLimitFormTest.custNo" maxlength="20">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="额度产品代码" prop="productCode">
                <el-select v-model="ApplyLimitFormTest.productCode" placeholder="请选择">
                  <el-option
                    v-for="item in options.productCodeOptions.data"
                    :key="item.codeNo"
                    :label="item.codeName"
                    :value="item.codeNo"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="额度金额" prop="limit">
                <el-input v-model="ApplyLimitFormTest.limit" maxlength="20"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="币种" prop="currency">
                <el-select v-model="ApplyLimitFormTest.currency" placeholder="请选择">
                  <el-option
                    v-for="item in options.currencyOptions.data"
                    :key="item.codeNo"
                    :label="item.codeName"
                    :value="item.codeNo"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="生效日期" prop="effectiveDate">
                  <el-date-picker
                    v-model="ApplyLimitFormTest.effectiveDate"
                    type="date"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="失效时间" prop="expiryDate">
                  <el-date-picker
                    v-model="ApplyLimitFormTest.expiryDate"
                    type="date"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="单选框" prop="radio">
                <el-radio v-model="radio" label="yes">yes</el-radio>
                <el-radio v-model="radio" label="no">no</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="互斥的单选框">
                <el-radio-group v-model="ApplyLimitFormTest.radio2">
                  <el-radio
                    v-for="item in options.currencyOptions.data"
                    :key="item.codeNo"
                    :label="item.codeName"
                    :value="item.codeNo"
                  ></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
export default {
  name: 'ApplyLimitTest',
  data () {
    return {
      radio: '1',
      url_applyLimit: process.env.VUE_APP_LN_BASE_URL + '/v1/loanLimit/apply',
      ApplyLimitFormTest: {
        radio2: undefined,
        custNo: undefined,
        productCode: undefined,
        limit: undefined,
        currency: undefined,
        effectiveDate: undefined,
        expiryDate: undefined
      },
      rules: {
        custNo: [{required: true, message: '你大爷滴，这个必须填写'}]
      },

      options: {
        productCodeOptions: {
          data: [{codeNo: 'CRD001', codeName: '短期贷款-收复利'}, {codeNo: 'CRD002', codeName: '融资性保函'},
            {codeNo: 'CRD003', codeName: '委托贷款-收复利'}, {codeNo: 'CRD004', codeName: '非融资性保函'}],
          url: undefined
        },
        currencyOptions: {
          data: [{codeNo: 'CNY', codeName: '人民币'}, {codeNo: 'USD', codeName: '美元'}, {
            codeNo: 'EUR',
            codeName: '欧元'
          }, {codeNo: 'HKD', codeName: '港币'}],
          url: undefined
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
