<template>
  <div>
    <p>this is data base</p>
    <div
      class="chart__container"
      ref="chart-container"></div>
    <button
      class="chart__container__btn--fullscreen"
      @click="fullScreen">
      {{ isFullScreen ? '退出全屏' : '全屏' }}
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      chart: null,
      isFullScreen: false,
      option: {
        title: {
          text: '某图表',
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      let chart = this.$echarts.init(this.$refs['chart-container'])
      this.chart = chart
      chart.setOption(this.option)
      this.window.addEventListener('resize', function () {
        this.chart.resize()
      })
    })
  },
  computed: {},
  methods: {
    fullScreen() {
      this.isFullScreen = !this.isFullScreen
      let size = this.isFullScreen
        ? { width: window.innerWidth, height: window.innerHeight }
        : { width: 600, height: 400 }
      this.chart.resize(size)
    },
  },
}
</script>

<style lang="stylus">
.chart__container
  width 600px
  height 400px
.chart__container__btn--fullscreen
  position: fixed
  bottom: 0
  left: 50%
</style>
