<template>
  <div>
    <router-link to="/">
      <h1
        class="header__logo"
        id="logo">
        <span>L</span>
        <span>O</span>
        <span>G</span>
        <span>O</span>
      </h1>
    </router-link>
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
.header__logo
  display: flex
  justify-content: space-between
  padding: 10px 20px
  width: 180px
  cursor pointer
  span
    width: 40px
    height: 40px
    text-align: center
    font-size: 30px
    line-height: 40px
    font-weight: 500
    color: #fff
    background-color: #000
</style>
