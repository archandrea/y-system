<template>
  <router-view></router-view>
</template>

<script>
import axios from 'axios' // 引入axios
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {
    axios.get('/mock/news').then((res) => {
      // url即在mock.js中定义的
      console.log(res.data) // 打印一下响应数据
    })
  },
  methods: {},
}
</script>

<style lang="stylus">
@import '@/assets/stylus/general.styl'
</style>
