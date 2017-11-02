<template>
  <el-container>
    <el-row :span="24" class="connectus">

      <el-col :span="10" class="orderflow">
        <h2 class="try1">OrderFlow</h2>
        <div style="height: 300px;" class="flow">
          <el-steps direction="vertical" :active="1" >
            <el-step title="Step 1"></el-step>
            <el-step title="Step 2" ></el-step>
            <el-step title="Step 3" status="process" description="Place Description Right Here"></el-step>
            <el-step title="Step 4" status="success"></el-step>
          </el-steps>
        </div>
      </el-col>

      <el-col :offset="2" :span="12" class="connect">
        <h2 class="try1">ConnectUs</h2>
      </el-col>

    </el-row>
  </el-container>
</template>

<style>

  .connectus {
    width: 100%;
  }

  .orderflow {
    background-color: #f2f2f2;
    border-radius: 15px;
    height: 500px;
  }

  .connect {
    background-color: #f2f2f2;
    border-radius: 15px;
    height: 700px;
  }

  .try1 {
    text-align: center;
    color: #f8ab35;
    padding-top: 30px;
  }

  .flow {
    padding-left: 20px;
  }

</style>
