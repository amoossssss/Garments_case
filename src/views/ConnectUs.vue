<template>
  <el-container>
    <el-row :span="24" class="connectus">

      <el-col :span="10" class="orderflow">
        <h2 class="try1">訂貨流程</h2>
        <el-row :span="24"  class="flow_box" type="flex" justify="center">
          <el-col :span="20">
            <img src="../../src/assets/connectUs/訂貨流程.png" class="flow_img">
          </el-col>
          <!--<el-col :offset="3" :span="3">-->
            <!--<img src="../../src/assets/connectUs/1.png" class="flow_img">-->
          <!--</el-col>-->
          <!--<el-col :offset="1" :span="16">-->
            <!--<p class="flow_desc">填寫線上表單，告知需求</p>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :span="24" class="flow_box">-->
          <!--<el-col :offset="3" :span="3">-->
            <!--<img src="../../src/assets/connectUs/2.png" class="flow_img">-->
          <!--</el-col>-->
          <!--<el-col :offset="1" :span="16">-->
            <!--<p class="flow_desc">雙方確認報價</p>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :span="24" class="flow_box">-->
          <!--<el-col :offset="3" :span="3">-->
            <!--<img src="../../src/assets/connectUs/3.png" class="flow_img">-->
          <!--</el-col>-->
          <!--<el-col :offset="1" :span="16">-->
            <!--<p class="flow_desc">訂單確立，支付1/2訂金</p>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :span="24" class="flow_box">-->
          <!--<el-col :offset="3" :span="3">-->
            <!--<img src="../../src/assets/connectUs/4.png" class="flow_img">-->
          <!--</el-col>-->
          <!--<el-col :offset="1" :span="16">-->
            <!--<p class="flow_desc">套量衣服，確認尺寸</p>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :span="24" class="flow_box">-->
          <!--<el-col :offset="3" :span="3">-->
            <!--<img src="../../src/assets/connectUs/5.png" class="flow_img">-->
          <!--</el-col>-->
          <!--<el-col :offset="1" :span="16">-->
            <!--<p class="flow_desc">校對設計圖(顏色、圖案大小)</p>-->
            <!--<p class="flow_desc">開版打樣</p>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :span="24" class="flow_box">-->
          <!--<el-col :offset="3" :span="3">-->
            <!--<img src="../../src/assets/connectUs/6.png" class="flow_img">-->
          <!--</el-col>-->
          <!--<el-col :offset="1" :span="16">-->
            <!--<p class="flow_desc">客戶確認尺寸數量</p>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :span="24" class="flow_box">-->
          <!--<el-col :offset="3" :span="3">-->
            <!--<img src="../../src/assets/connectUs/7.png" class="flow_img">-->
          <!--</el-col>-->
          <!--<el-col :offset="1" :span="16">-->
            <!--<p class="flow_desc">等候產品製作</p>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :span="24" class="flow_box">-->
          <!--<el-col :offset="3" :span="3">-->
            <!--<img src="../../src/assets/connectUs/8.png" class="flow_img">-->
          <!--</el-col>-->
          <!--<el-col :offset="1" :span="16">-->
            <!--<p class="flow_desc">收貨並支付尾款</p>-->
          <!--</el-col>-->
        </el-row>
      </el-col>

      <el-col :offset="2" :span="12" class="connect">
        <h2 class="try1">聯絡我們</h2>
        <h6 class="sentence">想進一步了解產品或服務,歡迎您與我們聯繫!</h6>
        <div class="form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" statusIcon label-width="100px" class="demo-ruleForm" >
            <el-form-item label="名字" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="電子信箱" prop="mail">
              <el-input v-model="ruleForm.mail"></el-input>
            </el-form-item>
            <el-form-item label="款式" prop="clothType">
              <el-select v-model="ruleForm.clothType" placeholder="請選擇款式">
                <el-option label="T恤" value="t-shirt"></el-option>
                <el-option label="POLO衫" value="polo"></el-option>
                <el-option label="帽T" value="hoodie"></el-option>
                <el-option label="帆布袋" value="bag"></el-option>
                <el-option label="其他" value="other"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="顏色" prop="color">
              <el-select v-model="ruleForm.color" placeholder="請選擇顏色">
                <el-option label="鵝黃" value="1A"></el-option>
                <el-option label="土黃" value="04"></el-option>
                <el-option label="淺綠" value="07"></el-option>
                <el-option label="淺藍" value="06"></el-option>
                <el-option label="藍色" value="09"></el-option>
                <el-option label="淺粉" value="17"></el-option>
                <el-option label="橙橘" value="08"></el-option>
                <el-option label="桃紅" value="20"></el-option>
                <el-option label="紅色" value="15"></el-option>
                <el-option label="深紅" value="14"></el-option>
                <el-option label="草綠" value="19"></el-option>
                <el-option label="深綠" value="13"></el-option>
                <el-option label="寶藍" value="10"></el-option>
                <el-option label="丈青" value="11A"></el-option>
                <el-option label="紫色" value="05"></el-option>
                <el-option label="白色" value="23"></el-option>
                <el-option label="米白" value="22"></el-option>
                <el-option label="淺灰" value="16"></el-option>
                <el-option label="深灰" value="18"></el-option>
                <el-option label="黑色" value="12"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="件數" prop="numbers">
              <el-input v-model="ruleForm.numbers"></el-input>
            </el-form-item>
            <el-form-item label="內容說明" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="上傳檔案">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                multiple
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="ruleForm.fileList">
                <el-button size="small" type="primary">點擊上傳</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">傳送表單</el-button>
              <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>

    </el-row>
  </el-container>
</template>

<script>
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {
      ElCol,
      ElRow,
      ElFormItem},
    data() {
      return {
        ruleForm: {
          name: '',
          mail: '',
          clothType: '',
          color: '',
          numbers:'',
          desc: '',
          fileList: []
        },
        rules: {
          name: [
            { required: true, message: '請輸入姓名', trigger: 'blur' },
          ],
          mail: [
            { required: true, message: '請輸入電子信箱', trigger: 'blur' },
            { type:'email', message: '請輸入正確信箱', trigger: 'blur'}
          ],
          clothType:[
            { required: true, message: '請選擇一種款式', trigger: 'change' }
          ],
          color: [
            { required: true, message: '請選擇一種顏色', trigger: 'change' }
          ],
          numbers: [
            { required: true, message: '請輸入件數', trigger: 'blur' },
          ],
          desc: [
            { required: false}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`限制選擇1 個文件，您選擇了 ${files.length} 个文件，共選擇了 ${files.length + fileList.length} 個文件`);
      }
    }
  }
</script>

<style>

  .connectus {
    width: 100%;
  }

  .form {
    padding-left: 5px;
    padding-right: 20px;
  }

  .orderflow {
    background-color: #f2f2f2;
    border-radius: 15px;
  }

  .connect {
    background-color: #f2f2f2;
    border-radius: 15px;

  }

  .try1 {
    text-align: center;
    color: #f8ab35;
    padding-top: 5px;
    letter-spacing: 3px;
  }

  .sentence {
    text-align: center;
    color: #191919;
    font-size: small;
    padding-left: 5px;
    padding-right: 5px;
  }

  .flow_img {
    width: 100%;
  }

  .flow_box {
    padding-bottom: 15px;
  }

  .flow_desc {
    font-size: small;
  }

</style>
