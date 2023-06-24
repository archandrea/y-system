<template>
  <el-menu
    class="body__aside"
    router
    background-color="#e8e8e8"
    text-color="#999"
    active-text-color="#000"
    @click="changeColor($event)">
    <el-submenu index="/process">
      <template slot="title">
        <i class="el-icon-ship"></i>
        <span>流程</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/process/launch">流程发起</el-menu-item>
        <el-menu-item index="/process/search">流程查询</el-menu-item>
        <el-menu-item index="/process/apply">我的申请</el-menu-item>
        <el-menu-item index="/process/backlog">我的待办</el-menu-item>
        <el-menu-item index="/process/done">已办流程</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/process">
      <template slot="title">
        <i class="el-icon-ship"></i>
        <span>流程2</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">流程发起</el-menu-item>
        <el-menu-item index="1-2">流程查询</el-menu-item>
        <el-menu-item index="1-2">我的申请</el-menu-item>
        <el-menu-item index="1-2">我的待办</el-menu-item>
        <el-menu-item index="1-2">已办流程</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
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
.body__aside
  height 100%
  background-color #c5c5c5
  ul
    overflow: hidden
  .el-menu-item
    padding: 0
    width: 100%
    &.is-active
      background-color #fff !important
</style>
