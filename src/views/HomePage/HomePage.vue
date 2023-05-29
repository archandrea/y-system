<template>
  <div>
    <header class="system__header sp-btw">
      <HeaderLogo></HeaderLogo>
      <HeaderNav></HeaderNav>
      <HeaderTools></HeaderTools>
    </header>

    <body>
      <router-view></router-view>
    </body>
    <footer></footer>
  </div>
</template>

<script>
import HeaderNav from '@/views/HomePage/components/HeaderNav'
import HeaderLogo from '@/views/HomePage/components/HeaderLogo.vue'
import HeaderTools from '@/views/HomePage/components/HeaderTools.vue'

export default {
  created() {},
  components: {
    HeaderLogo,
    HeaderNav,
    HeaderTools
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="stylus">
.system__header
  background-color: #fff
</style>
