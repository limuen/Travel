<template>
    <div class="header">
        <router-link to="/">
        <div class="iconfont Header-back">&#xe624;</div>
        </router-link>
        城市选择
    </div>
</template>

<script>
    export default {
        name: 'CityHeader'
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .header
     height $headerHeight
     line-height $headerHeight
     text-align center
     color #ffffff
     overflow hidden
     background $bgColor
     position relative
     font-size .32rem
     .Header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #ffffff
</style>