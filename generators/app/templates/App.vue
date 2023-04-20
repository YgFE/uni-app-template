<script>
export default {
  onLaunch() {
    console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/* 每个页面公共css */
@import '@/uni_modules/uni-scss';
@import '@/style';

/* #ifndef !H5 */

// 设置整个项目的背景色
page {
  background-color: #f5f5f5;
}

/* #endif */
</style>
