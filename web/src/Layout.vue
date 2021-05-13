<template>
  <div class="full">
    <div class="left">
      <el-menu default-active="/home/voice-record" class="el-menu-vertical-demo" router>
        <el-menu-item index="/home/voice-record">
          <i class="el-icon-menu"></i>
          <span slot="title">录制声音</span>
        </el-menu-item>
        <el-menu-item index="/home/screen-record">
          <i class="el-icon-document"></i>
          <span slot="title">录制屏幕</span>
        </el-menu-item>
        <el-menu-item index="/home/video-record">
          <i class="el-icon-setting"></i>
          <span slot="title">录制视频</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <div class="page-header">{{$route.meta.title}}</div>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'layout',
    data () {
      return {
        menus: []
      }
    }
  }
</script>

<style scoped lang="scss">
.left{
  width: 200px;
  float: left;
  height: 100%;
}
.el-menu-vertical-demo{
  height: 100%;
}
.main{
  position: relative;
  margin-left: 200px;
  height: 100%;
}
.main .page-header{
  height: 48px;
  line-height: 48px;
  padding-left: 24px;
  background-color: aliceblue;
}
.main .page-content{
  position: absolute;
  left: 0;
  right: 0;
  top: 48px;
  bottom: 0;
}
</style>