<template>
  <transition name="el-fade-in-linear">
    <div
      v-if="btnFlag"
      class="go-top"
      @click="backTop"
      circle
    >
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ScrollToTop",
  data () {
    return {
      btnFlag: false
    }
  }, 
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
   // 点击图片回到顶部方法，加计时器是为了过渡顺滑
   backTop () {
       let that = this
       let timer = setInterval(() => {
       let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
   },
   // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
   scrollToTop () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.go-top
  height: 40px
  width: 40px
  position: fixed
  bottom: 100px
  right: 40px
  color: #409eff
  box-shadow: 0 0 6px rgba(0,0,0,.12)
  font-size: 20px
  display: flex
  justify-content: center
  align-items: center
  border-radius: 50%
  cursor: pointer
  z-index: 5
  &:hover
    background-color: #f2f6fc
.el-icon-caret-top
  vertical-align: center
</style>