<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"> 
        引入一个图片 
      </el-aside>
      <el-main> Main </el-main>
    </el-container>
  </div>
</template>

<script setup name="LoginView">
</script>

<style scoped>
.el-aside {
  background: #1a1a1a;
  width: 40%;
}

.el-main {
  height: calc(100vh);
}
</style>
