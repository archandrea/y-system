<template>
  <el-menu
    class="header__nav"
    router
    mode="horizontal"
    background-color="#fff"
    text-color="#aaa"
    active-text-color="#000">
    <el-menu-item index="/process">处理流程</el-menu-item>
    <el-menu-item index="/project">项目管理</el-menu-item>
    <el-menu-item index="/message">消息中心</el-menu-item>
    <el-menu-item index="/database">数据中心</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="stylus">
.header__nav
  .el-menu-item
    font-size: 14px
    font-weight: 500
</style>
