<template>
  <div>
    
    <el-menu class="el-menu-demo"
             mode="horizontal"
             background-color="#eee">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">消息中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">消息中心</el-menu-item>
      <el-menu-item index="5">消息中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeIndex: '1',
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="stylus">
+prefix-classes('el-')
  .menu-demo
    margin: 10px
    padding: 20px
    .item
      margin: 10px
</style>