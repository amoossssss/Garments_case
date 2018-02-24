<template>
  <el-container>
    <el-row :span="24" class="connectus">

      <div id="sm">
        <el-col :sm="10" class="orderflow">
          <h2 class="titleC">訂貨流程</h2>
          <el-row :span="24" class="flow_box" type="flex" justify="center">
            <el-col :span="20">
              <img src="../../src/assets/connectUs/訂貨流程.png" class="flow_img">
            </el-col>
          </el-row>
        </el-col>

        <el-col :offset="2" :sm="12" class="connect">
          <h2 class="titleC">聯絡我們</h2>
          <h6 class="sentence">想進一步了解產品或服務,歡迎您與我們聯繫!</h6>
          <div class="form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" statusIcon label-width="100px"
                     class="demo-ruleForm">
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
                  <el-option label="帽T" value="hㄕoodie"></el-option>
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
              <el-form-item>
                <el-button type="info" @click="dialogVisible = true" class="colorButton">查看色碼錶</el-button>
              </el-form-item>
              <el-form-item label="件數" prop="numbers">
                <el-input v-model="ruleForm.numbers"></el-input>
              </el-form-item>
              <el-form-item label="內容說明" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item label="上傳檔案">
                <div class="file">
                  <el-button type="primary">
                    選擇檔案
                    <input type="file" @change="processFile($event)">
                  </el-button>
                  <p>{{fileName}}</p>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">傳送表單</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </div>

      <div id="xs">
        <el-col :xs="24" class="orderflow">
          <h2 class="titleC">訂貨流程</h2>
          <el-row :span="24" class="flow_box" type="flex" justify="center">
            <el-col :span="20">
              <img src="../../src/assets/connectUs/訂貨流程.png" class="flow_img">
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" class="connect">
          <h2 class="titleC">聯絡我們</h2>
          <h6 class="sentence">想進一步了解產品或服務,歡迎您與我們聯繫!</h6>
          <div class="form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" statusIcon label-width="100px"
                     class="demo-ruleForm">
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
              <el-form-item>
                <el-button type="info" @click="dialogVisible = true" class="colorButton">查看色碼錶</el-button>
              </el-form-item>
              <el-form-item label="件數" prop="numbers">
                <el-input v-model="ruleForm.numbers"></el-input>
              </el-form-item>
              <el-form-item label="內容說明" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item label="上傳檔案">
                <div class="file">
                  <el-button type="primary">
                    選擇檔案
                    <input type="file" @change="processFile($event)">
                  </el-button>
                  <p>{{fileName}}</p>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">傳送表單</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </div>

    </el-row>

    <el-dialog title="色碼錶" :visible.sync="dialogVisible" width="70%">
      <img src="../../src/assets/Product/顏色.jpg" class="flow_img">
    </el-dialog>

  </el-container>
</template>

<script>

  export default {
    data() {
      return {
        fileName:'',
        dialogVisible: false,
        ruleForm: {
          name: '',
          mail: '',
          clothType: '',
          color: '',
          numbers: '',
          desc: '',
          fileList: ''
        },
        rules: {
          name: [
            {required: true, message: '請輸入姓名', trigger: 'blur'},
          ],
          mail: [
            {required: true, message: '請輸入電子信箱', trigger: 'blur'},
            {type: 'email', message: '請輸入正確信箱', trigger: 'blur'}
          ],
          clothType: [
            {required: true, message: '請選擇一種款式', trigger: 'change'}
          ],
          color: [
            {required: true, message: '請選擇一種顏色', trigger: 'change'}
          ],
          numbers: [
            {required: true, message: '請輸入件數', trigger: 'blur'},
          ],
          desc: [
            {required: false}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

              let formData = new FormData();
              formData.append('uploadfile', this.ruleForm.fileList[0]);
              formData.append('name', this.ruleForm.name);
              formData.append('mail', this.ruleForm.mail);
              formData.append('clothType', this.ruleForm.clothType);
              formData.append('color', this.ruleForm.color);
              formData.append('numbers', this.ruleForm.numbers);
              formData.append('desc', this.ruleForm.desc);

              for (let pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]);
              }

              let request = new XMLHttpRequest();
              request.open("POST", "http://localhost:3000/uploadfile");
              request.send(formData);

//            let reqParam = {
//              name: this.ruleForm.name,
//              mail: this.ruleForm.mail,
//              clothType: this.ruleForm.clothType,
//              color: this.ruleForm.color,
//              numbers: this.ruleForm.numbers,
//              desc: this.ruleForm.desc,
//              uploadfile: this.ruleForm.fileList[0]
//            };


//            console.log(reqParam);

//            this.$http.post('http://localhost:3000/uploadfile',
//              {
//                formData
//              },
//              {
//                headers: {
//                  'Content-type': 'multipart/form-data'
////                    'application/json;charset=UTF-8',
//                }
//              }).then((res) => {
//              let data = res.data;
//              this.$message({
//                message: data,
//                showClose: true,
//                duration: 10000
//              });
//
//            })
//              .catch(function (error) {
//                this.$message("提交失败 請再試一次");
//                console.log(error);
//              });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.fileName = "";
      },

      processFile(event) {
        this.ruleForm.fileList = event.target.files;
        console.log(this.ruleForm.fileList[0]);
        console.log(this.ruleForm.fileList[0].name);
        this.fileName = this.ruleForm.fileList[0].name ;
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
    margin-bottom: 40px;
  }

  .connect {
    background-color: #f2f2f2;
    border-radius: 15px;

  }

  .titleC {
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

  .colorButton {
    /*margin-left: 20px;*/
  }

  .file {
    position: relative;
    display: inline-block;
  }

  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }

  #sm {
    display: none;
  }

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }
  }

  @media screen and (max-device-width: 640px) and (orientation: landscape) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }
  }

  @media screen and (min-device-width: 640px) and (max-device-width: 1024px) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }
  }

  @media screen and (min-width: 1024px) {
    #sm {
      display: block;
    }

    #xs {
      display: none;
    }
  }


</style>
