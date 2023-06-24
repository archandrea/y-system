<template>
  <el-container id="page">
    <el-header class="system__header sp-btw">
      <HeaderLogo></HeaderLogo>
      <HeaderNav></HeaderNav>
      <HeaderTools></HeaderTools>
    </el-header>

    <el-main class="system__main">
      <el-row>
        <el-col :span="4">
          <BodyAside></BodyAside>
        </el-col>
        <el-col :span="20">
          <div class="system__tab-wrap">
            <el-tabs
              type="border-card"
              v-if="tabs.length > 0"
              v-model="tabIndex"
              closable
              @tab-remove="removeTab">
              <el-tab-pane
                v-for="tab in tabs"
                :key="tab['label']">
                <span slot="label">
                  <router-link :to="tab['path']">{{ tab['label'] }}</router-link>
                </span>
                <router-view></router-view>
              </el-tab-pane>
            </el-tabs>
            <div v-else>no tabs</div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import HeaderNav from '@/views/HomePage/components/HeaderNav'
import HeaderLogo from '@/views/HomePage/components/HeaderLogo'
import HeaderTools from '@/views/HomePage/components/HeaderTools'
import BodyAside from '@/views/HomePage/components/BodyAside'

export default {
  components: {
    HeaderLogo,
    HeaderNav,
    HeaderTools,
    BodyAside,
  },
  data() {
    return {
      tabIndex: 0,
      tabs: [
        {
          label: '处理流程',
          path: '/process',
        },
        {
          label: '项目',
          path: '/project',
        },
      ],
    }
  },
  computed: {},
  methods: {
    removeTab(targetName) {
        let tabs = this.tabs;
        let activeName = this.tabIndex;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.tabIndex = activeName;
        this.tabs = tabs.filter(tab => tab.name !== targetName);
    }
  },
}
</script>

<style lang="stylus">
html,
body,
#page
  height 100%

.system__main
  padding: 0
  height: 100%

  > .el-row,
  > .el-row > .el-col
    height: 100%

.system__header
  background-color: #fff

.system__tab-wrap
  margin 10px
</style>
