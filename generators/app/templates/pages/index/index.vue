<template>
  <view class="container">
    <section class="slogan-container">
      <image src="http://dummyimage.com/750x448/e89b58" mode="aspectFill" class="slogan-banner" />
    </section>

    <section class="entry-container">
      <uni-title type="h2" title="欢迎使用 UNI-APP" class="entry-title" />

      <button type="primary">开始使用</button>
      <button type="primary" loading>开始使用 {{ user.name }}</button>
      <button type="primary" disabled>开始使用</button>
      <button type="ghost">开始使用</button>
      <button type="ghost" loading>开始使用</button>
      <button type="ghost" disabled>开始使用</button>

      <ul class="shortcut-nav">
        <li class="shortcut-nav__item">
          <image src="http://dummyimage.com/800x800/e89b58&text=A" mode="aspectFit" class="shortcut-nav__icon" />
          <text>附近</text>
        </li>
        <li class="shortcut-nav__item">
          <image src="http://dummyimage.com/800x800/6292f5&text=B" mode="aspectFit" class="shortcut-nav__icon" />
          <text>电池</text>
        </li>
        <li class="shortcut-nav__item">
          <image src="http://dummyimage.com/800x800/69c5a6&text=C" mode="aspectFit" class="shortcut-nav__icon" />
          <text>车辆</text>
        </li>
        <li class="shortcut-nav__item">
          <image src="http://dummyimage.com/800x800/b276f4&text=D" mode="aspectFit" class="shortcut-nav__icon" />
          <text>寄存</text>
        </li>
        <li class="shortcut-nav__item">
          <image src="http://dummyimage.com/800x800/e46550&text=E" mode="aspectFit" class="shortcut-nav__icon" />
          <text>我的</text>
        </li>
      </ul>
    </section>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import { useLocation } from '@/hooks/useLocation'

export default {
  name: 'IndexPage',
  setup() {
    const location = useLocation()

    return {
      location,
      name: 2
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  row-gap: 20rpx;
  padding: 0;
  background-color: #fdfbfb;
}

.slogan-banner {
  width: 100%;
  height: 447rpx;
}

.entry-container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  row-gap: 20rpx;
  padding: 0 20rpx 20rpx;
  margin-top: -60rpx;
  background-color: #fff;
  border-radius: 48rpx;
}

.entry-title {
  padding-left: 20rpx;
}

.shortcut-nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30rpx;
  padding: 20rpx 40rpx;
  text-align: center;
  border-radius: 24rpx;
  box-shadow: 0 0 20rpx 2rpx #eaeaea;

  &__item {
    display: flex;
    flex-direction: column;
    row-gap: 10rpx;
    align-items: center;
  }

  &__icon {
    width: 80rpx;
    height: 80rpx;
  }
}
</style>
