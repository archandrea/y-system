<template>
  <div class="header__tool-set sp-btw">
    <i class="header__tool el-icon-message"></i>
    <i class="header__tool el-icon-chat-dot-round"></i>
    <i class="header__tool el-icon-full-screen"></i>
    <i class="header__tool el-icon-refresh"></i>
  </div>
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
.header__tool-set
  width: 160px

.header__tool
  width: 35px
  color: #aaa
  font-size: 24px
  line-height: 60px
  text-align: center
  cursor pointer
  &:hover
    color: #000

</style>